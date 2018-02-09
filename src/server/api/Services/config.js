require('dotenv').config()

module.exports = { 
    twitterApi: {
        consumerKey: process.env.TWITTER_CONSUMER_KEY,
        consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
        accessToken: process.env.TWITTER_ACCESS_TOKEN,
        accessTokenSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET
    },
    watsonApi: {
        userName: process.env.WATSON_USER_NAME,
        password: process.env.WATSON_PASSWORD
    }
}


