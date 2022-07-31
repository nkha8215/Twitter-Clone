import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAz9I_K4b_BBAKFeACwLm6I7_ZQ7iU_n9g",
  authDomain: "twitter-clone-72cfa.firebaseapp.com",
  projectId: "twitter-clone-72cfa",
  storageBucket: "twitter-clone-72cfa.appspot.com",
  messagingSenderId: "662502811908",
  appId: "1:662502811908:web:acc3cc7669d2e5a3f0c851"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;