import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBFu0Zs7YiEF1nRLJLF0Ptb2VqeUWE5los",
    authDomain: "music-project-27189.firebaseapp.com",
    projectId: "music-project-27189",
    storageBucket: "music-project-27189.appspot.com",
    appId: "1:401343737441:web:27f44859bd27d090ad4420"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebase.firestore();
  const storage = firebase.storage();

  const usersCollection = db.collection('users');
  const songsCollection = db.collection('songs');

  export {
    auth,
    usersCollection,
    songsCollection,
    storage
  }