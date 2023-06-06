import firebase from "firebase/app";
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBFu0Zs7YiEF1nRLJLF0Ptb2VqeUWE5los",
    authDomain: "music-project-27189.firebaseapp.com",
    projectId: "music-project-27189",
    storageBucket: "music-project-27189.appspot.com",
    appId: "1:401343737441:web:27f44859bd27d090ad4420"
  };

  export default firebase.initializeApp(firebaseConfig);