<template>
<!--  <div>-->
<!--    <p>My Point Of View</p>-->
<!--    <p>Username</p>-->
<!--    <input type="text" v-model="username">-->
<!--&lt;!&ndash;    <p>Your username is {{username}}</p>&ndash;&gt;-->
<!--    <p>Password</p>-->
<!--    <input type="text"><br><br>-->
<!--    <v-btn @click="loginpage">Log in{{login}}</v-btn>-->
<!--&lt;!&ndash;    <button to="/Signup">Sign Up</button>&ndash;&gt;-->
<!--&lt;!&ndash;    <v-btn to="/Signup">Sign Up</v-btn>&ndash;&gt;-->
<!--&lt;!&ndash;    <Signup function="SIGNUP"></Signup>&ndash;&gt;-->

<!--  </div>-->
  <v-form
      ref="form"
      v-model="valid"
      lazy-validation
  >

    <v-img src="@/assets/myPOV.png" height="248px" width="351px"></v-img>

    <v-text-field
        v-model="displayName"
        :rules="displayNameRules"
        label="Display Name"
        required
    ></v-text-field>

    <v-text-field
        type="password"
        v-model="password"
        :rules="passwordRules"
        label="Password"
        required
    ></v-text-field>


    <v-btn
        :disabled="!valid"
        color="blue"
        class="mr-4"
        @click="submit"
    >
      Log In
    </v-btn>

  </v-form>
</template>
<script>
export default {
  data: () => ({
    valid: true,
    displayName: '',
    password: '',
    displayNameRules: [v => !!v || 'Display Name is required'],
    passwordRules: [v => !!v || 'Password is required'],
  }),

  methods: {
    submit () {
      this.$refs.form.validate()
      console.log(this.displayName, this.password)
    },
  },
}
</script>

<!--<script>-->

<!--// import Router from 'vue-router';-->
<!--// import Signup from "./Signup";-->
<!--//-->
<!--// Vue.use(Router)-->

<!--// export default new Router({-->
<!--//   mode: 'history',-->
<!--//   base: process.eventNames.BASE_URL,-->
<!--//   routes: [-->
<!--//     {-->
<!--//       component: Signup-->
<!--//     }-->
<!--//   ]-->
<!--//-->
<!--// })-->

<!--// import router from 'vue-router';-->
<!--// import Signup from "./Signup";-->

<!--// const router = new VueRouter({-->
<!--//   routes: [-->
<!--//     { path: '/Login', redirect: '/Signup' }-->
<!--//   ]-->
<!--// })-->
<!--//-->
<!--// const routes = [-->
<!--//   { path: '/components/Login', redirect: 'components/Signup' }-->
<!--// ];-->
<!--//-->
<!--// const router = createRouter({-->
<!--//-->
<!--// });-->

<!--export default {-->
<!--  // components: {Signup},-->
<!--  data(){-->
<!--    return{-->
<!--      username: '',-->
<!--      login: ''-->
<!--    }-->
<!--  },-->

<!--  // props: {-->
<!--  //   func: {-->
<!--  //     type: String,-->
<!--  //     required: true-->
<!--  //   }-->
<!--  // },-->
<!--  methods: {-->
<!--    loginpage(){-->
<!--      this.login-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->
<!--<style>-->
<!--a {-->
<!--  color: #FEF9E7;-->
<!--}-->
<!--</style>-->
