import { usersDB } from '@/plugins/lib/userAssist.js'
import storage from '@/plugins/firestore.js'
// import storage from '@/plugins/firestore.js'
const postStorePath = 'post'
const stepStorePath = 'step'
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
  console.log('update')
  console.log(post)
  return usersDB
    .doc(userId)
    .collection('post')
    .doc(postId)
    .update(post)
}

export async function getAllImageOfPost(postId) {
  const imagesUrl = []
  imagesUrl.push(await getUrlPhotoImage(postId, 0))
  imagesUrl.push(await getUrlPhotoImage(postId, 1))
  imagesUrl.push(await getUrlPhotoImage(postId, 2))
  return imagesUrl
}

export async function uploadImages(postId, images) {
  await uploadPostImages(postId, 0, images[0])
  await uploadPostImages(postId, 1, images[1])
  await uploadPostImages(postId, 2, images[2])
  return 0
}

export async function createPost(user, post, steps, imagesNeed) {
  const postRef = await usersDB
    .doc(user.uid)
    .collection('post')
    .add({
      post
    })
  await uploadImages(postRef.id, imagesNeed)
  const imagesUrl = await getAllImageOfPost(postRef.id)
  await updatePost(user.uid, postRef.id, { imgMain: imagesUrl })
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
          const postObject = { ...document.data() }
          postObject.id = document.id
          postsArr.push(postObject)
        })
        console.log(postsArr)
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
export function getPostStep(userId, postId) {
  return usersDB
    .doc(userId)
    .collection('posts')
    .doc(postId)
    .collection('Step')
    .get()
}
export function getUserPost(userId, postId) {
  return usersDB
    .doc(userId)
    .collection('post')
    .doc(postId)
}
