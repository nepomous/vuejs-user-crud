<template>
  <div>
    <button
      v-if="loggedIn"
      class="but"
      @click="signOut"
    >
      Sign out
    </button>
  </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';
export default {
  name: 'TopHeader',
  data() {
    return {
      loggedIn: false
    };
  },
  mounted() {
    this.setupFirebase();
  },
  methods: {
    setupFirebase() {
      firebase.auth().onAuthStateChanged((user) => {
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
          this.$router.replace({ name: 'login' });
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
