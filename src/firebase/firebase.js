// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBg0llo6tVw3dZwFXRMyLOyxT_qiUKILY",
  authDomain: "proyecto4-4bc84.firebaseapp.com",
  projectId: "proyecto4-4bc84",
  storageBucket: "proyecto4-4bc84.appspot.com",
  messagingSenderId: "604101416435",
  appId: "1:604101416435:web:b584fa506aa51f200b2e86"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const db=app.firestore();