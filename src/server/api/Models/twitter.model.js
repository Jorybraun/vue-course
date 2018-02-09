class Tweet {
    constructor(data) {
        this.message = data.text;
        this.userName = data.user.name;
        this.avatar = data.user.profile_image_url;
        this.likes = data.favourite_count;
        this.retweets = data.retweet_count;
        this.published = data.created_at;
        this.tones = []
    }
}

module.exports = {
    buildTweets: ({ data }) => { 
        return data.statuses.map((tweet) => new Tweet(tweet));
    }
}