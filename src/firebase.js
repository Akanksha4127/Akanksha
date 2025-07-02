// firebase.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsjWtXB2sOr0yUdLAnHhuLpQmMrnP7ubE",
  authDomain: "akankshaportfolio-d3cf9.firebaseapp.com",
  projectId: "akankshaportfolio-d3cf9",
  storageBucket: "akankshaportfolio-d3cf9.appspot.com", // ✅ fixed this line
  messagingSenderId: "633325964423",
  appId: "1:633325964423:web:1a2127b5c6bcbf9fa47c22",
  measurementId: "G-CSSQWW0JEM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
