<template>
  <div id="app">
    <top-header />
    <nav>
      <router-link to="/">
        Home
      </router-link>
      <router-link
        v-if="notLoggedIn"
        to="/login"
      >
        | Login |
      </router-link>
      <router-link
        v-if="notLoggedIn"
        to="/register"
      >
        Register User
      </router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';
import Header from './components/Top-Header';
export default {
  components: {
    'top-header': Header
  },
  data() {
    return {
      notLoggedIn: true
    };
  },
  mounted() {
    this.setupFirebase();
  },
  methods: {
    setupFirebase() {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.notLoggedIn = false;
        } else {
          this.notLoggedIn = true;
        }
      });
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
