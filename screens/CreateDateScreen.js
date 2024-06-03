import React from "react";
import { View, Text, Button, Alert } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { getDatabase, ref, set, get } from "firebase/database";
import { format } from "date-fns";

const CreateDateScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { groupId } = route.params;
  const db = getDatabase();

  const handleCreateDate = async () => {
    try {
      const currentDate = format(new Date(), "yyyy-MM-dd");
      const groupRef = ref(db, `groups/${groupId}`);
      const groupSnapshot = await get(groupRef);

      if (!groupSnapshot.exists()) {
        Alert.alert("Error", "Group not found.");
        return;
      }

      const groupData = groupSnapshot.val();
      const memberIds = groupData.members ? Object.keys(groupData.members) : [];

      if (memberIds.length === 0) {
        Alert.alert("Error", "No members found in the group.");
        return;
      }

      // Update attendance for each member in the group
      await Promise.all(memberIds.map(async (userId) => {
        const userAttendanceRef = ref(db, `attendance/${userId}/${currentDate}`);
        await set(userAttendanceRef, "present");
      }));

      Alert.alert("Success", `Attendance for ${currentDate} created successfully.`);
      navigation.goBack();
    } catch (error) {
      console.error("Error creating date:", error);
      Alert.alert("Error", "An error occurred while creating the date.");
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Create a new attendance date</Text>
      <Button title="Create Date" onPress={handleCreateDate} />
    </View>
  );
};

export default CreateDateScreen;
