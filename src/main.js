import Vue, { ref, onUnmounted } from 'vue';
// import { ref, onUnmounted } from "vue";
import App from './App.vue';
import router from './router';
import store from './store';
import firebase from 'firebase/app';
import 'firebase/firestore';
import axios from 'axios';

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

export const firebaseConfig = {
  apiKey: 'AIzaSyCYv_T4OXue7tp70LbxYji0G-p9m1OLQIs',
  authDomain: 'rockethelp-bbe1c.firebaseapp.com',
  projectId: 'rockethelp-bbe1c',
  storageBucket: 'rockethelp-bbe1c.appspot.com',
  messagingSenderId: '712397114595',
  appId: '1:712397114595:web:38a449ce4f4d89d42689d6'
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const usersCollection = db.collection('users');

export const createUser = (user) => {
  return usersCollection.add(user);
};

export const getUser = async (id) => {
  const user = await usersCollection.doc(id).get();
  return user.exists ? user.data() : null;
};

export const updateUser = (id, user) => {
  return usersCollection.doc(id).update(user);
};

export const deleteUser = (id) => {
  return usersCollection.doc(id).delete();
};

export const useLoadUsers = () => {
  const users = ref([]);
  const close = usersCollection.onSnapshot((snapshot) => {
    users.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  });
  onUnmounted(close);
  return users;
};

let app;

// new Vue({
//   router,
//   store,
//   render: (h) => h(App),
// }).$mount("#app");

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App)
    }).$mount('#app');
  }
});
