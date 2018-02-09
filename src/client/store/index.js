import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
      tweets: [],
    },
    mutations: {
      addTweet (state, tweet) {
        state.tweets.push(tweet)
      }
    }, 
    actions: {
        getTweets ({ commit }, query) {
            
        }
    }
  })

  export default store;