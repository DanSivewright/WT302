import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase'

const firebaseConfig = firebase.initializeApp({
  apiKey: 'AIzaSyDjxYY1Cn8JwbWaTejyjvpmtzFkwyE6zO8',
  authDomain: 'wt302-f4070.firebaseapp.com',
  databaseURL: 'https://wt302-f4070.firebaseio.com',
  projectId: 'wt302-f4070',
  storageBucket: 'wt302-f4070.appspot.com',
  messagingSenderId: '73687738012',
  appId: '1:73687738012:web:836fb58d9c84d83cefaf59'
})

export { firebaseConfig as db }
