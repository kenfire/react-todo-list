import * as firebase from 'firebase'

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyCpQ5Ve8lRLOHzX_PaRI9QkbYBdTBhHHfA',
  authDomain: 'todo-list-4f52c.firebaseapp.com',
  databaseURL: 'https://todo-list-4f52c.firebaseio.com',
  projectId: 'todo-list-4f52c',
  storageBucket: 'todo-list-4f52c.appspot.com',
  messagingSenderId: '863198203903'
}
firebase.initializeApp(config)

export const db = firebase.database()