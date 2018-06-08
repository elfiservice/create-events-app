import * as firebase from "firebase";
import { config } from "./Config"

  firebase.initializeApp(config);
  var database = firebase.database();

  export const insertDB = (uid, data) => {
    var newEventKey = database.ref().child('events/' + uid).push().key;
    return database.ref('events/' + uid + '/' + newEventKey).set(data);
  }

  export const checkNewEvent = (uid) => {
   return database.ref('events/' + uid);

  }

  export const createAccount = (dataUser) => {
    const msgElement = document.getElementById('msgError');
    cleanErroMsg(msgElement);
    firebase.auth()
      .createUserWithEmailAndPassword(dataUser.email, dataUser.pass)
      .then(result => {
        let user = result.user;
        user.updateProfile({
          displayName: dataUser.name
          //photoURL: "https://example.com/jane-q-user/profile.jpg"
        }).then(function() {
          // Update successful.
          outPutSuccessMsg(msgElement, dataUser.name);
        }).catch(function(error) {
          // An error happened.
          console.error('Error trying to Updating New Account : ' + error);
        });
      })
      .catch(function(error) {
      // Handle Errors here.
      // var errorCode = error.code;
      var errorMessage = error.message;
      outPutErroMsg(msgElement, errorMessage);
    });
  }

  export const authUser = (dataUser) => {
    const msgElement = document.getElementById('msgError');
    cleanErroMsg(msgElement);
    firebase.auth()
      .signInWithEmailAndPassword(dataUser.email, dataUser.pass)
      .then(result => {
        outPutSuccessMsg(msgElement, result.user.displayName);
      })
      .catch(function(error) {
        // Handle Errors here.
        // var errorCode = error.code;
        var errorMessage = error.message;
        outPutErroMsg(msgElement, errorMessage);
      });
  }

  export const checkUserAuth = () => {
    return firebase.auth();
  }

  export const signOut = () => {
    firebase.auth().signOut().then(() => {
      console.log('LogOut success!');
    }).catch(function(error) {
        console.log('LogOut ERROR! ' + error);
    });
  }

  function cleanErroMsg(erroMsgElement) {
    erroMsgElement.innerHTML = ``;
    erroMsgElement.classList.remove('msgError');
    erroMsgElement.classList.remove('msgSuccess');
  }

  function outPutErroMsg(erroMsgElement, errorMessage) {
    erroMsgElement.innerHTML = `<span> ${errorMessage} </span>`;
    erroMsgElement.classList.add('msgError');
  }

  function outPutSuccessMsg(MsgElement, displayName) {
    MsgElement.innerHTML = `<span> Success ${displayName}!! Redirecting...</span>`;
    MsgElement.classList.add('msgSuccess');
  }

 