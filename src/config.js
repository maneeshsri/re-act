/* This is the Firebase configuration file*/

import Firebase from 'firebase';



 let config = {
    apiKey: "AIzaSyDW6LVTZYmOizlsn1K5p8_tYIdHKXXcSv8",
    authDomain: "re-act-215f9.firebaseapp.com",
    databaseURL: "https://re-act-215f9.firebaseio.com",
    projectId: "re-act-215f9",
    storageBucket: "",
    messagingSenderId: "1078341914606"
  };

/**
let config = {
  apiKey: "AIzaSyCnxuLX6AgMduDMLtSJVDNJhR8xuMNvs4Y",
  authDomain: "tamiat-demo.firebaseapp.com",
  databaseURL: "https://tamiat-demo.firebaseio.com/",
  projectId: "tamiat-demo",
  storageBucket: "gs://tamiat-demo.appspot.com/",
  messagingSenderId: "188459960333"
};
***/
let app = Firebase.initializeApp(config);
let db = app.database();

// create a database references
const settingsRef = db.ref('settings');
const pagesRef = db.ref('pages');
const postsRef = db.ref('posts');
const usersRef = db.ref('users');
const mediaRef = db.ref('media');

export { postsRef, usersRef, settingsRef, pagesRef, mediaRef };
