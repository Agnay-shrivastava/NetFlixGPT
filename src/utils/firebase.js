// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCStAvEPfo0-ugI5MX2uost_2wcCja8xWE",
  authDomain: "netflixgptbyagnay.firebaseapp.com",
  projectId: "netflixgptbyagnay",
  storageBucket: "netflixgptbyagnay.firebasestorage.app",
  messagingSenderId: "456494163674",
  appId: "1:456494163674:web:538790d89477c1a6fba7e3",
  measurementId: "G-8PY5TE1RM8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);