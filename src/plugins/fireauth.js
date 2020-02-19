import firebase from './fireinit.js'
import 'firebase/auth'

export const auth = firebase.auth()
export const authProviders = {
  Google: new firebase.auth.GoogleAuthProvider(),
  Facebook: new firebase.auth.FacebookAuthProvider(),
  Github: new firebase.auth.GithubAuthProvider(),
  Twitter: new firebase.auth.TwitterAuthProvider()
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
