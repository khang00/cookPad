import { usersDB } from '@/plugins/lib/userAssist.js'
import storage from '@/plugins/firestore.js'
// import storage from '@/plugins/firestore.js'
const postStorePath = 'post/'
const stepStorePath = 'step/'
export const defaultPhoto =
  'https://firebasestorage.googleapis.com/v0/b/cookpad-blog.appspot.com/o/user%2Fdefault.jpg?alt=media&token=865f142c-99fb-4255-9b9d-a1d2682abd42'

export function uploadPostImages(postId, index, image) {
  return storage.child(`${postStorePath}/${postId}_${index}.jpg`).put(image)
}

export function uploadStepImages(stepId, image) {
  return storage.child(`${stepStorePath}/${stepId}.jpg`).put(image)
}

export function getUrlPhotoImage(postId, index) {
  return storage
    .child(`${postStorePath}/${postId}_${index}.jpg`)
    .getDownloadURL()
}

export function updatePost(userId, postId, post) {
  return usersDB
    .doc(userId)
    .collection('post')
    .doc(postId)
    .update(post)
}

export function getAllImageOfPost(userId, postId) {
  return new Promise((resolve, reject) => {
    const imagesUrl = []
    getUrlPhotoImage(userId, postId, 1).then((url) => {
      imagesUrl.push(url)
      getUrlPhotoImage(userId, postId, 2).then((url) => {
        imagesUrl.push(url)
        getUrlPhotoImage(userId, postId, 3).then((url) => {
          imagesUrl.push(url)
          resolve(imagesUrl)
        })
      })
    })
  })
}

export async function uploadImages(postId, images) {
  return new Promise((resolve, reject) => {
    uploadPostImages(postId, 0, images[0]).then((ref) => {
      uploadPostImages(postId, 1, images[1]).then((ref) => {
        uploadPostImages(postId, 2, images[2]).then((ref) => {
          resolve()
        })
      })
    })
  })
}

export function createPost(uid, post, steps) {
  return new Promise((resolve, reject) => {
    const imagesNeed = post.images
    delete post.images
    usersDB
      .doc(uid)
      .collection('post')
      .add(post)
      .then((postRef) => {
        uploadImages(postRef.id, imagesNeed).then(() => {
          getAllImageOfPost(uid, postRef.id).then((imagesUrl) => {
            const postIm = {
              imageUrl1: imagesUrl[0],
              imageUrl2: imagesUrl[1],
              imageUrl3: imagesUrl[2]
            }
            updatePost(uid, postRef.id, postIm)
          })
        })
      })
      .catch((err) => {
        reject(err)
      })
  })
}

export function createPostSteps(postRef, steps) {
  steps.forEach((step) => {
    postRef
      .collection('steps')
      .add(step)
      .then((stepRef) => {})
  })
}

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
