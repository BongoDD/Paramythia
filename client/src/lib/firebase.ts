// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHGAmL8-y4lTgIPaB-C4bAlmrpATxn-q0",
  authDomain: "paramythia-88562.firebaseapp.com",
  projectId: "paramythia-88562",
  storageBucket: "paramythia-88562.firebasestorage.app",
  messagingSenderId: "665982642655",
  appId: "1:665982642655:web:eb388fc66ea3f361e1bc6a",
  measurementId: "G-R019S7YKPL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics only in browser environment
let analytics;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

export { app, analytics };
