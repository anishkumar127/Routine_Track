import { initializeApp } from "firebase/app";
import {getFirestore}  from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyCSBuwHZCyBO5WqUM__qM513elfCI13Rvo",
  authDomain: "routinetrack-f96a8.firebaseapp.com",
  projectId: "routinetrack-f96a8",
  storageBucket: "routinetrack-f96a8.appspot.com",
  messagingSenderId: "780736661008",
  appId: "1:780736661008:web:caea9c84b5d705f0306c95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);