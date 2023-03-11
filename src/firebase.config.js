// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1EAVcI3ou7af0NV-qb9gFIKqTeYLWf8w",
  authDomain: "employee-task-app-87075.firebaseapp.com",
  projectId: "employee-task-app-87075",
  storageBucket: "employee-task-app-87075.appspot.com",
  messagingSenderId: "322369651320",
  appId: "1:322369651320:web:6213bf1a682fda970b638d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()