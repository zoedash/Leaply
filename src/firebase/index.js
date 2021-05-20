import firebase from "firebase";

const config = {
  apiKey: "AIzaSyAZJ5OuD8tRpbzhxSE9oI1DtkSf1jntsPk",
  authDomain: "leaply-607e9.firebaseapp.com",
  projectId: "leaply-607e9",
  storageBucket: "leaply-607e9.appspot.com",
  messagingSenderId: "987416626593",
  appId: "1:987416626593:web:1d1a4040c67cf4fe55f7e0"
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();
export const auth = firebase.auth();
export default firebase;
