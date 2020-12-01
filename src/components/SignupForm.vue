<template>
  <div>
    <p>Email</p>
    <input type="text" name="" id="email-input" v-model="email" />
    <p>Username</p>
    <input type="text" name="" id="username-input" v-model="username" />
    <p>Password</p>
    <input type="password" name="" id="password-input" v-model="password" />
    <p>Bio</p>
    <textarea id="bio-input" v-model="bio"></textarea>
    <p>Birthday</p>
    <input type="text" name="" id="birthday-input" v-model="birthday" />
    <h2 @click="signupUser">Sign Up</h2>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  name: "sigup-form",
  data() {
    return {
      email: "",
      username: "",
      password: "",
      bio: "",
      birthday: ""
    };
  },
  methods: {
    signupUser: function() {
      axios
        .request({
          method: "POST",
          url: "https://tweeterest.ml/api/users",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "fOytoHincX2T35xWW2Dmx6U6D21Q2Z2DedeWJPo9F3hLC"
          },
          data: {
            email: this.email,
            username: this.username,
            password: this.password,
            bio: this.bio,
            birthdate: this.birthdate
          }
        })
        .then(response => {
          // WRITE LOGIC TO ENSURE TOKEN WAS SENT
          console.log(response)
          cookies.set("session", response.data.loginToken)
          this.$router.push("/user")
        }) // SEND TO HOME PAGE
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="scss" scoped></style>
