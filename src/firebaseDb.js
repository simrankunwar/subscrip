/* eslint-disable */
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';



const firebaseConfig = {
  apiKey: 'AIzaSyB77u7rQ02vGL6Il2IetPpUVnY6byyNBak',
  authDomain: 'subscriptions-888d1.firebaseapp.com',
  projectId: 'subscriptions-888d1',
  storageBucket: 'subscriptions-888d1.appspot.com',
  messagingSenderId: '759401588096',
  appId: '1:759401588096:web:0e64d767125b3f425f4d65'
}

const db = firebase.initializeApp(firebaseConfig);
export default db.firestore();
