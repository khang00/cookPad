import database from '@/plugins/database.js'
import storage from '@/plugins/firestore.js'

const collection = 'users'
const usersDB = database.collection(collection)
const userStorePath = 'user/'
const defaultPhoto =
  'https://firebasestorage.googleapis.com/v0/b/cookpad-blog.appspot.com/o/user%2Fdefault.jpg?alt=media&token=865f142c-99fb-4255-9b9d-a1d2682abd42'

export const infoModel = {
  displayName: '',
  email: '',
  photoUrl: defaultPhoto,
  phone: '',
  bio: '',
  followers: 0,
  following: 0
}

export function getUrlPhotoImage(userId) {
  return storage.child(`${userStorePath}/${userId}`).getDownloadURL()
}

export function updatePhotoImage(userId, image) {
  return storage.child(`${userStorePath}/${userId}`).put(image)
}

export function getInfo(userId) {
  return usersDB.doc(userId).get()
}

export function setInfo(userId, info) {
  return usersDB.doc(userId).set(info)
}

export function updateInfo(userId, info) {
  return usersDB.doc(userId).update(info)
}
