const Twit = require('twit');
const buildTweets = require('../Models/twitter.model').buildTweets;

const { 
  consumerKey,
  consumerSecret, 
  accessToken, 
  accessTokenSecret  
} = require(`./config.js`).twitterApi;

var T = new Twit({
  consumer_key: consumerKey,
  consumer_secret: consumerSecret,
  access_token: accessToken,
  access_token_secret: accessTokenSecret,
  timeout_ms: 60*1000,  // optional HTTP request timeout to apply to all requests.
})

const getTweetsByParam = async (param = 'trump', qty = 1) => {
  try {
      const data = await T.get('search/tweets', { q: `${param} since:2011-07-11`, count: qty });
      return buildTweets(data)
  } catch (e) {
      console.error(e);
      throw new Error('getTweetsByParam has failed');
  }
};

module.exports = {
  getTweetsByParam: getTweetsByParam,
}