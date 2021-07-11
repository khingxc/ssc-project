<template>
  <div>
    <p>My Point Of View</p>
    <p>Username</p>
    <input type="text" v-model="username">
<!--    <p>Your username is {{username}}</p>-->
    <p>Password</p>
    <input type="text"><br><br>
    <button @click="loginpage">Log in{{login}}</button>
<!--    <button to="/Signup">Sign Up</button>-->
<!--    <v-btn to="/Signup">Sign Up</v-btn>-->
<!--    <Signup function="SIGNUP"></Signup>-->

  </div>
</template>

<script>

// import Router from 'vue-router';
// import Signup from "./Signup";
//
// Vue.use(Router)

// export default new Router({
//   mode: 'history',
//   base: process.eventNames.BASE_URL,
//   routes: [
//     {
//       component: Signup
//     }
//   ]
//
// })

// import router from 'vue-router';
// import Signup from "./Signup";

// const router = new VueRouter({
//   routes: [
//     { path: '/Login', redirect: '/Signup' }
//   ]
// })
//
// const routes = [
//   { path: '/components/Login', redirect: 'components/Signup' }
// ];
//
// const router = createRouter({
//
// });

export default {
  // components: {Signup},
  data(){
    return{
      username: '',
      login: ''
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
<!--<style>-->
<!--a {-->
<!--  color: #FEF9E7;-->
<!--}-->
<!--</style>-->
