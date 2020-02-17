import firebase from './fireinit.js'

export default (context) => {
  const { store } = context
  store.dispatch('user/registerAuthObserver')
}

export const auth = firebase.auth()
export const authProviders = {
  google: new firebase.auth.GoogleAuthProvider(),
  facebook: new firebase.auth.FacebookAuthProvider(),
  github: new firebase.auth.GithubAuthProvider(),
  twitter: new firebase.auth.TwitterAuthProvider()
}
