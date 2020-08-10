import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCBPxhFxJfda6eoY2R2kLvzJcuxDSc2vMc",
  authDomain: "twitter-clone-github.firebaseapp.com",
  databaseURL: "https://twitter-clone-github.firebaseio.com",
  projectId: "twitter-clone-github",
  storageBucket: "twitter-clone-github.appspot.com",
  messagingSenderId: "104402064610",
  appId: "1:104402064610:web:69b3aca6499de2b3dffabb",
  measurementId: "G-CRJ9378K5M"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
