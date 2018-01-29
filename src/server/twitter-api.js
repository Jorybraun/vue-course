var Twit = require('twit');

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

class Tweet {
    constructor(data) {
        this.message = data.text;
        this.userName = data.user.name;
        this.avatar = data.user.profile_image_url;
        this.likes = data.favourite_count;
        this.retweets = data.retweet_count;
        this.published = data.created_at;
    }
}

const buildTweets = (data) => { 
    return data.statuses.map((tweet) => new Tweet(tweet));
};

const getTweets = (param = 'trump') => {
  T.get('search/tweets', { q: `${param} since:2011-07-11`, count: 1 }, (err, data, response) => buildTweets(data));
};

module.export = {
  getTweets,
}