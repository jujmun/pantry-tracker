// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaXhXh4_a8bPAIcXM-wCIgplM5V_cBP-k",
  authDomain: "expenses-tracker-ca7b5.firebaseapp.com",
  projectId: "expenses-tracker-ca7b5",
  storageBucket: "expenses-tracker-ca7b5.appspot.com",
  messagingSenderId: "756687716098",
  appId: "1:756687716098:web:490f8117bb7486b13a4c1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);