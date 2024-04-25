import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { getDatabase, ref, onValue } from "firebase/database";

function CreateDateScreen() {
 
  const handleCreateDate = () => {
    const db = getDatabase();
    const currentDate = new Date().toISOString().split("T")[0];
    console.log(currentDate);

    // Loop through each user and add the new date to their attendance tree
    const attendanceRef = ref(db, "attendance");

    // Listen for changes once
    onValue(attendanceRef, (snapshot) => {
      const attendanceData = snapshot.val();
      if (!attendanceData) {
        Object.keys(attendanceData).forEach((userId) => {
          ref(db, `attendance/${userId}/${currentDate}`)
            .set("present")
            .then(() => {
              console.log(`Date ${currentDate} added for user ${userId}`);
            })
            .catch((error) => {
              console.error("Error adding date to attendance:", error);
            });
        });
      }
    });
}
   

  return (
    <View>
     <Button title="Add Student" onPress={handleCreateDate} />
    </View>
  );
}

export default CreateDateScreen;
