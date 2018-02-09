<template>
    <div>
        <card-component :tweet="tweet"></card-component>
        <bar-chart-component :tones="tones"></bar-chart-component>
    </div>
</template>

<script>
    import cardComponent from '../components/cardComponent.vue';
    import barChartComponent from '../components/barChartComponent.vue';

    export default {
        name: 'tweetPage',
        components: { cardComponent, barChartComponent },
        props: ['tweets', 'id'],
        computed: {
            tweet() {
                return this.tweets[this.id];
            },
            tones() {
                return this.tweet.tones.document_tone.tone_categories[0].tones
            }
        },
        created() {
            if(this.tweets.length < 1) {
                this.$router.replace('/');
            }
        }
    }
</script>


