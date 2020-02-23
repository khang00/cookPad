import firebase from '@/plugins/fireinit.js'
import 'firebase/firestore'

const database = firebase.firestore()
/* const users = database.collection('users')
const doc = database.collection('users').doc('lshBHXSMf5eEHtpvI9z4ncx9CN33')
doc
  .get()
  .then(function(doc) {
    if (doc.exists) {
      console.log('Document data:', doc.data())
    } else {
      // doc.data() will be undefined in this case
      console.log('No such document!')
    }
  })
  .catch(function(error) {
    console.log('Error getting document:', error)
  })
console.log(users) */
export default database
