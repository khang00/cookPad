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

export function uploadStepImages(postId, steps) {
  const promises = []
  for (let i = 0; i < steps.length; ++i) {
    console.log('upload step images: ' + i)
    promises.push(uploadStepImage(postId, i, steps[i].image))
  }
  return Promise.all(promises)
}

export function uploadStepImage(postId, index, image) {
  return storage.child(`${stepStorePath}/${postId}_${index}.jpg`).put(image)
}

export function getStepImages(postId, numOfStep) {
  const promises = []
  for (let i = 0; i < numOfStep; ++i) {
    console.log('get step images: ' + i)
    promises.push(getStepImage(postId, i))
  }
  return Promise.all(promises)
}

export function getStepImage(postId, index) {
  console.log('get step images path: ' + postId + '_' + index)
  return storage
    .child(`${stepStorePath}/${postId}_${index}.jpg`)
    .getDownloadURL()
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
    .collection('posts')
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
  console.log('upload Images')
  await uploadPostImages(postId, 0, images[0])
  await uploadPostImages(postId, 1, images[1])
  await uploadPostImages(postId, 2, images[2])
  return 0
}

export async function createPost(user, post, steps, imagesNeed) {
  const postRef = await usersDB
    .doc(user.uid)
    .collection('posts')
    .add(post)
  await uploadImages(postRef.id, imagesNeed)
  const imagesUrl = await getAllImageOfPost(postRef.id)
  await updatePost(user.uid, postRef.id, { imgMain: imagesUrl })
  createPostSteps(user.uid, postRef, steps)
}

export function createPostSteps(userId, postRef, steps) {
  console.log('post steps')
  uploadStepImages(postRef.id, steps).then((values) => {
    getStepImages(postRef.id, steps.length).then((values) => {
      const stepSend = {
        content: [],
        imagURL: []
      }
      console.log('create steps send')
      console.log(stepSend)
      for (let i = 0; i < steps.length; i++) {
        stepSend.content.push(steps[i].content)
      }
      for (let i = 0; i < values.length; ++i) {
        stepSend.imagURL.push(values[i])
      }
      console.log('finish steps send')
      console.log(stepSend)
      createStep(userId, postRef.id, stepSend)
    })
  })
}

export function createStep(userId, postId, stepSend) {
  console.log('update steps')
  console.log(stepSend)
  return usersDB
    .doc(userId)
    .collection('posts')
    .doc(postId)
    .collection('Step')
    .add(stepSend)
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
  console.log('Get post')
  console.log('User: ' + userId + ' Post: ' + postId)
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
    .collection('posts')
    .doc(postId)
}
