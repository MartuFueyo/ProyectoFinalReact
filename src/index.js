import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
/*import {
    getAnalytics
} from "firebase/analytics";*/
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDNi44BakLCOTxsOyeqsxElwDZsMlKeCD8",
    authDomain: "proyecto-coderhouse-96e23.firebaseapp.com",
    projectId: "proyecto-coderhouse-96e23",
    storageBucket: "proyecto-coderhouse-96e23.appspot.com",
    messagingSenderId: "181133196968",
    appId: "1:181133196968:web:cd20c427a0d955eb248c9d",
    measurementId: "G-BEBV95Q128"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
