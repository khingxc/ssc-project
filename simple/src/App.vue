<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/myPOV.png">
<!--    <HelloWorld msg="myPOV"/>-->
    <Dashboard func="LOGIN"/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Dashboard from "./components/Dashboard";

export default {
  name: 'App',
  components: {
    Dashboard
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
