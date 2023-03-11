import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD9BANJlvo3KidrDNmAdfib7Ahu8cjBlUY",
    authDomain: "auth-b7402.firebaseapp.com",
    projectId: "auth-b7402",
    storageBucket: "auth-b7402.appspot.com",
    messagingSenderId: "888896757363",
    appId: "1:888896757363:web:5b39e995bb430c61f79406"
  };

const app = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const db = app.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();

export { auth, googleProvider };

export default db;