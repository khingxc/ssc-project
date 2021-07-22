<template>
  <v-app>
<!--            <Login func="LOGIN"/>-->
<!--        <Signup func="SIGNUP"/>-->
<!--    <Home func="HOME"/>-->
<!--    <Diary func="DIARY"/>-->
<!--    <Questions func="FUNC"/>-->
<!--        <Calendar func="CALENDAR"/>-->
    <SelfChecklist func="SELFCHECKLIST"/>

  </v-app>
</template>

<script>
// import Login from "./components/Login";
// import Diary from "./components/diary";
// import Questions from "./components/questions";
// import Signup from "./components/Signup";
// import Home from "./components/Home";
// import diary from "./components/diary";
// import questions from "./components/questions";
import SelfChecklist from "./components/SelfChecklist";
// import Calendar from "./components/Calendar";
export default {
  name: 'App',
  components: {
    // Questions,
    // Diary,
    SelfChecklist,
    // Calendar,
    // Home
    // Login,
    // Signup
    // HelloWorld
  }
}
</script>

