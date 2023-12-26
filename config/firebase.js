// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwm6G4NMKFo3hqE_HAmmFizXA8eUG851c",
  authDomain: "atmosapp-1a8db.firebaseapp.com",
  projectId: "atmosapp-1a8db",
  storageBucket: "atmosapp-1a8db.appspot.com",
  messagingSenderId: "872520381727",
  appId: "1:872520381727:web:40575f49f3d3fbb266ec2a",
  measurementId: "G-BQQ7C7QKY1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)