import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { getDatabase, ref, onValue, get, set } from "firebase/database";

function DateDetails({ route }) {
  const { groupId } = route.params;
  const date = "2024-05-13"; // Change this to a dynamic date if needed
  const [attendanceData, setAttendanceData] = useState({});
  const [userData, setUserData] = useState({});
  const db = getDatabase();

  useEffect(() => {
    const attendanceRef = ref(db, `attendance`);
    onValue(attendanceRef, (snapshot) => {
      const data = snapshot.val() || {};
      setAttendanceData(data);
      const users = Object.keys(data);
      fetchUserData(users);
    });
  }, [db, groupId, date]);

  const fetchUserData = (userIds) => {
    userIds.forEach((userId) => {
      const userRef = ref(db, `users/${userId}`);
      get(userRef)
        .then((snapshot) => {
          if (snapshot.exists()) {
            const userData = snapshot.val();
            setUserData((prevData) => ({
              ...prevData,
              [userId]: userData.name, // Set user name in userData state
            }));
          }
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    });
  };

  const toggleAttendanceStatus = (userId) => {
    const currentStatus = attendanceData[userId]?.[date];
    const newStatus = currentStatus === "present" ? "absent" : "present";
    const attendanceRef = ref(db, `attendance/${userId}/${date}`);
    set(attendanceRef, newStatus)
      .then(() => {
        setAttendanceData((prevData) => ({
          ...prevData,
          [userId]: {
            ...prevData[userId],
            [date]: newStatus,
          },
        }));
      })
      .catch((error) => {
        console.error("Error updating attendance status:", error);
      });
  };

  const renderAttendanceList = () => {
    return Object.keys(attendanceData).map((userId) => (
      <View
        key={userId}
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 10,
          borderBottomWidth: 1,
          borderColor: "#000000",
          paddingTop: 30,
          paddingBottom: 4,
        }}
      >
        <Text>{userData[userId]}</Text>
        <TouchableOpacity onPress={() => toggleAttendanceStatus(userId)}>
          <FontAwesome5
            name={
              attendanceData[userId]?.[date] === "present"
                ? "smile"
                : "frown"
            }
            size={24}
            color={
              attendanceData[userId]?.[date] === "present"
                ? "green"
                : "red"
            }
          />
        </TouchableOpacity>
      </View>
    ));
  };

  return (
    <View style={{ paddingTop: 16 }}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 10,
          paddingVertical: 8,
          borderBottomWidth: 1,
          borderColor: "gray",
        }}
      >
        <Feather name="x" size={24} color="black" />
        <Text>Date</Text>
        <Ionicons name="trash-bin" size={24} color="black" />
      </View>
      <View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 10,
            paddingHorizontal: 10,
          }}
        >
          <Image source={require("../src/assets/calendar-day.png")} />
          <Text
            style={{
              textAlign: "center",
              fontSize: 18,
              paddingLeft: 4,
            }}
          >
            {date}
          </Text>
        </View>
        <Text style={{ fontSize: 16 }}>
          {Object.keys(attendanceData).length} attendances
        </Text>
      </View>
      <View style={{ height: "75%", width: "full", backgroundColor: "#EAE3E6" }}>
        {renderAttendanceList()}
      </View>
    </View>
  );
}

export default DateDetails;
