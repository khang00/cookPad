import firebase from './fireinit'
import 'firebase/storage'

const storage = firebase.storage().ref()
export default storage

// console.log(storage.child(`user/avt/default.png`).getDownloadURL())
// console.log(storage.child(`user/background/default.png`).getDownloadURL())
