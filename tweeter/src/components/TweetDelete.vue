<template>
    <div>
        <h5 @click="deleteTweet" class="hover-button">Delete</h5>
    </div>
</template>

<script>
import axios from "axios";
import cookies from "cookies";
    export default {
        name: "tweet-delete",
        props: {
            tweetId: {
                type: Number,
                required: true
            }
        },
        methods: {
            deleteTweet: function() {
                axios.request({
                    url: "https://tweeterest.ml/api/tweets",
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        "X-Api-Key": "fOytoHincX2T35xWW2Dmx6U6D21Q2Z2DedeWJPo9F3hLC"
                    },
                    data: {
                        loginToken: cookies.get("session"),
                        tweetId: this.tweetId
                    }
                }).then((response) => {
                    console.log(response)
                }).catch((error) => {
                    console.log(error)
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>