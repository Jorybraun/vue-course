var ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');
var { userName, password } = require('./config.js').watsonApi;

var tone_analyzer = new ToneAnalyzerV3({
  username: `${userName}`,
  password: `${password}`,
  version_date: '2016-05-19'
});

const toneAnlyzer = (tweet) => {
  return new Promise((resolve, reject) => {
    tone_analyzer.tone({
        tone_input: `${tweet.message}`,
        content_type: 'text/plain'
    }, (err, tone) => {
        if (err) {reject(tone)}
        tweet.tones = tone;
        resolve(tweet);
    })
  })
}

const analyzeTweets = async (tweets = []) => {
    try {
      return await Promise.all(tweets.map((tweet) => toneAnlyzer(tweet)))
    } catch (err) {
        throw new Error('analyze Tweets Failed')
    }
} 

module.exports = {
  toneAnlyzer: toneAnlyzer,
  analyzeTweets: analyzeTweets
}