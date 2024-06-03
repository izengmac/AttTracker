import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, FlatList, Button } from 'react-native';
import { getDatabase, ref, onValue, update, push } from 'firebase/database';

const GradesScreen = () => {
  const [grades, setGrades] = useState({});
  const [editableData, setEditableData] = useState({});
  const [newActivity, setNewActivity] = useState('');
  const [newDate, setNewDate] = useState('');
  const [newRecord, setNewRecord] = useState('');
  const db = getDatabase();

  useEffect(() => {
    const gradesRef = ref(db, `other_scores`);
    onValue(gradesRef, (snapshot) => {
      const data = snapshot.val() || {};
      setGrades(data);
      setEditableData(data);
    });
  }, [db]);

  const handleInputChange = (userId, activity, date, value) => {
    setEditableData((prevData) => ({
      ...prevData,
      [userId]: {
        ...prevData[userId],
        [activity]: {
          ...prevData[userId][activity],
          [date]: value,
        },
      },
    }));
  };

  const handleSave = () => {
    const gradesRef = ref(db, `other_scores`);
    update(gradesRef, editableData)
      .then(() => {
        console.log('Data updated successfully!');
      })
      .catch((error) => {
        console.error('Error updating data:', error);
      });
  };

  const handleAddActivity = (userId) => {
    setEditableData((prevData) => ({
      ...prevData,
      [userId]: {
        ...prevData[userId],
        [newActivity]: {},
      },
    }));
    setNewActivity('');
  };

  const handleAddRecord = (userId, activity) => {
    setEditableData((prevData) => ({
      ...prevData,
      [userId]: {
        ...prevData[userId],
        [activity]: {
          ...prevData[userId][activity],
          [newDate]: newRecord,
        },
      },
    }));
    setNewDate('');
    setNewRecord('');
  };

  const handleAddNewActivity = () => {
    const newActivityRef = push(ref(db, 'other_scores'));
    const newActivityKey = newActivityRef.key;
    setGrades((prevGrades) => ({
      ...prevGrades,
      [newActivityKey]: { [newActivity]: {} },
    }));
    setEditableData((prevData) => ({
      ...prevData,
      [newActivityKey]: { [newActivity]: {} },
    }));
    setNewActivity('');
  };

  const renderActivity = ({ item }) => {
    const [userId, activities] = item;

    return (
      <View style={{ padding: 10, borderBottomWidth: 1, borderColor: 'gray' }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{userId}</Text>
        {Object.entries(activities).map(([activity, records]) => (
          <View key={activity}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{activity}</Text>
            {Object.entries(records).map(([date, value]) => (
              <View key={date} style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
                <Text style={{ width: 100 }}>{date}</Text>
                <TextInput
                  style={{ borderWidth: 1, borderColor: 'gray', padding: 5, flex: 1 }}
                  value={String(value)}
                  onChangeText={(newValue) => handleInputChange(userId, activity, date, newValue)}
                  keyboardType="numeric"
                />
              </View>
            ))}
            <TextInput
              placeholder="New Date"
              value={newDate}
              onChangeText={setNewDate}
              style={{ borderWidth: 1, borderColor: 'gray', padding: 5, marginVertical: 5 }}
            />
            <TextInput
              placeholder="New Record"
              value={newRecord}
              onChangeText={setNewRecord}
              style={{ borderWidth: 1, borderColor: 'gray', padding: 5, marginVertical: 5 }}
              keyboardType="numeric"
            />
            <Button title="Add Record" onPress={() => handleAddRecord(userId, activity)} />
          </View>
        ))}
        <TextInput
          placeholder="New Activity"
          value={newActivity}
          onChangeText={setNewActivity}
          style={{ borderWidth: 1, borderColor: 'gray', padding: 5, marginVertical: 5 }}
        />
        <Button title="Add Activity" onPress={() => handleAddActivity(userId)} />
      </View>
    );
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <FlatList
        data={Object.entries(grades)}
        renderItem={renderActivity}
        keyExtractor={(item) => item[0]}
      />
      <Button title="Save" onPress={handleSave} />
      <Button title="Add New Activity" onPress={handleAddNewActivity} />
    </View>
  );
};

export default GradesScreen;
