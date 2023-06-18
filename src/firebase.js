import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAeCJPbZz52OWvIPsqcw4pYvuOxbCDFf8M",
  authDomain: "linkedin-clone-usef.firebaseapp.com",
  projectId: "linkedin-clone-usef",
  storageBucket: "linkedin-clone-usef.appspot.com",
  messagingSenderId: "368169835783",
  appId: "1:368169835783:web:b35684b143c52f07e939a2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
