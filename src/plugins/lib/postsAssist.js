import { usersDB } from '@/plugins/lib/userAssist.js'
// import storage from '@/plugins/firestore.js'

export function getAllUserPost(uid) {
  return new Promise((resolve, reject) => {
    const postsArr = []
    usersDB
      .doc(uid)
      .collection('posts')
      .get()
      .then((posts) => {
        posts.forEach((document) => {
          postsArr.push(document.data())
        })
        resolve(postsArr)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

export function getAllUserSavedPost(uid) {
  return new Promise((resolve, reject) => {
    const postsArr = []
    usersDB
      .doc(uid)
      .collection('savedPosts')
      .get()
      .then((posts) => {
        posts.forEach((document) => {
          postsArr.push(document.data())
        })
        resolve(postsArr)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
