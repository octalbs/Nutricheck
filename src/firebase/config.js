// src/firebase/config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDwEyU-1SlUiI35gdSlzQlYW_eUU2wNdBc",
  authDomain: "nutrijel-autentikasi.firebaseapp.com",
  projectId: "nutrijel-autentikasi",
  storageBucket: "nutrijel-autentikasi.firebasestorage.app",
  messagingSenderId: "461158883082",
  appId: "1:461158883082:web:b6af10d54ab7e7a33024f3",
  measurementId: "G-3HGZ1CTFHJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default app;
