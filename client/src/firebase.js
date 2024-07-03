// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "estate-c0fe2.firebaseapp.com",
  projectId: "estate-c0fe2",
  storageBucket: "estate-c0fe2.appspot.com",
  messagingSenderId: "59436641947",
  appId: "1:59436641947:web:144ad98447395ac824603e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
