import firebase from "firebase/app";
import "firebase/database";

export const createUser = (userId, name, email) => {
  firebase.database().ref(`users/${userId}`).set({
    email: email,
    name: name,
  });
};
