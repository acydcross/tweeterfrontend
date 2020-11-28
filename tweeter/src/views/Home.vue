<template>
  <div class="home">
    <h1>F Twetter Clone</h1>
    <login-page></login-page>
    <p>or</p>
    <signup-page></signup-page>
  </div>
</template>

<script>
import LoginPage from "./Login.vue";
import SignupPage from "./SignUp";

export default {
  name: "home-page",
  components: {
    LoginPage,
    SignupPage,
  }
};
</script>

<style lang="scss" scoped></style>
