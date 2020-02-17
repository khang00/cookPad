import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyCckESE6v5086AtsvA279fc-s2oWpv1A8c',
  authDomain: 'cookpad-blog.firebaseapp.com',
  databaseURL: 'https://cookpad-blog.firebaseio.com',
  projectId: 'cookpad-blog',
  storageBucket: 'cookpad-blog.appspot.com',
  messagingSenderId: '494407302340',
  appId: '1:494407302340:web:997dd74ca18eb98bf31d91',
  measurementId: 'G-3V0C41VXNG'
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export const DB = firebase.database()
export const StoreDB = firebase.firestore()
export default firebase
