// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTDjSP5UBUJARY3fDqO37olmCzVaatm2I",
  authDomain: "fir-d2fdc.firebaseapp.com",
  projectId: "fir-d2fdc",
  storageBucket: "fir-d2fdc.appspot.com",
  messagingSenderId: "318632510437",
  appId: "1:318632510437:web:1574d9dec894516d1ee50c",
  measurementId: "G-94NPE5BBTJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
