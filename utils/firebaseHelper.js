import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-community/async-storage";

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
    if (!getAuth(app)) {
        initializeAuth(app, {
            persistence: getReactNativePersistence(AsyncStorage)
        });
    }

    firebaseApp = app;

    return app;
};
