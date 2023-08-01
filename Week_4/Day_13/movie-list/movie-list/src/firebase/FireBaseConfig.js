// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiLhtfBDQpQBm93krCs6ovE4vvI-LO-EA",
  authDomain: "class-day13.firebaseapp.com",
  projectId: "class-day13",
  storageBucket: "class-day13.appspot.com",
  messagingSenderId: "482175808492",
  appId: "1:482175808492:web:35389e8e45ebfee6da06c9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
//. const auth = getAuth(app) // Not needed

export { db, storage };
