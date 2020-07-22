importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyBl1bArtmeyxoRN5K_C6bAGbGgjsqtH5mQ",
  authDomain: "tw314-51b86.firebaseapp.com",
  databaseURL: "https://tw314-51b86.firebaseio.com",
  projectId: "tw314-51b86",
  storageBucket: "tw314-51b86.appspot.com",
  messagingSenderId: "996203462262",
  appId: "1:996203462262:web:31f95b0f71c4401015a957",
  measurementId: "G-VVPPPXW1T4"
});

const messaging = firebase.messaging();