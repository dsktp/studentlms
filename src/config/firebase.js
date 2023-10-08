// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXdfttVAHwDZi5Dt95-0sDeCxYHERsB_k",
  authDomain: "react-practice-26c82.firebaseapp.com",
  projectId: "react-practice-26c82",
  storageBucket: "react-practice-26c82.appspot.com",
  messagingSenderId: "730985295721",
  appId: "1:730985295721:web:928b0df2f90c92d44297f8",
  measurementId: "G-0SYD2PQ35C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);

export {auth,analytics,firestore};
