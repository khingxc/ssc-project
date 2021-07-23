<template>
  <v-app>
<!--    <Login func="LOGIN"/>-->
<!--            <Signup func="SIGNUP"/>-->
<!--        <Diary func="DIARY"/>-->
            <Calendar func="CALENDAR"/>
<!--        <SelfChecklist func="SELFCHECKLIST"/>-->
<!--        <Questions func="QUESTIONS"/>-->


    <!--      <h2>App</h2>-->
<!--    <v-main>-->
<!--      <router-view />-->
<!--    </v-main>-->
  </v-app>
</template>

<script>

// import Login from "./components/Login";
// import Signup from "./components/Signup";
// import Diary from "./components/diary";
import Calendar from "./components/Calendar";
// import SelfChecklist from "./components/SelfChecklist";
// import Questions from "./components/questions";




export default {
  name: 'App',
  components: {
    // Login,
    // Signup,
    // Diary,
    Calendar,
    // SelfChecklist,
    // Questions,


  }
}
</script>
