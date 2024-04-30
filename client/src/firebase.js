// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mer-auth-fbf5c.firebaseapp.com",
  projectId: "mer-auth-fbf5c",
  storageBucket: "mer-auth-fbf5c.appspot.com",
  messagingSenderId: "859231202332",
  appId: "1:859231202332:web:2f6631e9c8a0e4f394c3d9",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
