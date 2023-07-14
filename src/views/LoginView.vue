<template>
  <div>
    <h3>Login</h3>
    <form @submit.prevent="pressed">
      <div class="login">
        <input
          class="form-control"
          type="text"
          placeholder="login"
          v-model="email"
        />
      </div>
      <div class="password">
        <input
          class="form-control"
          type="password"
          placeholder="password"
          v-model="password"
        />
      </div>
      <button class="btn btn-success m-5">Login</button>
    </form>
    <div>
      <h5>Don't have account?</h5>
      <button class="btn btn-primary btn-sm me-2" @click="goToRegister">
        Please Register
      </button>
    </div>
    <div class="error" v-if="error">{{ error.message }}</div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },
  methods: {
    pressed() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((data) => {
          console.log(data);
          this.$router.replace({ name: "home" });
        })
        .catch((error) => {
          this.error = error;
        });
    },
    goToRegister() {
      this.$router.replace({ name: "register" });
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  color: inherit;
}
input {
  margin-top: 20px;
  font-size: 21px;
}

.error {
  color: red;
}
</style>
