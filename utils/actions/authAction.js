import { getFirebaseApp } from "../firebaseHelper";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { child, getDatabase, set, ref } from "firebase/database";
import AsyncStorage from "@react-native-community/async-storage";
import { authenticate } from "../../store/authSlice";
import { getuserData } from "./userActions";


//Implement Signup
export const signUp = (fullName, email, password) => {
  return async (dispatch) => {
    const app = getFirebaseApp();
    const auth = getAuth(app);

    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const { uid, stsTokenManager } = result.user;
      const { accessToken, expirationTime } = stsTokenManager;
      const expiryDate = new Date(expirationTime);

      const userData = await createUser(fullName, email ,uid);

      dispatch(authenticate({ token: accessToken, userData }));

      //Save user data and token to storage
      saveToDataStorage(accessToken, uid, expiryDate);
    } catch (error) {
      console.log(error);

      const erroCode = error.code;

      let message = "Something went wrong ";

      if (
        erroCode === "auth/wrong-password" ||
        erroCode === "auth/user-not-found"
      ) {
        message = "Wrong email  or password";
      }
      if(erroCode === "auth/email-already-in-use"){
        message = "Email already in use";
      }

      throw new Error(message);
    }
  };
};



//Implement Login
export const signIn = (email, password) => {
  return async (dispatch) => {
    const app = getFirebaseApp();
    const auth = getAuth(app);

    try {
      const result = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      

            const { uid, stsTokenManager } = result.user;
            const { accessToken, expirationTime } = stsTokenManager;
            const expiryDate = new Date(expirationTime);
      
            const userData = await getuserData(uid);
            console.log(uid);
            dispatch(authenticate({token: accessToken, userData}));

            
            saveToDataStorage(accessToken, uid, expiryDate);
    } catch (error) {
      console.log(error);
      
            const erroCode = error.code;
      
            let message = "Something went wrong ";
      
            if (
              erroCode === "auth/wrong-password" ||
              erroCode === "auth/user-not-found"
            ) {
              message = "Wrong email  or password";
            }
            if(erroCode === "auth/invalid-email"){
              message = "Email is not valid";
            }
      
            throw new Error(message);
    }
  };
};

const createUser = async (fullName,email,userId) => {
  const userData = {
    fullName,
    email,
    userId,
    signUpDate: new Date().toISOString(),
  };
  console.log('userid',userId)
  const dbRef = ref(getDatabase());
  const childRef = child(dbRef, `users/${userId}`);
  await set(childRef, userData);
  return userData;
};

const saveToDataStorage = (token, userId, expiryDate) => {
  AsyncStorage.setItem(
    "userData",
    JSON.stringify({
      token,
      userId,
      expiryDate: expiryDate.toISOString(),
    })
  );
};
