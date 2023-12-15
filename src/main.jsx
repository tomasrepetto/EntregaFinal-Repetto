import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYSe0Cw_uACIZ-D9jobHMW2-cWmxbRV_A",
  authDomain: "boxes-sneackers.firebaseapp.com",
  projectId: "boxes-sneackers",
  storageBucket: "boxes-sneackers.appspot.com",
  messagingSenderId: "667586200543",
  appId: "1:667586200543:web:22ac57c2bf78901ebd3a6a"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
