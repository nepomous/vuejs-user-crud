import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase/app";
import axios from "axios";

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

const firebaseConfig = {
  apiKey: "AIzaSyCYv_T4OXue7tp70LbxYji0G-p9m1OLQIs",
  authDomain: "rockethelp-bbe1c.firebaseapp.com",
  projectId: "rockethelp-bbe1c",
  storageBucket: "rockethelp-bbe1c.appspot.com",
  messagingSenderId: "712397114595",
  appId: "1:712397114595:web:38a449ce4f4d89d42689d6",
};

firebase.initializeApp(firebaseConfig);

let app;

firebase.auth().onAuthStateChanged((user) => {
  console.log("user", user);
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  }
});

// new Vue({
//   router,
//   render: (h) => h(App),
// }).$mount("#app");
