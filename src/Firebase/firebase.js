import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBB9KxyizMTAOH-TW2-ZyDFcDYL_8Sc6GE",
  authDomain: "easy-peasy-5bc20.firebaseapp.com",
  projectId: "easy-peasy-5bc20",
  storageBucket: "easy-peasy-5bc20.appspot.com",
  messagingSenderId: "286028720161",
  appId: "1:286028720161:web:6315a2c6b907db1bb65b60",
  measurementId: "G-31K0Q6H18X"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();

