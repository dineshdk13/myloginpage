import * as firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBO_RLriNad0P18CmGZJrNZPU7eqT2NVjI",
    authDomain: "myprojectdk13.firebaseapp.com",
    databaseURL: "https://myprojectdk13.firebaseio.com",
    projectId: "myprojectdk13",
    storageBucket: "myprojectdk13.appspot.com",
    messagingSenderId: "64774884938",
    appId: "1:64774884938:web:b30806206d44d132abe0b3"
  };
  firebase.initializeApp(firebaseConfig);

export default {
    auth: firebase.auth(),
    login() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider)
      .then(function(result) {
        console.log(result);
      })
      .catch(function(error){
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = error.credential;
        console.log(errorCode, errorMessage, email, credential);
        })
    },
    logout() {
      firebase.auth().signOut()
      .then(function() {})
      .catch(function(error) {
        console.log(error)});
    }
}