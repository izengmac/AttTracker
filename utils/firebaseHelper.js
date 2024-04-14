import { getApp, getApps, initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getDatabase } from "firebase/database";

let firebaseApp;

export const getFirebaseApp = () => {
    if (firebaseApp) {
        return firebaseApp;
    }

    // Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyAsORLt2PxHyF5wfEWWYCIRrehHpTI5dZA",
        authDomain: "attendencetracker-61b03.firebaseapp.com",
        projectId: "attendencetracker-61b03",
        storageBucket: "attendencetracker-61b03.appspot.com",
        messagingSenderId: "189553790087",
        appId: "1:189553790087:web:713528e1fe137dc5ce7c22",
        measurementId: "G-Q3DWK9Q725"
      };

    const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

    // Initialize Firebase Auth only if it hasn't been initialized yet
    
       const auth =  initializeAuth(app, {
            persistence: getReactNativePersistence(ReactNativeAsyncStorage)
        });
  

    firebaseApp = app;
   


    return app;
};
export const db = getDatabase(getFirebaseApp());