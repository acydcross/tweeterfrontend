<template>
    <div>
        <h5 @click="shouldShow = !shouldShow" class="hover-button">Edit</h5>
        <div v-if="shouldShow">
            <textarea v-model="tweetContent"></textarea>
            <h5 @click="editTweet()"class="hover-button">Submit</h5>
        </div>
    </div>
</template>

<script>
import axios from "axios"
import cookies from "vue-cookies"

    export default {
        name: "edit-tweet",
        data() {
            return {
                shouldShow: false,
                tweetContent: ""
            }
        },
        props: {
            tweetId: {
                type: Number,
                required: true
            }
        },
        methods: {
            editTweet: function() {
                axios.request({
                    url: "https://tweeterest.ml/api/tweets",
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                        "X-Api-Key": "fOytoHincX2T35xWW2Dmx6U6D21Q2Z2DedeWJPo9F3hLC"
                    },
                    data: {
                        loginToken: cookies.get("session"),
                        tweetId: this.tweetId,
                        content: this.tweetContent
                    }
                }).then((response) => {
                    console.log(response)
                    this.$emit("update-tweet", this.tweetContent)
                    this.shouldShow = false;
                }).catch((error) => {
                    console.log(error)
                })
            }
        },
    }
</script>

<style scoped>

</style>