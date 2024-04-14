import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Alert, TextInput } from 'react-native';
import { ref, update, getDatabase, child, get } from 'firebase/database';
import { db } from "../utils/firebaseHelper"; // Import the Firebase database instance from firebaseInit.js

function InformationScreen() {
  const [fileURI, setFileURI] = useState(null);
  const [url, setUrl] = useState('');
  const [linkFromDB, setLinkFromDB] = useState('');

  // Function to fetch link from the database
  const fetchLinkFromDB = async () => {
    try {
      const dbRef = ref(getDatabase());
      const snapshot = await get(child(dbRef, 'information/link'));
      if (snapshot.exists()) {
        setLinkFromDB(snapshot.val());
      } else {
        console.log("No data available");
      }
    } catch (error) {
      console.error('Error fetching link from the database:', error);
    }
  };

  // Fetch the link from the database when the component mounts
  useEffect(() => {
    fetchLinkFromDB();
  }, []);

  const uploadUrl = () => {
    if (url.trim() === '') {
      Alert.alert('Error', 'Please enter a valid URL.');
      return;
    }

    // Update the link in the database
    const linkRef = ref(db, 'information/link');
    const updates = { link: url }; // Assuming 'information/link' is the path to the link in your database

    update(linkRef, updates)
      .then(() => {
        console.log('Link successfully updated in the database!');
        setFileURI(url); // Set the uploaded URL to display in the UI
        setUrl(''); // Clear the input field
        fetchLinkFromDB(); // Fetch the updated link from the database
      })
      .catch((error) => {
        console.error('Error updating link in the database:', error);
        Alert.alert('Error', 'Failed to update link in the database. Please try again.');
      });
  };

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      {fileURI && <Text style={{ marginBottom: 20 }}>Uploaded URL: {fileURI}</Text>}
      {linkFromDB && (
  <Text style={{ marginBottom: 20 }}>
    Link from Database: {linkFromDB.link} {/* Assuming 'link' is the key holding the URL */}
  </Text>
)}
      <TextInput
        style={{ height: 40, marginTop: 100, borderColor: 'gray', borderWidth: 1, marginBottom: 20, width: 300 }}
        onChangeText={(text) => setUrl(text)}
        value={url}
        placeholder="Enter URL here"
      />
      <TouchableOpacity
        style={{
          width: 364,
          height: 112,
          backgroundColor: '#7899EA',
          borderRadius: 18,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20,
        }}
        onPress={uploadUrl}>
        <Image source={require('../src/assets/upload.png')} style={{ width: 44, height: 44 }} />
        <Text style={{ fontSize: 20, fontWeight: '600', color: 'white', paddingTop: 4 }}>Upload URL</Text>
      </TouchableOpacity>
    </View>
  );
}

export default InformationScreen;
