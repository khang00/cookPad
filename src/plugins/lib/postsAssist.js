import database from '@/plugins/database.js'
// import storage from '@/plugins/firestore.js'

const collection = 'posts'
const postsDB = database.collection(collection)

export function getUserPost(ownerUid) {
  postsDB.doc(ownerUid).get()
}
