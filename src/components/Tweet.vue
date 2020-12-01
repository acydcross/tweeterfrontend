<template>
    <div class="tweet-container">
        <h3>{{ tweetObject.username }}</h3>
        <p>{{ tweetObject.content }}</p>
        <h5>{{ tweetObject.createdAt }}</h5>
    </div>
</template>

<script>
    export default {
        name: "page-tweet",
        props: {
            tweetObject: {
                type: Oject,
                required: true
            }
        },
    }
</script>

<style scoped>

</style>