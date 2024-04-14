import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Alert, TextInput, ScrollView, Linking, StyleSheet } from 'react-native';
import { ref, push, getDatabase, child, get } from 'firebase/database';
import { db } from "../utils/firebaseHelper"; // Import the Firebase database instance from firebaseInit.js

function InformationScreen() {
  const [fileURI, setFileURI] = useState(null);
  const [url, setUrl] = useState('');
  const [linksFromDB, setLinksFromDB] = useState([]);

  // Function to fetch all links from the database
  const fetchLinksFromDB = async () => {
    try {
      const dbRef = ref(getDatabase());
      const snapshot = await get(child(dbRef, 'information/link'));
      if (snapshot.exists()) {
        const linksArray = [];
        snapshot.forEach((childSnapshot) => {
          linksArray.push(childSnapshot.val()); // Push each link to the array
        });
        setLinksFromDB(linksArray);
      } else {
        console.log("No data available");
      }
    } catch (error) {
      console.error('Error fetching links from the database:', error);
    }
  };

  // Fetch all links from the database when the component mounts
  useEffect(() => {
    fetchLinksFromDB();
  }, []);

  const uploadUrl = () => {
    if (url.trim() === '') {
      Alert.alert('Error', 'Please enter a valid URL.');
      return;
    }

    // Push the new link to the database
    const linkRef = ref(db, 'information/link');
    push(linkRef, url) // Push the new URL instead of updating
      .then(() => {
        console.log('Link successfully added to the database!');
        setFileURI(url); // Set the uploaded URL to display in the UI
        setUrl(''); // Clear the input field
        fetchLinksFromDB(); // Fetch all links from the database to update the UI
      })
      .catch((error) => {
        console.error('Error adding link to the database:', error);
        Alert.alert('Error', 'Failed to add link to the database. Please try again.');
      });
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center', paddingVertical: 40 }}>
      
      {/* Display fetched links */}
      {linksFromDB.map((link, index) => (
        <TouchableOpacity key={index} onPress={() => Linking.openURL(link)} style={styles.linkContainer}>
          <Text style={styles.linkText}>Link {index + 1}</Text>
          <Text style={styles.urlText}>{link}</Text>
        </TouchableOpacity>
      ))}

      <TextInput
        style={{ height: 40, marginTop: 20, borderColor: 'gray', borderWidth: 1, marginBottom: 20, width: 300 }}
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  linkContainer: {
    width: '80%',
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    alignItems: 'center',
  },
  linkText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  urlText: {
    fontSize: 16,
    color: 'blue',
  },
});

export default InformationScreen;
