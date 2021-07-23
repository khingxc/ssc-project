<template>

  <div class="text-center" v-bind:style="{ backgroundColor: '#FDEDEC'}">
    <!--    <p>HOME</p>-->
    <v-img class="mx-auto" src="@/assets/myPOV.png" height="248px" width="351px"></v-img>

    <v-btn
        rounded
        color="pink"
        x-large
        v-on:click="submit_login"
    >
      Log In
    </v-btn><br>
    <br>
    <v-btn
        rounded
        color="yellow"
        x-large
        v-on:click="submit_signup"
    >
      Sign Up
    </v-btn>
  </div>
</template>

<script>

// import VueRouter from "vue-router";



// import Vue from "vue";

export default {

  data: () => ({
    valid: true,
    signup: '',
    login: '',
  }),

  name: "Home",

  methods: {
    async submit_signup() {
      console.log("go sign up");
      return this.$router.push({name: 'Signup'});
    },
    async submit_login() {
      console.log("go log in");
      return this.$router.push({name: 'Login'})
    },
  },
}

</script>

<style scoped>
</style>