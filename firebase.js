import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAZuRbEg2pD97b3swW5o7mgFwRVm2RviNQ',
  authDomain: 'whatsapp-2-7d27a.firebaseapp.com',
  projectId: 'whatsapp-2-7d27a',
  storageBucket: 'whatsapp-2-7d27a.appspot.com',
  messagingSenderId: '46298288642',
  appId: '1:46298288642:web:c3b9c68786463b9dddcd1b',
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
