<template>
  <v-app>
<!--            <Login func="LOGIN"/>-->
<!--        <Signup func="SIGNUP"/>-->
<!--    <Home func="HOME"/>-->
        <Calendar func="CALENDAR"/>
<!--    <SelfChecklist func="SELFCHECKLIST"/>-->

  </v-app>
</template>

<script>
// import Login from "./components/Login";
// import Signup from "./components/Signup";
// import Home from "./components/Home";
// import SelfChecklist from "./components/SelfChecklist";
import Calendar from "./components/Calendar";
export default {
  name: 'App',
  components: {
    // SelfChecklist,
    Calendar,
    // Home
    // Login,
    // Signup
    // HelloWorld
  }
}
</script>

