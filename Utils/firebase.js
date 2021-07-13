import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBFVjlXP6WXcvlILMCKYgLLCGi4k1ASdQQ",
    authDomain: "instgramclone-755f4.firebaseapp.com",
    projectId: "instgramclone-755f4",
    storageBucket: "instgramclone-755f4.appspot.com",
    messagingSenderId: "566911154926",
    appId: "1:566911154926:web:5b037297d0f9d46d2351ff",
    measurementId: "G-KEN3ENC0BP"
  };

export const firebaseApp = firebase.initializeApp(firebaseConfig)

