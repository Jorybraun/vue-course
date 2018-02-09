const TwitterService = require('../Services/twitter.service.js');
const watsonService = require('../Services/watson.service.js');

module.exports = {
    getAnalyzedTweets: async (req, res) => {
        try {
            const analyzedTweets = await watsonService.analyzeTweets(req.tweetsFromParam);
            console.log(analyzedTweets);
            res.json({ analyzedTweets });
        } catch(e) {
            next(new Error('get Analyzed Tweets Failed'));
        }
    },
    findTweetByParam: async (req, res, next, param) => {
        try {
            const tweets = await TwitterService.getTweetsByParam(param);
            req.tweetsFromParam = tweets;
            next();
        }
        catch (e) {
            console.log(e);
            next(new Error('Tweet Not Found Error'));
        }
    },
}