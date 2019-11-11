export const formatHtml = (tokenData) => {
    //replace twitter html with client-rendered embed
    const tweets = tokenData.filter((token) => token.subType === 'twitterEmbed');
    tweets.forEach((tweet) => {
        const ogTweet = document.getElementById(tweet.tokenGUID);
        const newTweet = document.createElement('div');
        newTweet.classList.add('tweet-container');
        newTweet.innerHTML = tweet.html;
        const parent = ogTweet.parentNode;
        parent.replaceChild(newTweet, ogTweet);
    });
};
