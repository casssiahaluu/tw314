import firebase from 'firebase';

export const initializeFirebase = () => {
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

  firebase.analytics();

  navigator.serviceWorker
  .register('./serviceWorker.js')
  .then((registration) => {
    firebase.messaging().useServiceWorker(registration);
  });
}

export const askPermissionNotifications = async () => {
  try {
    const messaging = firebase.messaging();
    await messaging.requestPermission();
    const token = await messaging.getToken();
    console.log('token do usuário:', token);

    return token;
  } catch (error) {
    console.error(error);
  }
}
  