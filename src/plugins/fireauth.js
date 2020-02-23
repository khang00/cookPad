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
    if (user) {
      const userAuth = {
        name: user.displayName,
        email: user.email,
        emailVerified: user.emailVerified,
        uid: user.uid
      }
      store.dispatch('user/updateUser', userAuth)
    } else {
      store.dispatch('user/updateUser', null)
    }
  })
}
