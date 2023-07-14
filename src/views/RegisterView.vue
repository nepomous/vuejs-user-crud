<template>
  <div>
    <div
      v-if="error"
      class="error"
    >
      {{ error.message }}
    </div>
    <form @submit.prevent="pressed">
      <h3>Register</h3>
      <div class="email">
        <input
          v-model="email"
          class="form-control"
          type="email"
          placeholder="email"
        >
      </div>
      <div class="password">
        <input
          v-model="password"
          class="form-control"
          type="password"
          placeholder="password"
        >
      </div>
      <button
        class="btn btn-primary m-3"
        type="submit"
      >
        Register
      </button>
    </form>
  </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';

export default {
  data() {
    return {
      email: '',
      password: '',
      error: ''
    };
  },
  methods: {
    pressed() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.replace({ name: 'home' });
        })
        .catch((error) => (this.error = error));
    }
  }
};
</script>

<style lang="scss" scoped>
.error {
  color: red;
  font-size: 18px;
}
input {
  margin-top: 20px;
  font-size: 21px;
}
</style>
