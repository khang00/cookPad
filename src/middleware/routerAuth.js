export default function({ store, redirect, route }) {
  if (store.getters['user/getUser'] != null && route.name === 'login') {
    redirect('/')
  }
}
