import firebase from 'firebase';

var config = {
   apiKey: "AIzaSyCPMzxKerwheAIGPUpSiZXZqnsdW2H2iZs",
   authDomain: "front-end-508cf.firebaseapp.com",
   databaseURL: "https://front-end-508cf.firebaseio.com",
   projectId: "front-end-508cf",
   storageBucket: "front-end-508cf.appspot.com",
   messagingSenderId: "1070147263784"
 };
 firebase.initializeApp(config);

 export default firebase;
 export const storage = firebase.storage();
