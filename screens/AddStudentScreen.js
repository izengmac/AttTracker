import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { getDatabase, ref, push, set, update } from 'firebase/database';
import { db } from "../utils/firebaseHelper";

function AddUserScreen({ navigation, route }) {
  const { groupId } = route.params;
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');
  const currentDate = new Date().toISOString().split("T")[0];


  const handleAddUser = () => {
    if (userName.trim() !== '' && userAge.trim() !== '') {
      const db = getDatabase();
      const usersRef = ref(db, 'users');
      
      // Push a new user to the database
      const newUserRef = push(usersRef);

      // Get the unique key generated by push() for the new user
      const userId = newUserRef.key;

      // Define the data for the new user
      const newUserData = {
        name: userName.trim(),
        age: userAge.trim(),
        groupId: groupId // Assign the groupId to the new user
      };

      // Set the data for the new user
      set(newUserRef, newUserData)
        .then(() => {
          // User added successfully
          // console.log('User added with ID:', userId);

          // Update the members of the group with the new user
          const groupRef = ref(db, `groups/${groupId}/members`);
          update(groupRef, { [userId]: true });
          // const AttendanceRef = ref(db, 'attendance');
          // update(AttendanceRef, {[userId]:'absent'});
          const userAttendanceRef = ref(db, `attendance/${userId}`);
          update(userAttendanceRef, { [currentDate]: "absent" });

          // Navigate back to the StudentListScreen
          navigation.navigate('StudentList', { groupId: groupId });
        })
        .catch((error) => {
          console.error('Error adding user:', error);
        });
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Add New Student</Text>
      <TextInput
        placeholder="Student Name"
        value={userName}
        onChangeText={setUserName}
        style={{ borderWidth: 1, borderColor: 'gray', marginVertical: 10, padding: 8, width: 200 }}
      />
      <TextInput
        placeholder="Student Age"
        value={userAge}
        onChangeText={setUserAge}
        style={{ borderWidth: 1, borderColor: 'gray', marginVertical: 10, padding: 8, width: 200 }}
      />
      <Button title="Add Student" onPress={handleAddUser} />
    </View>
  );
}

export default AddUserScreen;
