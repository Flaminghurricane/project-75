import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDof3YcFdssQ0NdFD_F88EhRT2ntYeKI_Q",
  authDomain: "e-ride-61b1a.firebaseapp.com",
  projectId: "e-ride-61b1a",
  storageBucket: "e-ride-61b1a.appspot.com",
  messagingSenderId: "722935743929",
  appId: "1:722935743929:web:052f625aba52244ab7a268"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
