import firebase from './fireinit'
import 'firebase/storage'

export const storage = firebase.storage().ref()
