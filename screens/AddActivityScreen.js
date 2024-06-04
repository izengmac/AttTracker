import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { getDatabase, ref, update } from 'firebase/database';

const AddActivityScreen = ({ navigation, route }) => {
  const { userId } = route.params;
  const [activityName, setActivityName] = useState('');
  const [recordDate, setRecordDate] = useState('');
  const [recordValue, setRecordValue] = useState('');

  const handleAddActivity = () => {
    if (!activityName || !recordDate || !recordValue) {
      alert('All fields are required');
      return;
    }

    const db = getDatabase();
    const activityRef = ref(db, `other_scores/${userId}/${activityName}/${recordDate}`);

    update(activityRef, recordValue)
      .then(() => {
        console.log('Activity added successfully!');
        navigation.goBack();
      })
      .catch((error) => {
        console.error('Error adding activity:', error);
      });
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TextInput
        placeholder="Activity Name"
        value={activityName}
        onChangeText={setActivityName}
        style={{ borderWidth: 1, borderColor: 'gray', padding: 10, marginVertical: 10 }}
      />
      <TextInput
        placeholder="Record Date"
        value={recordDate}
        onChangeText={setRecordDate}
        style={{ borderWidth: 1, borderColor: 'gray', padding: 10, marginVertical: 10 }}
      />
      <TextInput
        placeholder="Record Value"
        value={recordValue}
        onChangeText={setRecordValue}
        style={{ borderWidth: 1, borderColor: 'gray', padding: 10, marginVertical: 10 }}
      />
      <Button title="Add Activity" onPress={handleAddActivity} />
    </View>
  );
};

export default AddActivityScreen;
