import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDB_bYFFX-ZaPedgCj5dzBS6QnxO6KEjYI",
    authDomain: "crud-operation-reactjs.firebaseapp.com",
    databaseURL: "https://crud-operation-reactjs.firebaseio.com",
    projectId: "crud-operation-reactjs",
    storageBucket: "crud-operation-reactjs.appspot.com",
    messagingSenderId: "829138764032",
    appId: "1:829138764032:web:81adbc2b64f21a795ef3e5"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

export default firebaseApp.database().ref();