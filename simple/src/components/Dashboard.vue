<template>
  <div>
    <p>Username</p>
    <input type="text" v-model="username">
    <p>Your username is {{username}}</p>
    <p>Password</p>
    <input type="text"><br><br>
    <button @click="loginpage">Log in{{login}}</button>
    <button>Sign Up</button>

  </div>
</template>

<script>
export default {
  data(){
    return{
      username: '',
      login: '',
    }
  },
  // props: {
  //   func: {
  //     type: String,
  //     required: true
  //   }
  // },
  methods: {
    loginpage(){
      this.login
    }
  }
}
</script>
