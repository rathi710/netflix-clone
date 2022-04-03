import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyDATGXtZ0OGivzfRRbv7NHw_cbJmPnHzQM",
  authDomain: "netflix-clone-d3267.firebaseapp.com",
  projectId: "netflix-clone-d3267",
  storageBucket: "netflix-clone-d3267.appspot.com",
  messagingSenderId: "249619634219",
  appId: "1:249619634219:web:e9832af3ec1ccf68d3b26e"
};

const firebaseApp = firebase.initializeApp(config);
const auth = firebase.auth();
export {auth};