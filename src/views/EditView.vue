<template>
  <div class="card card-body mt-4">
    <h3>Edit users</h3>
    <form @submit.prevent="update">
      <div class="form-group">
        <label>Name</label>
        <input
          v-model="form.name"
          class="form-control"
          required
        >
      </div>

      <div class="form-group mt-3">
        <label>Email</label>
        <input
          v-model="form.email"
          class="form-control"
          type="email"
          required
        >
      </div>

      <button
        type="submit"
        class="btn btn-primary mt-3"
      >
        Update
      </button>
    </form>
  </div>
</template>

<script>
import { getUser, updateUser } from '../main';

export default {
  data() {
    return {
      userId: this.$route.params.id,
      form: {
        name: '',
        email: ''
      }
    };
  },

  mounted() {
    this.setData();
  },
  methods: {
    async setData() {
      const user = await getUser(this.userId);
      this.form.name = user.name;
      this.form.email = user.email;
    },
    async update() {
      await updateUser(this.userId, { ...this.form });
      this.$router.push('/');
      this.form.name = '';
      this.form.email = '';
    }
  }
};
</script>
