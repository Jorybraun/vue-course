<template>
    <div class="list">
        <router-link v-for="(tweet, key) in tweets" :key="key" :to="{ path: `tweet/${key}`, params: { id: key } }">
            <card-component :tweet="tweet"/>
        </router-link>
    </div>
</template>

<script>
    import cardComponent from '../components/cardComponent.vue';

    export default {
        props: ['tweets'],
        components: {
            cardComponent
        }
    }
</script>





