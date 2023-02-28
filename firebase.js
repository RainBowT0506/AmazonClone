import firebase from "./firebase";


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
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firebase();

export default db;
