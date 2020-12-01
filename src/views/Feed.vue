<template>
    <div>
        <h1>Feed Page</h1>
        <tweet-form></tweet-form>
        <h3 class="hover-button" @click="getTweets">Refresh Tweets</h3>
        <div v-for="tweet in tweets" :key="tweet.tweetId">
            <tweet-card :tweetObject="tweet"> <tweet-card>
        </div>
    </div>
</template>

<script>
import axios from "axios"
import TweetForm from "../components/TweetForm.vue"
import TweetCard from "../components/Tweet.vue"
    export default {
        name: "feed-page",
        data() {
            return {
                tweets: []
            }
        },
        components: {
            TweetForm,
            TweetCard,
        },
        mounted: function() {
            this.getTweets();
        }
        methods: {
            getTweets: function() {
                axios.request({
                    url: "https://tweeterest.ml/api/tweets",
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "X-Api-Key": "fOytoHincX2T35xWW2Dmx6U6D21Q2Z2DedeWJPo9F3hLC"
                    },
                }).then((response) => {
                    console.log(response)
                    this.tweets = response.data
                }).catch((error) => {
                    console.log(error)
                });
            }
        },
    }
</script>

<style scoped>

</style>