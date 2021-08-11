// For Firebase JS SDK v7.20.0 and later, measurementId is optional
 import firebase from 'firebase';



const firebaseConfig = {
    apiKey: "AIzaSyAzWqRZ0-kSf244PhwjeK4-7PasPUDhF3A",
    authDomain: "clone-fbbc0.firebaseapp.com",
    projectId: "clone-fbbc0",
    storageBucket: "clone-fbbc0.appspot.com",
    messagingSenderId: "93556034159",
    appId: "1:93556034159:web:08d805e49ab2696eb01b9a",
    measurementId: "G-2Y5TKVWZ38"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);



  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db , auth};