// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNn7838JHskIspYny8tz63Q79GMdDXv1Q",
  authDomain: "adven-tour-authentication.firebaseapp.com",
  projectId: "adven-tour-authentication",
  storageBucket: "adven-tour-authentication.appspot.com",
  messagingSenderId: "822026330568",
  appId: "1:822026330568:web:c1622f987823dbfba920fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
export default auth;