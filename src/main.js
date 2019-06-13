// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { firestorePlugin } from 'vuefire'
import firebase from 'firebase/app'
import store from '@/store/store.js'
import 'firebase/firestore'
import Clipboard from 'v-clipboard'
import Element from 'element-ui'
Vue.use(Element)
Vue.use(Clipboard)
Vue.use(firestorePlugin)
firebase.initializeApp({
  projectId: 'lista-spesa-86111',
  databaseURL: 'https://lista-spesa-86111.firebaseio.com'
})
export const db = firebase.firestore()

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
