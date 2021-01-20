import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyBfj3qoBgjydfxvw9TDC9FV8tA_Oxn11tc",
  authDomain: "recipeo-73aa9.firebaseapp.com",
  projectId: "recipeo-73aa9",
  storageBucket: "recipeo-73aa9.appspot.com",
  messagingSenderId: "1007072888291",
  appId: "1:1007072888291:web:b2b79255a41e70d94b4cd6",
  measurementId: "G-QXYRDQEZ6Q",
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
