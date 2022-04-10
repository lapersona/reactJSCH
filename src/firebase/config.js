// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyAx-YrGsiCzhXkz1b22mMRBPMtV5ctNtqM",

  authDomain: "react-coder-js.firebaseapp.com",

  projectId: "react-coder-js",

  storageBucket: "react-coder-js.appspot.com",

  messagingSenderId: "1063753992714",

  appId: "1:1063753992714:web:c0257eae59dd1421dc2df3"

};
// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);