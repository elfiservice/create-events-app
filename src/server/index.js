import * as firebase from "firebase";
import { config } from "./Config"

  firebase.initializeApp(config);
  var database = firebase.database();
  console.log('server');
  

  export const insert = (uid, name, email) => {
    database.ref('users/' + uid).set({
      username: name,
      email: email
    });
  }

  export const createAccount = (dataUser) => {
    const msgElement = document.getElementById('msgError');
    cleanErroMsg(msgElement);
    firebase.auth()
      .createUserWithEmailAndPassword(dataUser.email, dataUser.pass)
      .then(result => {
       result.displayName = dataUser.name;
        outPutSuccessMsg(msgElement, result.displayName);
        setTimeout(() => {
          window.location = '/login'
        }, 1000)

      })
      .catch(function(error) {
      // Handle Errors here.
      // var errorCode = error.code;
      var errorMessage = error.message;
      outPutErroMsg(msgElement, errorMessage);
      // ...
    });
  }

  export const authUser = (dataUser) => {
    const msgElement = document.getElementById('msgError');
    cleanErroMsg(msgElement);
    //Criar uma PROMISE
    return firebase.auth()
      .signInWithEmailAndPassword(dataUser.email, dataUser.pass)
      .then(result => result)
      // .then(result => {
      //   result.displayName = dataUser.name;
      //   outPutSuccessMsg(msgElement, result.displayName);
      //   setTimeout(() => {
      //     window.location = '/events'
      //   }, 1000)
      // })
      .catch(function(error) {
        // Handle Errors here.
        // var errorCode = error.code;
        var errorMessage = error.message;
        outPutErroMsg(msgElement, errorMessage);
        // ...
      });
  }

  export const checkUserAuth = () => {
    return firebase.auth();
  }

  export const signOut = () => {
    return firebase.auth().signOut();
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

 