import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

function DatesListScreen({ navigation }) {
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
        <Text
          style={{
            fontSize: 18,
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          Dates
        </Text>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("CreateDateScreen")} >
          <Image
            source={require("../src/assets/calendar-plus.png")}
            style={{
              width: 30,
              height: 30,
            }}
            
          />
        </TouchableOpacity>
          <Image
            source={require("../src/assets/menu-dots-vertical.png")}
            style={{
              width: 30,
              height: 30,
              marginLeft: 30,
            }}
          />
        </View>
      </View>
      <TouchableOpacity
        style={{
          borderRadius: 1,
          borderColor: "#D9D9D9",
          borderBottomWidth: 2,
          paddingBottom: 10,
        }}
        onPress={() => navigation.navigate("DateDetails")}
      >
        <View
          style={{
            flexDirection: "row",
            paddingTop: 10,
          }}
        >
          <Image
            source={require("../src/assets/calendar-day.png")}
            style={{
              width: 30,
              height: 30,
              marginLeft: 30,
            }}
          />
          <Text
            style={{
              fontSize: 20,
              fontWeight: "600",
              paddingLeft: 2,
            }}
          >
            Tuesday, March 9, 2024
          </Text>
        </View>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "400",
            paddingLeft: 60,
          }}
        >
          2 times present (40%) last tie at 9/19/24
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          borderRadius: 1,
          borderColor: "#D9D9D9",
          borderBottomWidth: 2,
          paddingBottom: 10,
        }}
        onPress={() => navigation.navigate("DateDetails")}
      >
        <View
          style={{
            flexDirection: "row",
            paddingTop: 10,
          }}
        >
          <Image
            source={require("../src/assets/calendar-day.png")}
            style={{
              width: 30,
              height: 30,
              marginLeft: 30,
            }}
          />
          <Text
            style={{
              fontSize: 20,
              fontWeight: "600",
              paddingLeft: 2,
            }}
          >
            Tuesday, March 9, 2024
          </Text>
        </View>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "400",
            paddingLeft: 60,
          }}
        >
          2 times present (40%) last tie at 9/19/24
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          borderRadius: 1,
          borderColor: "#D9D9D9",
          borderBottomWidth: 2,
          paddingBottom: 10,
        }}
        onPress={() => navigation.navigate("DateDetails")}
      >
        <View
          style={{
            flexDirection: "row",
            paddingTop: 10,
          }}
        >
          <Image
            source={require("../src/assets/calendar-day.png")}
            style={{
              width: 30,
              height: 30,
              marginLeft: 30,
            }}
          />
          <Text
            style={{
              fontSize: 20,
              fontWeight: "600",
              paddingLeft: 2,
            }}
          >
            Tuesday, March 9, 2024
          </Text>
        </View>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "400",
            paddingLeft: 60,
          }}
        >
          2 times present (40%) last tie at 9/19/24
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default DatesListScreen;
