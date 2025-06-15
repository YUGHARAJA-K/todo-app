// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSrY3GacFR6eX2IYdsrwp2baGH-3b5jV0",
  authDomain: "react-firebase-auth-a4c58.firebaseapp.com",
  projectId: "react-firebase-auth-a4c58",
  storageBucket: "react-firebase-auth-a4c58.firebasestorage.app",
  messagingSenderId: "303885575790",
  appId: "1:303885575790:web:5f50cbdebc80b3c4c4687f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)