import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBz7DdMwioq1J3UMf5WMBnIyone_WCF2to",
  authDomain: "journal-app-15687.firebaseapp.com",
  projectId: "journal-app-15687",
  storageBucket: "journal-app-15687.appspot.com",
  messagingSenderId: "194517741189",
  appId: "1:194517741189:web:dd3376c53ef9e13c2003ec",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    firebase
}