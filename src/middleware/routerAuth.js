export default function({ store, redirect, route }) {
  if (
    store.getters['user/getUser'] !== null &&
    (route.name === 'login' || route.name === 'createAccount')
  ) {
    redirect('/')
  }

  if (
    store.getters['user/getUser'] === null &&
    !(
      route.name === 'index' ||
      route.name === 'login' ||
      route.name === 'createAccount'
    )
  ) {
    redirect('/login')
  }
}
