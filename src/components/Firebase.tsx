import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

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

// Initialize Services
export const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const db = getFirestore();
export const storage = getStorage(app);

// Collection Ref
export const symRef = collection(db, 'symptoms')
export const causesRef = collection(db, 'causes')


// Get Collection Data
