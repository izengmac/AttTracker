import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import firebase from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";

function GroupListScreen({ navigation, route }) {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    // Fetch groups from Firebase
    const db = getDatabase();
    const groupsRef = ref(db, "groups");
    onValue(groupsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const groupsArray = Object.keys(data).map((groupId) => ({
          id: groupId,
          name: data[groupId].name,
        }));
        setGroups(groupsArray);
      }
    });
    // Clean up listener
    return () => groupsRef.off("value");
  }, []);

  const handleAddGroup = () => {
    // Navigate to the screen for creating a new group
    navigation.navigate("CreateGroupScreen");
  };

  const renderGroupItem = ({ item }) => (
    <TouchableOpacity
      style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: "#ddd" }}
      onPress={() => navigation.navigate("DatesStudents", { groupId: item.id })}
    >
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 10,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Groups</Text>
        <TouchableOpacity onPress={handleAddGroup}>
          <Image
            source={require("../src/assets/user-add.png")}
            style={{ width: 30, height: 30 }}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        data={groups}
        keyExtractor={(item) => item.id}
        renderItem={renderGroupItem}
      />
    </View>
  );
}

export default GroupListScreen;
