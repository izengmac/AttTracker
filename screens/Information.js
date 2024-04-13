import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Alert,TextInput } from 'react-native';
import { firebase } from '@react-native-firebase/database'; // Import Firebase database module

function Information() {
  const [fileURI, setFileURI] = useState(null);
  const [url, setUrl] = useState(''); // State to hold the URL entered by the user

  const uploadUrl = () => {
    if (url.trim() === '') {
      Alert.alert('Error', 'Please enter a valid URL.');
      return;
    }

    // Save the URL to the database
    const databaseRef = firebase.database().ref('urls');
    databaseRef.push(url); // Assuming 'urls' is the name of the database node
    setFileURI(url); // Set the URL to display in the UI
    setUrl(''); // Clear the input field after uploading
  };

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      {fileURI && (
        <Text style={{ marginBottom: 20,  }}>Uploaded URL: {fileURI}</Text>
      )}
      <TextInput
        style={{ height: 40,marginTop: 100, borderColor: 'gray', borderWidth: 1, marginBottom: 20, width: 300 }}
        onChangeText={text => setUrl(text)}
        value={url}
        placeholder="Enter URL here" // Add a placeholder for the URL input
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
        <Image
          source={require('../src/assets/upload.png')}
          style={{ width: 44, height: 44 }}
        />
        <Text
          style={{
            fontSize: 20,
            fontWeight: '600',
            color: 'white',
            paddingTop: 4,
          }}>
          Upload URL
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default Information;
