<template>

  <v-form
      ref="form"
      v-model="valid"
      lazy-validation
  >

    <v-img class="mx-auto" src="@/assets/myPOV.png" height="248px" width="351px"></v-img>

    <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
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
        color="#D2B4DE"
        class="mr-4"
        v-on:click="submit"
        :style="{left: '45%', transform:'translateX(-50%)'}"
    >
      Log In
    </v-btn>

    <v-btn
        color="#D2B4DE"
        class="mx-auto"
        v-on:click="submit_signup"
        :style="{left: '50%', transform:'translateX(-50%)'}"
    >
      Sign Up
    </v-btn>
  </v-form>
</template>

<script>

import Vue from "vue";

export default {
  data: () => ({
    valid: true,
    email: '',
    password: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    passwordRules: [v => !!v || 'Password is required'],
  }),

  methods: {
    async submit_signup () {
      await this.$router.push({name: 'Signup'});
    },
    async submit () {
      if (this.$refs.form.validate()){
        let formData = new FormData();
        formData.append("email", this.email);
        formData.append("password", this.password);
        let response = Vue.axios.post("/api/login", formData);

        // if (response.data.message == )
        if (response.data.success) {
          await this.$router.push('/diary');
        }
        else{
          await this.$router.go('/login');
        }
      }
    },
    reset() {
      this.$refs.form.reset();
    }
  }
};
</script>
