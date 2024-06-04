import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { getDatabase, ref, onValue } from 'firebase/database';

const GradesScreen = ({ navigation }) => {
  const [grades, setGrades] = useState({});
  const db = getDatabase();

  useEffect(() => {
    const gradesRef = ref(db, 'other_scores');
    onValue(gradesRef, (snapshot) => {
      const data = snapshot.val() || {};
      setGrades(data);
    });
  }, [db]);

  const renderActivity = ({ item }) => {
    const [userId, activities] = item;

    return (
      <View style={{ padding: 10, borderBottomWidth: 1, borderColor: 'gray' }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{userId}</Text>
        {activities &&
          Object.entries(activities).map(([activity, records]) => (
            <View key={activity}>
              <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{activity}</Text>
              {records &&
                Object.entries(records).map(([date, value]) => (
                  <View key={date} style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
                    <Text style={{ width: 100 }}>{date}</Text>
                    <Text style={{ borderWidth: 1, borderColor: 'gray', padding: 5, flex: 1 }}>
                      {String(value)}
                    </Text>
                  </View>
                ))}
            </View>
          ))}
      </View>
    );
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Button title="AddactivityScreen" onPress={() => navigation.navigate('AddActivityScreen', { userId: 'userId1' })} />
      <FlatList
        data={Object.entries(grades)}
        renderItem={renderActivity}
        keyExtractor={(item) => item[0]}
      />
    </View>
  );
};

export default GradesScreen;
