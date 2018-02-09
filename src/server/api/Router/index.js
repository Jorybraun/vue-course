const express = require('express');
const analyzeTweetToneController = require('../controller/analyzeTweetToneController');

const apiRouter = express.Router();

apiRouter.param('query', analyzeTweetToneController.findTweetByParam);
apiRouter.get('/tweets/:query', analyzeTweetToneController.getAnalyzedTweets);

module.exports = apiRouter;