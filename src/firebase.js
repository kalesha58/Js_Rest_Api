import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


const firebaseConfig = {
    apiKey: "AIzaSyA11Qd3iJD0AtgPbU4NcfgVE8umWVUpA3k",
    authDomain: "moon-70.firebaseapp.com",
    projectId: "moon-70",
    storageBucket: "moon-70.appspot.com",
    messagingSenderId: "166821533746",
    appId: "1:166821533746:web:1613d8d0afba271706042b"
  };
  firebase.initializeApp(firebaseConfig)
  export default firebase.auth()

  