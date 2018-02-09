import VueRouter from 'vue-router';
import Vue from 'vue';
import TweetList from './pages/tweetList.vue';
import TweetDetail from './pages/tweetDetail.vue';

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/tweet/:id', component: TweetDetail, props: (route) => ({ id: route.params.id }) },
    { path: '/', alias: 'tweet', component: TweetList, props: true },
    
  ]
})

export default router;
