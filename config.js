
import firebase from 'firebase'
require("@firebase/firestore")



var firebaseConfig = {
  apiKey: "AIzaSyAhWCTDlOwXlIfxMmjsqWDF5IXJrXuV7Kc",
  authDomain: "my-recepie-app.firebaseapp.com",
  databaseURL: "https://my-recepie-app-default-rtdb.firebaseio.com",
  projectId: "my-recepie-app",
  storageBucket: "my-recepie-app.appspot.com",
  messagingSenderId: "323561450305",
  appId: "1:323561450305:web:d6de9e5dfaf9f245a08fc0"
};


firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()
