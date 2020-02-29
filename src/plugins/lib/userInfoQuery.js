import database from '@/plugins/database.js'

const collection = 'users'
const users = database.collection(collection)

export const infoType = {
  date: ['DOB'],
  image: ['avtUrl', 'backgroundUrl'],
  string: ['name', 'phone', 'gender']
}

export const infoModel = {
  name: '',
  avtUrl: '',
  backgroundUrl: '',
  DOB: null,
  phone: '',
  gender: ''
}

export function getInfo(userId) {
  const doc = users.doc(userId)
  return doc.get()
}

export function setInfo(userId, info) {
  return users.doc(userId).set(info)
}

export function updateInfo(userId, info) {
  return users.doc(userId).update(info)
}
