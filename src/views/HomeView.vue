<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/logo.png"
    >
    <div v-if="loggedIn">
      <h3>Welcome home</h3>
      <h3 class="user">
        {{ userData }}
      </h3>
      <UserCreate />
      <UserList />
    </div>
    <div v-else>
      <h3>Please Log in</h3>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';
import UserCreate from '@/components/UserCreate.vue';
import UserList from '@/components/UserList.vue';

export default {
  components: { UserCreate, UserList },
  data() {
    return {
      loggedIn: false,
      userData: ''
    };
  },
  mounted() {
    this.setupFirebase();
    this.getUserData();
  },
  methods: {
    async getUserData() {
      const email = await firebase.auth().currentUser?.email;
      this.userData = email;
    },
    setupFirebase() {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.loggedIn = true;
        } else {
          this.loggedIn = false;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
div {
  color: inherit;
}
</style>
