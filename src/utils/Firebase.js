// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBQWDxliKfAXwE_SN_18kOvLJhCmIuqLhA",
  authDomain: "react-netflix-clone-3ac35.firebaseapp.com",
  projectId: "react-netflix-clone-3ac35",
  storageBucket: "react-netflix-clone-3ac35.appspot.com",
  messagingSenderId: "247785465424",
  appId: "1:247785465424:web:d7931dafc3115412d39355",
  measurementId: "G-H125R2S7WD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(app);
