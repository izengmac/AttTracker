import React from "react";
import { View, Text, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

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
            Tuesday, March 9 2024
          </Text>
        </View>
        <Text
          style={{
            fontSize: 16,
          }}
        >
          10 attendces
        </Text>
      </View>
      <View
        style={{
          height: "75%",
          width: "full",
          backgroundColor: "gray",
        }}
      >
        <View
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
          <Text>Jobs</Text>
          <Feather name="check-circle" size={24} color="green" />
        </View>
        <View
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
          <Text>Steve</Text>
          <FontAwesome5 name="bed" size={24} color="yellow" />
        </View>
        <View
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
          <Text>Caroline</Text>
          <FontAwesome5 name="bed" size={24} color="yellow" />
        </View>
      </View>
    </View>
  );
}

export default DateDetails;
