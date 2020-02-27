import firebase from './fireinit'
import 'firebase/storage'

export const storage = firebase.storage().ref()

/* storage
  .child('user/images/CKzDwBjlZhaolPYU6rOY_background.jpg')
  .getDownloadURL()
  .then((url) => {
    console.log(url)
  }) */
