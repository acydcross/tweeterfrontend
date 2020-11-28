<template>
    <div>
        <h4>{{ tweetStatus }}</h4>
        <textarea v-model="tweetContent"></textarea>
        <h2 class="hover-button" @click="postTweet()"></h2>
    </div>
</template>

<script>
import axios from "axios";
import cookies from "cookies";
    export default {
        name: "tweet-form",
        data() {
            return {
                tweetContent: "",
                tweetStatus: "Tweet!"
            }
        },
        methods: {
            postTweet: function() {
                this.tweetStatus = "Tweeting!"
                axios.request({
                    url: "https://tweeterest.ml/api/tweets",
                    headers: {
                        "Content-Type": "application/json",
                        "X-Api-Key": "fOytoHincX2T35xWW2Dmx6U6D21Q2Z2DedeWJPo9F3hLC"
                    },
                    method: "POST",
                    data: {
                        loginToken: cookies.get('session'),
                        content: this.tweetContent
                    }
                }).then((response) => {
                    console.log(response)
                    this.tweetStatus = "Tweeted!"
                }).catch((error) => {
                    console.log(error)
                    this.tweetStatus = "Failed to Tweet!"
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>