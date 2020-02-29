import database from '@/plugins/database.js'
import storage from '@/plugins/firestore.js'

const collection = 'users'
const usersDB = database.collection(collection)
const userStorePath = 'user/'

export const infoType = {
  date: ['DOB'],
  image: ['avtUrl', 'backgroundUrl'],
  string: ['name', 'phone', 'gender']
}

export const infoModel = {
  name: '',
  avtUrl:
    'https://firebasestorage.googleapis.com/v0/b/cookpad-blog.appspot.com/o/user%2Favt%2Fdefault.png?alt=media&token=0d085fe9-9362-422a-b853-822229a54648',
  backgroundUrl:
    'https://firebasestorage.googleapis.com/v0/b/cookpad-blog.appspot.com/o/user%2Fbackground%2Fdefault.png?alt=media&token=7bac8fd4-3255-4b04-a682-e0176ba74e6d',
  DOB: null,
  phone: '',
  gender: ''
}

export function getUrlAvtImage(userId) {
  return storage.child(`${userStorePath}/avt/${userId}.png`).getDownloadURL()
}

export function getUrlBackgroundImage(userId) {
  return storage
    .child(`${userStorePath}/background/${userId}.png`)
    .getDownloadURL()
}

export function updateAvtImage(userId, image) {
  return storage.child(`user/avt/${userId}.png`).put(image)
}

export function updateBackgroundImage(userId, image) {
  return storage.child(`user/background/${userId}.png`).put(image)
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
