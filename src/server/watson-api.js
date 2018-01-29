var ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');
var { userName, password } = require('./config.js').watsonApi;

var tone_analyzer = new ToneAnalyzerV3({
  username: `${userName}`,
  password: `${password}`,
  version_date: '2016-05-19'
});

const toneAnlyzer = (string) => {
  return tone_analyzer.tone(
    {
      tone_input: `${string}`,
      content_type: 'text/plain'
    },
    (err, tone) => {
      if (err) {
        console.log(err);
      } else {
        const tone = JSON.stringify(tone, null, 2);
        console.log(tone);
        return tone;
      }
    }
  );
}

module.exports = {
  toneAnlyzer: toneAnlyzer
}