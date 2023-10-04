import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAwqOYLmeZqtqCiJdnd8h_ramlclDPQi7o",
  authDomain: "quiz-buzzer-app-d49fc.firebaseapp.com",
  databaseURL: "https://quiz-buzzer-app-d49fc-default-rtdb.firebaseio.com",
  projectId: "quiz-buzzer-app-d49fc",
  storageBucket: "quiz-buzzer-app-d49fc.appspot.com",
  messagingSenderId: "471709094599",
  appId: "1:471709094599:web:2518c15a1696b27955a4e2",
  measurementId: "G-PLC6WK1CBT"
};

// Initialize Firebase
let app = firebase.initializeApp(firebaseConfig);
export default app.database();
