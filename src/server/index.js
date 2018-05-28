import * as firebase from "firebase";

// Initialize Firebase
// TODO: Replace with your project's customized code snippet
var config = {
    apiKey: "AIzaSyB6_SK6mNivTs3bqcTk2VRXGyTbCKRFNbI",
    authDomain: "inputs-events-udacity.firebaseapp.com",
    databaseURL: "https://inputs-events-udacity.firebaseio.com",
    projectId: "inputs-events-udacity",
    storageBucket: "inputs-events-udacity.appspot.com",
    messagingSenderId: "714437079726"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  export const insert = (uid, name, email) => {

    database.ref('users/' + uid).set({
          username: name,
          email: email
        });
      
  }

  export default database;