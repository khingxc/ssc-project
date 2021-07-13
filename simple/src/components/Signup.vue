<template>
  <v-form
      ref="form"
      v-model="valid"
      lazy-validation
  >
    <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
    ></v-text-field>

    <v-text-field
        v-model="username"
        :counter="30"
        :rules="usernameRules"
        label="Username"
        required
    ></v-text-field>

    <v-text-field
        type="password"
        v-model="password"
        :counter="20"
        :rules="passwordRules"
        label="Password"
        required
    ></v-text-field>

    <v-text-field
        type="password"
        v-model="confirmPassword"
        :counter="20"
        :rules="[(password === confirmPassword) || 'Password does not match']"
        label="Confirm Password"
        required
    ></v-text-field>


    <v-btn
        :disabled="!valid"
        color="blue"
        class="mr-4"
        @click="validate"
    >
      Sign Up
    </v-btn> &ensp;

    <v-btn
        color="blue"
        class="mr-4"
        @click="reset"
    >
      Reset Form
    </v-btn>

  </v-form>
</template>
<script>
export default {
  data: () => ({
    valid: true,
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    usernameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 30) || 'Name must be less than 30 characters',
    ],
    passwordRules: [
        //TODO: password rule
      v => !!v || 'Password is required',
      v => (v && v.length >= 6) || 'Password must have at least 6 characters',
      v => /(?=.*[A-Z])/.test(v) || 'Must have one uppercase character',
      v => /(?=.*\d)/.test(v) || 'Must have one number',
    ],
    // confirmPasswordRules: [
    //   v => !!v || 'Password is required',
    //   // v => (v === this.password) || 'Password must match',
    // ],

  }),

  methods: {
    validate () {
      const valid = this.$refs.form.validate()
      if(valid){
        //go to home page
      }
    },
    reset () {
      this.$refs.form.reset()
    },
  },
}
</script>
<!--<template>-->
<!--  <div>-->
<!--    <p>Sign Up</p>-->
<!--&lt;!&ndash;    <p>name</p>&ndash;&gt;-->
<!--&lt;!&ndash;    <input type="text" v-model="name">&ndash;&gt;-->
<!--    <v-text-field-->
<!--        label="Name"-->
<!--        :rules="rules"-->
<!--        hide-details="auto"-->
<!--    ></v-text-field>-->
<!--    <p>email</p>-->
<!--    <input type="text" v-model="email">-->
<!--    <p>username</p>-->
<!--    <input type="text" v-model="username">-->
<!--    <p>password</p>-->
<!--    <input type="text" v-model="password">-->
<!--    <p>Confirm password</p>-->
<!--    <input type="text" v-model="password2"><br/>-->
<!--    <v-btn to="/Signup">Create an account</v-btn>-->

<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  name: "Signup",-->
<!--  data() {-->
<!--    return {-->
<!--      name: '',-->
<!--      email: '',-->
<!--      username: '',-->
<!--      password: '',-->
<!--      password2: ''-->
<!--    }-->
<!--  // },-->
<!--  // methods: {-->
<!--  //   ConfirmPassword(){-->
<!--  //     if (this.password == this.password2){-->
<!--  //-->
<!--  //     }-->
<!--  //   }-->
<!--  }-->
<!--}-->
<!--</script>-->

<style scoped>

</style>