// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAXy-5To-Tf8IsPJW8TnBluN8O8axyRA5g",
  authDomain: "clone-654cd.firebaseapp.com",
  databaseURL: "https://clone-654cd.firebaseio.com",
  projectId: "clone-654cd",
  storageBucket: "clone-654cd.appspot.com",
  messagingSenderId: "921977788881",
  appId: "1:921977788881:web:1be804ff96fc47b75ee8f0",
  measurementId: "G-8C1YHK538K",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
