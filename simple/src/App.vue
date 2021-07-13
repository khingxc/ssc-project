<template>
  <div id="app" :style="myStyle">
    <img alt="Vue logo" src="./assets/myPOV.png">
<!--        <Login func="LOGIN"/>-->
    <Signup func="SIGNUP"/>
<!--        <Home finc="HOME"/>-->
  </div>
</template>

<script>
// import Login from "./components/Login";
import Signup from "./components/Signup";
// import Home from "./components/Home";
export default {
  name: 'App',
  components: {
    // Home
    // Login,
    Signup
    // HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>