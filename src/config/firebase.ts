import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Optionally import the services that you want to use

// import {...} from 'firebase/database';

// import {...} from 'firebase/functions';
// import {...} from 'firebase/storage';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCxPfSXjHRTV_bW_CU-QDys0joI8-OqSk4",
  authDomain: "smart-e-commerce-app-bdda8.firebaseapp.com",
  projectId: "smart-e-commerce-app-bdda8",
  storageBucket: "smart-e-commerce-app-bdda8.firebasestorage.app",
  messagingSenderId: "283655543637",
  appId: "1:283655543637:web:2c5fae2a27eb4f6216addc",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
