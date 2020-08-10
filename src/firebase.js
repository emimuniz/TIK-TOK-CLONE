import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBxwKsiVRjKZlA3g2RgCwVpHclSXOfHWOY",
    authDomain: "tik-tok-clone-766e3.firebaseapp.com",
    databaseURL: "https://tik-tok-clone-766e3.firebaseio.com",
    projectId: "tik-tok-clone-766e3",
    storageBucket: "tik-tok-clone-766e3.appspot.com",
    messagingSenderId: "862995640637",
    appId: "1:862995640637:web:916eec569b496044be1554",
    measurementId: "G-ZXKTGBLL2W"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  export default db;