// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCen-4y5qOGj8heML2dClQOUDDIX-WeM_8",
  authDomain: "bca-ycm.firebaseapp.com",
  projectId: "bca-ycm",
  storageBucket: "bca-ycm.appspot.com",
  messagingSenderId: "522114236128",
  appId: "1:522114236128:web:851cf66e056ea0001c5a85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const storage = getStorage();
const db = getFirestore();
export { app, db, storage };