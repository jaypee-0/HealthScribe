import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBRJDtBs9BseWsi8hq77tOYXMmU1HlaKDk",
  authDomain: "healthscribe-5df6b.firebaseapp.com",
  projectId: "healthscribe-5df6b",
  storageBucket: "healthscribe-5df6b.appspot.com",
  messagingSenderId: "1034080061529",
  appId: "1:1034080061529:web:88bb4ec9544872f062c948",
  measurementId: "G-9VZPJRYCR5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app);

export const auth = getAuth(app)
export default app

