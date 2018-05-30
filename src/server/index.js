import * as firebase from "firebase";
import { config } from "./Config"

  firebase.initializeApp(config);
  var database = firebase.database();

  export const insert = (uid, name, email) => {
    database.ref('users/' + uid).set({
      username: name,
      email: email
    });
  }

  export const createAccount = (dataUser) => {
    firebase.auth()
      .createUserWithEmailAndPassword(dataUser.email, dataUser.pass)
      .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage + ' : ' + errorCode);
      
      // ...
    });
  }

  export const checkUserLogIn = () => {
    var user = firebase.auth().currentUser;

    if (user) {
      // User is signed in.
      return true
    } else {
      // No user is signed in.
      return false
    }
  }


