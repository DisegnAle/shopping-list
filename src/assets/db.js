import Vue from 'vue'
import { firestorePlugin } from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'
Vue.use(firestorePlugin)
firebase.initializeApp({
  projectId: 'lista-spesa-b25a7',
  databaseURL: 'https://lista-spesa-b25a7.firebaseio.com'
})
export const db = firebase.firestore()
