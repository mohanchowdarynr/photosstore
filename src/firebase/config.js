import  firebase from 'firebase/app';
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyDbtsr03lMD8s1y1vXLMusDqtwfDqDLjKo",
    authDomain: "photosstore-f288a.firebaseapp.com",
    projectId: "photosstore-f288a",
    storageBucket: "photosstore-f288a.appspot.com",
    messagingSenderId: "302047503661",
    appId: "1:302047503661:web:427081b7ac712adcc89fa4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectAuth = firebase.auth();
  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;
  
  export { projectAuth,projectStorage, projectFirestore, timestamp };
  
  