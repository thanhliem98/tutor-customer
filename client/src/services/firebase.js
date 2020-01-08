import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAyEuasn9IWsgmvvXIw5hSUexht7-R277U",
  authDomain: "uber-tutor.firebaseapp.com",
  databaseURL: "https://uber-tutor.firebaseio.com",
  projectId: "uber-tutor",
  storageBucket: "uber-tutor.appspot.com",
  messagingSenderId: "418667584764",
  appId: "1:418667584764:web:07c652f187c8b521bd8b79"
};

export const firebaseService = firebase.initializeApp(firebaseConfig);