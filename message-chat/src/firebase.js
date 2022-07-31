
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDYH4yQGhUB1Y5r21ww6wXJC7fCr8bifUQ",
    authDomain: "chat-project-5a5e0.firebaseapp.com",
    projectId: "chat-project-5a5e0",
    storageBucket: "chat-project-5a5e0.appspot.com",
    messagingSenderId: "918055771938",
    appId: "1:918055771938:web:765fe1e654d3ee66658f7b",
    measurementId: "G-048Z6FCJ6Y"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebaseApp.firestore();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;
























// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

  // const firebaseApp = firebase.initializeApp(firebaseConfig);
  // const db = firebaseApp.firestore();
  // const auth = firebase.auth();
  // const provider = new firebase.auth.GoogleAuthProvider();

  // export {auth,provider};

  // export default db;

