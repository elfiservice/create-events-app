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
    return firebase.auth().createUserWithEmailAndPassword(dataUser.email, dataUser.pass)
  }

  export const authUser = (dataUser) => {
    return firebase.auth().signInWithEmailAndPassword(dataUser.email, dataUser.pass)
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

  export const deleteEventDB = (userId, eventId) => {
    return database.ref('events/' + userId + '/' + eventId).remove()
  }