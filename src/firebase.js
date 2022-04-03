import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyBtySwK7bCERK5TM9crDk98nLy7le-PENE",
  authDomain: "netflix-clone-7aaaf.firebaseapp.com",
  projectId: "netflix-clone-7aaaf",
  storageBucket: "netflix-clone-7aaaf.appspot.com",
  messagingSenderId: "886967025523",
  appId: "1:886967025523:web:93e5a9bef2ec3d5c6d8f06",
};

const firebaseApp = firebase.initializeApp(config);
const auth = firebase.auth();
export {auth};