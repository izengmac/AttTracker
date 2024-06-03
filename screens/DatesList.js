import React, { useState, useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { getDatabase, ref, onValue } from "firebase/database";

function DatesListScreen({ navigation }) {
  const route = useRoute();
  const { groupId } = route.params;
  const [dates, setDates] = useState([]);
  const [attendanceData, setAttendanceData] = useState({});
  const db = getDatabase();

  useEffect(() => {
    const fetchAttendanceData = () => {
      const attendanceRef = ref(db, `attendance`);
      onValue(attendanceRef, (snapshot) => {
        const data = snapshot.val() || {};
        setAttendanceData(data);
      });
    };

    fetchAttendanceData();
  }, [db]);

  useEffect(() => {
    const uniqueDates = new Set();

    Object.values(attendanceData).forEach(innerObj => {
      Object.keys(innerObj).forEach(date => {
        uniqueDates.add(date);
      });
    });

    const uniqueDatesArray = Array.from(uniqueDates);
    setDates(uniqueDatesArray);
  }, [attendanceData]);

  const renderDateItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("DateDetails", { groupId, date: item })}
      style={{
        borderRadius: 1,
        borderColor: "#D9D9D9",
        borderBottomWidth: 2,
        paddingBottom: 10,
      }}
    >
      <View style={{ flexDirection: "row", paddingTop: 10 }}>
        <Image
          source={require("../src/assets/calendar-day.png")}
          style={{ width: 30, height: 30, marginLeft: 30 }}
        />
        <Text style={{ fontSize: 20, fontWeight: "600", paddingLeft: 2 }}>
          {item}
        </Text>
      </View>
      {/* Additional date information */}
    </TouchableOpacity>
  );

  return (
    <View>
      <View
        style={{
          paddingTop: 80,
          paddingHorizontal: 16,
          flexDirection: "row",
          justifyContent: "space-between",
          borderRadius: 1,
          borderColor: "#D9D9D9",
          borderWidth: 2,
          paddingBottom: 10,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "600", textAlign: "center" }}>
          Dates
        </Text>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={() => navigation.navigate("CreateDateScreen", { groupId })}>
            <Image
              source={require("../src/assets/calendar-plus.png")}
              style={{ width: 30, height: 30 }}
            />
          </TouchableOpacity>
          <Image
            source={require("../src/assets/menu-dots-vertical.png")}
            style={{ width: 30, height: 30, marginLeft: 30 }}
          />
        </View>
      </View>
      <FlatList
        data={dates}
        renderItem={renderDateItem}
        keyExtractor={(item) => item}
      />
    </View>
  );
}

export default DatesListScreen;
