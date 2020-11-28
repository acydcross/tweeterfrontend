<template>
  <div class="profile">
    <user-profile />
  </div>
</template>

<script>
import UserProfile from "../components/UserProfile.vue";

export default {
  name: "profiles-page",
  components: {
    UserProfile
  }
};
</script>

<style lang="scss" scoped></style>
