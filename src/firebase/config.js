import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyAdBu_5cR9BiPUm3-Hrzttv_e--CNKeUJc",
    authDomain: "caresquad-1d505.firebaseapp.com",
    projectId: "caresquad-1d505",
    storageBucket: "caresquad-1d505.appspot.com",
    messagingSenderId: "471060220784",
    appId: "1:471060220784:web:5389b1a1e7af6610081db5"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore()
const auth = firebase.auth()

export { db, auth }