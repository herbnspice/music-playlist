import  firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDI3NjtM62zZ7NtuoTV3MAjJC1O_0qtWJw",
    authDomain: "music-playlist-fd796.firebaseapp.com",
    projectId: "music-playlist-fd796",
    storageBucket: "music-playlist-fd796.appspot.com",
    messagingSenderId: "998393414699",
    appId: "1:998393414699:web:290a77ff3b08f5f4b3566e"
  };


  firebase.initializeApp( firebaseConfig)
  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp 

  export default { projectFirestore, projectAuth, timestamp }