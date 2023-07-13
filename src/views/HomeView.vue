<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h3>Welcome home</h3>
    <!-- <h5 class="user" >{{userData}}</h5> -->
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";

export default {
  data() {
    return {
      userData: ""
    };
  },
  mounted() {
    this.getUserData();
  },
  methods: {
    async getUserData() {
      const email = await firebase.auth().currentUser.email;
      console.log('tem email?', email)
      this.userData = email;
    }
  }
};
</script>

<style lang="scss" scoped>
div {
  color: inherit;
}
</style>