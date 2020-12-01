<template>
  <div>
    <tweet-form></tweet-form>
    <h3 class="hover-button" @click="getTweets">Refresh Tweets</h3>
    <div v-for="tweet in tweets" :key="tweet.tweetId">
      <user-tweets :tweetObject="tweet" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import UserTweets from "../components/UserTweets.vue";
import TweetForm from "../components/TweetForm.vue";

export default {
  name: "user-home",
  data() {
    return {
      tweets: []
    }
  },
  components: {
    UserTweets,
    TweetForm,
  },
  mounted: function() {
    this.getTweets();
  },
  methods: {
    getTweets: function() {
      axios.request({
        url: "https://tweeterest.ml/api/tweets",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-Api-Key": "fOytoHincX2T35xWW2Dmx6U6D21Q2Z2DedeWJPo9F3hLC"
        }
      }).then((response) => {
        console.log(response)
        this.tweets = response.data
      }).catch((error) => {
        console.log(error)
      })
    }
  }
}

</script>

<style lang="scss" scoped></style>
