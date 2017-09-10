import { db } from '../Firebase'
import { FETCH_POSTS } from './types'

const Posts = db.ref().child('posts')

export function fetchPosts () {
  return dispatch => {
    Posts.on('value', snapshot => {
      dispatch({
        type: FETCH_POSTS,
        payload: snapshot.val()
      })
    })
  }
}

export function createPost (post) {
  return dispatch => Posts.push(post)
}

export function deletePost (key) {
  return dispatch => Posts.child(key).remove()
}