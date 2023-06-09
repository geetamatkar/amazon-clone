// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// simport firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArBjNzfIRKwdZEBrWFx74gFr0XmUzEQ5A",
  authDomain: "web-7747c.firebaseapp.com",
  projectId: "web-7747c",
  storageBucket: "web-7747c.appspot.com",
  messagingSenderId: "9067291674",
  appId: "1:9067291674:web:9d7a293cec63922a015da3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };