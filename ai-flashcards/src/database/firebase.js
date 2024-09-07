import { initializeApp, getApps, getApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDJGnaMLAvj_kJq-U0MwvLCUvQQr_GxybU",
  authDomain: "flashcards-6d489.firebaseapp.com",
  databaseURL: "https://flashcards-6d489-default-rtdb.firebaseio.com",
  projectId: "flashcards-6d489",
  storageBucket: "flashcards-6d489.appspot.com",
  messagingSenderId: "525905667583",
  appId: "1:525905667583:web:9a4cca9b069707caeb33ca",
  measurementId: "G-2R7CKSFDH5",
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Get instances of the services
const database = getDatabase(app);
const auth = getAuth(app);

export { database, auth };
