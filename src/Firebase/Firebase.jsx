// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBrb239pJFB9kLzMQ3JnkSuRXft84gYicE",
  authDomain: "urbanelegance-4d53a.firebaseapp.com",
  projectId: "urbanelegance-4d53a",
  storageBucket: "urbanelegance-4d53a.appspot.com",
  messagingSenderId: "231824465268",
  appId: "1:231824465268:web:26fd0da62ed0e5ca8aa021",
  measurementId: "G-DBHMFFQGKX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth();
export {app, auth}