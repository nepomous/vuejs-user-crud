<template>
    <div>
      Logged in
      <div v-if="loggedIn">Yes</div>
      <div v-else>No</div>
      <button class="but" @click="signOut">Sign out</button>
    </div>
  </template>
  
  <script>
    import firebase from 'firebase/app'
    import "firebase/auth";
  export default {
    name: "top-header",
    mounted() {
      this.setupFirebase();
    },
    methods: {
      setupFirebase() {
        firebase.auth().onAuthStateChanged(user => {
          if (user) {
            this.loggedIn = true;
          } else {
            this.loggedIn = false;
          }
        });
      },
      signOut() {
        firebase
          .auth()
          .signOut()
          .then(() => {
            this.$router.replace({ name: "login" });
          });
      }
    },
    data() {
      return {
        loggedIn: false
      };
    }
  };
  </script>
  
  <style lang="scss" scoped>
  div {
    color: inherit;
  }
  </style>