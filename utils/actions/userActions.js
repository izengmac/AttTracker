import { child, getDatabase, get, ref } from "firebase/database";
import { getFirebaseApp } from "../firebaseHelper";

//Retrieve user infromation based on user id
export const getuserData = async (userId) => {
  try {
    const app = getFirebaseApp();
    const dbRef = ref(getDatabase(app));

    const userRef = child(dbRef, `users/${userId}`);

    const snapshot = await get(userRef)

    return snapshot.val();
  } catch (error) {
    console.log(error);
  }
};
