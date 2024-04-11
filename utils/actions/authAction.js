import { getFirebaseApp } from "../firebaseHelper";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { child, getDatabase, set, ref } from "firebase/database";
import AsyncStorage from "@react-native-community/async-storage";

export const signUp = (fullName, email, password) => {
  return async (dispatch) => {
    const app = getFirebaseApp();
    const auth = getAuth(app);

    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        password,
        email,
        );

        const {uid, ststTokenManager} = result.user;
        const {accessToken, experationToken} = ststTokenManager;
        const expiryDate = new Date(expirationTime);
        
        const useData = await createUser(fullName, uid, email);

        dispatch()

    } catch (error) {

    }
  };
}

const createUser = async (fullName, uid, email) => {
    const userData = {
        fullName, 
        email,
        userId,
        signUpDate: new Date().toISOString(),

    }
    const dbRef = ref(getDatabase());
    const childRef = child(dbRef, `users/${userId}`);
    await set(childRef, userData);
    return userData;
}
    
