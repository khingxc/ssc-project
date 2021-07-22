<template>
  <div class="text-center" v-bind:style="{ backgroundColor: '#FDEDEC'}">
<!--    <p>HOME</p>-->
    <v-img class="mx-auto" src="@/assets/myPOV.png" height="248px" width="351px"></v-img>
    <v-btn
        rounded
        color="blue"
        x-large
    >
    Log In
    </v-btn><br>
    <br>
    <v-btn
        rounded
        color="blue"
        x-large
    >
      Sign Up
    </v-btn>
  </div>
</template>

<script>

export default {
  name: "Home"
}
</script>

<style scoped>

</style>