import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import { getFirebaseApp } from "../utils/firebaseHelper";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getuserData } from "../utils/actions/userActions";
import { child, getDatabase, get, ref } from "firebase/database";



function ProfileScreen() {
  const [userdetails, setUserDetails] = useState({})
  console.log('userdeatisl', userdetails)
  
  const app = getFirebaseApp();
  const auth = getAuth(app);

  const {uid, stsTokenManager} = auth.currentUser;
  const {accessToken, expirationTime} = stsTokenManager;
  const expiryDate = new Date(expirationTime);
  console.log(uid)

  const getuserData = async (uid) => {
    try {
      const app = getFirebaseApp();
      const dbRef = ref(getDatabase(app));
  
      const userRef = child(dbRef, `users/${uid}`);
  
      const snapshot = await get(userRef)
      console.log('snapshot',snapshot.val())
      setUserDetails(snapshot.val())
  
      return snapshot.val();
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() =>{
    getuserData(uid)
  },[])

  return (
    <View
      style={{
        paddingHorizontal: 20,
      }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../src/assets/userimge.png")}
          style={{
            width: 125,
            height: 125,
            borderRadius: 100,
            marginTop: 120,
          }}
        />
      </View>
      <View
        style={{
          paddingVertical: 8,
          borderColor: "#D9D9D9",
          borderBottomWidth: 1,
        }}
      >
        <Text
          style={{
            paddingTop: 16,
            fontWeight: "400",
          }}
        >
          YOUR NAME
        </Text>
        <Text
          style={{
            paddingTop: 10,
            fontWeight: "600",
          }}
        >
        {userdetails.fullName}
        </Text>
      </View>
      <View
        style={{
          paddingVertical: 8,
          borderColor: "#D9D9D9",
          borderBottomWidth: 1,
        }}
      >
        <Text
          style={{
            paddingTop: 24,
            fontWeight: "400",
          }}
        >
          YOUR EMAIL
        </Text>
        <Text
          style={{
            paddingTop: 10,
            fontWeight: "600",
          }}
        >
          {userdetails.email}
        </Text>
      </View>
      <View
        style={{
          paddingVertical: 8,
          borderColor: "#D9D9D9",
          borderBottomWidth: 1,
        }}
      >
        <Text
          style={{
            paddingTop: 24,
            fontWeight: "400",
          }}
        >
          DEPARTMENT
        </Text>
        <Text
          style={{
            paddingTop: 10,
            fontWeight: "600",
          }}
        >
          101
        </Text>
      </View>
      <View
        style={{
          paddingVertical: 8,
          borderColor: "#D9D9D9",
          borderBottomWidth: 1,
        }}
      >
        <Text
          style={{
            paddingTop: 24,
            fontWeight: "400",
          }}
        >
          UNIVERSITY
        </Text>
        <Text
          style={{
            paddingTop: 10,
            fontWeight: "600",
          }}
        >
          MAI
        </Text>
      </View>
    </View>
  );
}

export default ProfileScreen;
