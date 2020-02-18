import firebase from './fireinit.js'
import 'firebase/auth'

export const auth = firebase.auth()
export const authProviders = {
  google: new firebase.auth.GoogleAuthProvider(),
  facebook: new firebase.auth.FacebookAuthProvider(),
  github: new firebase.auth.GithubAuthProvider(),
  twitter: new firebase.auth.TwitterAuthProvider()
}
export default (context) => {
  const { store } = context
  auth.onAuthStateChanged((user) => {
    console.log('load')
    if (user) {
      store.dispatch('user/updateUser', user)
    } else {
      store.dispatch('user/updateUser', null)
    }
  })
}
