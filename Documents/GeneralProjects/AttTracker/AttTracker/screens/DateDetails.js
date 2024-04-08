import React from "react";
import { View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";



function DateDetails() {
  return (
    <View
      style={{
        paddingTop: 16,
      }}
    >
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
            flexDirection:'row'
          }}
        >
          <Image source={require('../src/assets/calendar-day.png')}/>
          <Text>Tuesday, March 9 2024</Text>
        </View>
        <Text style={{}}>10 attendces</Text>
      </View>
      <View
        style={{
          height: "75%",
          width: "full",
        }}
      >
        <View>
          <Text>Jobs</Text>
          <Feather name="check-circle" size={24} color="green" />
        </View>
      </View>
    </View>
  );
}

export default DateDetails;
