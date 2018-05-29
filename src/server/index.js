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

