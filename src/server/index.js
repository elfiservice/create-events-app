import * as firebase from "firebase";
import { config } from "./Config"
import * as Message from "../util/messages"

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
    Message.cleanMsgs(msgElement);
    firebase.auth()
      .createUserWithEmailAndPassword(dataUser.email, dataUser.pass)
      .then(result => {
        let user = result.user;
        user.updateProfile({
          displayName: dataUser.name
          //photoURL: "https://example.com/jane-q-user/profile.jpg"
        }).then(function() {
          // Update successful.
          Message.successMsg(msgElement, dataUser.name);
        }).catch(function(error) {
          // An error happened.
          console.error('Error trying to Updating New Account : ' + error);
        });
      })
      .catch(function(error) {
      // Handle Errors here.
      // var errorCode = error.code;
      var errorMessage = error.message;
      Message.errorMsg(msgElement, errorMessage);
    });
  }

  export const authUser = (dataUser) => {
    const msgElement = document.getElementById('msgError');
    Message.cleanMsgs(msgElement);
    firebase.auth()
      .signInWithEmailAndPassword(dataUser.email, dataUser.pass)
      .then(result => {
        Message.successMsg(msgElement, result.user.displayName);
      })
      .catch(function(error) {
        // Handle Errors here.
        // var errorCode = error.code;
        var errorMessage = error.message;
        Message.errorMsg(msgElement, errorMessage);
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

  export const getEvent = (userId, eventId) => {
    return database.ref('events/' + userId + '/' + eventId).once('value')
  }
 
  export const putEvent = (userId, eventId, eventData) => {
    if(!eventId) {
      // Get a key for a new Post.
      eventId = database.ref().child('events/' + userId).push().key;
    }

    // Write the new post's data simultaneously in the posts list and the user's post list.
    let updates = {};
    updates['events/' + userId + '/' + eventId] = eventData;

    return database.ref().update(updates);
  }