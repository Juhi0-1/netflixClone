// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// process.env.REACT_APP_FIREBASE_API_KEY
const firebaseConfig = {
  apiKey: "AIzaSyDQidsIpAYWmdHt0P6fI4aaf2AxZ4bJoLA",
  authDomain: "netflix-clone-ced48.firebaseapp.com",
  projectId: "netflix-clone-ced48",
  storageBucket: "netflix-clone-ced48.appspot.com",
  messagingSenderId: "120755404479",
  appId: "1:120755404479:web:aae37dfead0bc5de73900a"
};

// apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER,
//   appId: process.env.REACT_APP_APP_ID
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
