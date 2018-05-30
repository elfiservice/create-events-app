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
    const erroMsgElement = document.getElementById('msgError');
    erroMsgElement.innerHTML = ``;
    erroMsgElement.classList.remove('msgError');
    erroMsgElement.classList.remove('msgSuccess');
    firebase.auth()
      .createUserWithEmailAndPassword(dataUser.email, dataUser.pass).then(result => {
       result.displayName = dataUser.name;
       erroMsgElement.innerHTML = `<span> Success ${result.displayName}!! Redirecting...</span>`;
       erroMsgElement.classList.add('msgSuccess');
        setTimeout(() => {
          window.location = '/login'
        }, 1000)

      })
      .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage + ' : ' + errorCode);
      erroMsgElement.innerHTML = `<span> ${errorMessage} </span>`;
      erroMsgElement.classList.add('msgError');
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


