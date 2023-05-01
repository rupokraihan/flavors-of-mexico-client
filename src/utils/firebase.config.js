// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFgk93K-7z2RBvDpDPwEutZ4q0FRy2vQo",
  authDomain: "mexican-chef-recipe-hunter.firebaseapp.com",
  projectId: "mexican-chef-recipe-hunter",
  storageBucket: "mexican-chef-recipe-hunter.appspot.com",
  messagingSenderId: "335146140184",
  appId: "1:335146140184:web:2a8487d0d8c0273193f96d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;