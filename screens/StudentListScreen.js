import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { getDatabase, ref, onValue } from "firebase/database";

function StudentListScreen({ navigation }) {
  const route = useRoute();
  const { groupId } = route.params;
  console.log(groupId);

  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch students from the database based on the groupId
    const fetchStudents = async () => {
      try {
        const db = getDatabase();
        const studentsRef = ref(db, 'users');
        onValue(studentsRef, (snapshot) => {
          const data = snapshot.val();
          if (data) {
            const studentsArray = Object.keys(data)
              .filter((userId) => data[userId].groupId === groupId) // Filter students based on groupId
              .map((userId) => ({
                id: userId,
                name: data[userId].name,
                age: data[userId].age
              }));
            setStudents(studentsArray);
          }
        });
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };

    fetchStudents();
  }, [groupId]);

  const handleAddUser = () => {
    // Navigate to another screen where h andleAddUser is called
    navigation.navigate('AddStudentScreen', { groupId: groupId });
  };

  return (
    <View>
      <View style={{
        paddingTop: 80,
        paddingHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 1,
        borderColor: '#D9D9D9',
        borderWidth: 2,
        paddingBottom: 10
      }}>
        <Text style={{
          fontSize: 18,
          fontWeight: '600',
          textAlign: 'center'
        }}>Students</Text>
        <TouchableOpacity onPress={handleAddUser} >
          <Image
            source={require('../src/assets/users-medical.png')}
            style={{
              width: 30,
              height: 30
            }}
          />
        </TouchableOpacity>
      </View>
      {students.map((student) => (
        <TouchableOpacity
          key={student.id}
          style={{
            borderRadius: 1,
            borderColor: '#D9D9D9',
            borderBottomWidth: 2,
            paddingBottom: 10
          }}
          onPress={() => navigation.navigate('StudentDetails', { studentId: student.id })}
        >
          <View
            style={{
              flexDirection: 'row',
              paddingTop: 10,
            }}
          >
            <Image
              source={require('../src/assets/users (1).png')}
              style={{
                width: 30,
                height: 30,
                marginLeft: 30
              }}
            />
            <Text style={{
              fontSize: 20,
              fontWeight: '600',
              paddingLeft: 2
            }}
            >{student.name}</Text>
          </View>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '400',
              paddingLeft: 60
            }}
          >{student.age} years old</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

export default StudentListScreen;
