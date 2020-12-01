<template>
  <div>
    <p>Email</p>
    <input type="text" id="email-input" v-model="email" />
    <p>Password</p>
    <input type="password" id="password-input" v-model="password" />
    <h2 @click="loginUser">Login</h2>
    <h3>{{ loginStatus }}</h3>
    <p>or</p>
    <router-link to="/signup">Create New Account</router-link>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  data() {
    return {
      email: "",
      password: "",
      loginStatus: ""
    };
  },
  methods: {
    loginUser: function() {
      this.loginStatus = "Loading";
      axios
        .request({
          method: "POST",
          url: "https://tweeterest.ml/api/login",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "fOytoHincX2T35xWW2Dmx6U6D21Q2Z2DedeWJPo9F3hLC"
          },
          data: {
            email: this.email,
            password: this.password
          }
        })
        .then(response => {
          // Check if login token sent
          console.log(response);
          this.loginStatus = "Success";
          cookies.set("session", response.data.loginToken);
          this.$router.push("/user");
        })
        .catch(error => {
          console.log(error);
          this.loginStatus = "Error";
        });
    }
  }
};
</script>

<style lang="scss" scoped></style>
