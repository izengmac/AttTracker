import {getApp, getApps, initializeApp} from "firebase/app";
import {initializeAuth , getReactNativerPersistence} from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-community/async-storage';


let firebaseApp;
 export const getFirebaseApp = () => {
    if (firebaseApp){
        return firebaseApp;

    }

    //Firebase configuration 
    const firebaseConfig = {
        apiKey: "<KEY>",
        authDomain: "attendencetracker-7bce5.firebaseapp.com",
        databaseURL: "https://attendencetracker-7bce5.firebaseio.com",
        projectId: "attendencetracker-7bce5",
        storageBucket: "attendencetracker-7bce5.appspot.com",
        messagingSenderId: "151528077032",
        appId: "1:151528077032:web:c09b31ada6b6813b90bb5d",
        measurementId: "G-V05GM2XDJG"
    };

    const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

    //Initialize Firebase Auth with React Native Persistence
    initializeAuth(app, {
        persistence: getReactNativerPersistence(ReactNativeAsyncStorage)
    })

    firebaseApp = app;

    return app;
 }
