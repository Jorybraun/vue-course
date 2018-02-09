<template>
    <div class="container">
        <div class="box">
            <timer-component title="Time Until We Know Vue"  finishTime="Thu Feb 09 2018 14:00:00 GMT-0500 (EST)"/>
        </div>
        <div class="box">
            <form class='control' @submit.prevent='getTweets'>
                <div class='flex-fieldset'>
                    <input type="text" class='input' v-model='query'> 
                    <button class='button is-primary is-outlined'> Get Tweets </button>
                </div>
            </form>
            <router-view :tweets='tweets'></router-view>
        </div>
    </div>
</template>
<script>
    import timerComponent from './components/timerComponent.vue';
    import cardComponent from './components/cardComponent.vue';
    import { mapActions } from 'vuex';

    export default {  
        components: {
            timerComponent,
            cardComponent
        },
        data() {
            return {
                query: '',
                tweets: [],
            }
        },
        methods: {
            getTweets() {
                // write method to get tweets
                fetch(`/api/tweets/${this.query}`)
                    .then((data) => data.json())
                    .then((data) => {
                        this.tweets.push(data.analyzedTweets[0])
                    });
            }
        }
    }
</script>

<style>

</style>
