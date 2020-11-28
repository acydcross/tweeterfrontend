import Vue from "vue";
import VueRouter from "vue-router";
import SignupPage from "../views/SignUp.vue";
import LoginPage from "../views/Login.vue";
import HomePage from "../views/Home.vue";
import UserHome from "../views/UserHome.vue";
import UserTweets from "../components/UserTweets.vue";
import ProfilesPage from "../views/Profiles.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/signup",
    name: "signup-page",
    component: SignupPage
  },
  {
    path: "/",
    name: "login-page",
    component: LoginPage
  },
  {
    path: "/home",
    name: "home-page",
    component: HomePage
  },
  {
    path: "/tweets",
    name: "user-tweets",
    component: UserTweets
  },
  {
    path: "/user",
    name: "user-home",
    component: UserHome
  },
  {
    path: "/profiles",
    name: "profiles-page",
    component: ProfilesPage
  },
  
];

const router = new VueRouter({
  routes
});

export default router;
