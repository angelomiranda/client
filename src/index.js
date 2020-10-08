import React from 'react';
import ReactDOM from 'react-dom';

import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import App from './App';

const firebaseConfig = {
  apiKey: "AIzaSyDWW7DuMte7biUaymgdQCAI_QUUes3afj0",
  authDomain: "food-app-c3d20.firebaseapp.com",
  databaseURL: "https://food-app-c3d20.firebaseio.com",
  projectId: "food-app-c3d20",
  storageBucket: "food-app-c3d20.appspot.com",
  messagingSenderId: "466268397797",
  appId: "1:466268397797:web:42117160092c6da379340c",
  measurementId: "G-MEASUREMENT_ID",
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
