import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyDQmMoPmEc87thyR20x6C1Z4BAxpo_Ydtk',
  authDomain: 'music-3a716.firebaseapp.com',
  projectId: 'music-3a716',
  storageBucket: 'music-3a716.appspot.com',
  appId: '1:141995382608:web:1281cadddd3f3ea65f7e55'
}

firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()
const db = firebase.firestore()

db.enablePersistence().catch((error) => {
  console.log(`Firebase persistence error ${error.code}`)
})

const storage = firebase.storage()
const usersCollection = db.collection('users')
const songsCollection = db.collection('songs')
const commentsCollection = db.collection('comments')

export { auth, db, storage, usersCollection, songsCollection, commentsCollection }
