import Firebase from 'firebase';

let firebaseConfig = {
  apiKey: "AIzaSyCywh7Df6UdjBAj1qle3iWYC8DrXbji2y4",
  authDomain: "exercise-6-firebase-stor-270db.firebaseapp.com",
  databaseURL: "https://exercise-6-firebase-stor-270db.firebaseio.com",
  projectId: "exercise-6-firebase-stor-270db",
  storageBucket: "exercise-6-firebase-stor-270db.appspot.com",
  messagingSenderId: "358090934863",
  appId: "1:358090934863:web:ee93286771d7c5d717f83a"
  };
  // Initialize Firebase
 let app = Firebase.initializeApp(firebaseConfig);

  export const db = app.database();
