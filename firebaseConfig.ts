// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJroKUMFJJbGuxumKUvTVBo_8Gb86q2mg",
  authDomain: "yurei-calendar.firebaseapp.com",
  projectId: "yurei-calendar",
  storageBucket: "yurei-calendar.firebasestorage.app",
  messagingSenderId: "782788883954",
  appId: "1:782788883954:web:48ac6919c777e32716a76b",
  measurementId: "G-VQX4V3QY4C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { analytics, auth, db };

