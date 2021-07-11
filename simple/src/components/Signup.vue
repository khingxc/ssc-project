<template>
  <div>
    <p>Sign Up</p>
    <p>email</p>
    <input type="text" v-model="email">
    <p>username</p>
    <input type="text" v-model="username">
    <p>password</p>
    <input type="text" v-model="password"><br/>
    <button to="/Signup">Sign Up</button>

  </div>
</template>

<script>
export default {
  name: "Signup",
  data() {
    return {
      email: '',
      username: '',
      password: ''
    }
  }
}
</script>

<style scoped>

</style>