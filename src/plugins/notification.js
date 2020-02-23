import firebase from '@/plugins/fireinit.js'
import 'firebase/messaging'

const messaging = firebase.messaging()

messaging.usePublicVapidKey(
  'BA6vodzrp9qWc3iyZ6cOYUsuzHiL5n_OsklEvra7gnBWhkGVehtwvdlFKh9IidCGdBM3WH9BuZIfg6g4-sNhcKg'
)

export default (context) => {
  /* const { store } = context

  messaging
    .requestPermission()
    .then(() => {
      messaging.getToken().then((token) => {
        store.dispatch('notification/updateToken', token)
      })
    })
    .catch((error) => {
      store.dispatch('notification/updateToken', null)
      console.log('token error: ' + error)
    })

  messaging.onTokenRefresh(() => {
    messaging
      .getToken()
      .then((refreshedToken) => {
        store.dispatch('notification/updateToken', refreshedToken)
        console.log('update token')
      })
      .catch((err) => {
        store.dispatch('notification/updateToken', null)
        console.log('Unable to retrieve refreshed token ', err)
      })
  }) */
}
