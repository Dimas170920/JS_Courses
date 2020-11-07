/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
    var tweetArr = tweet.split([" "])
var filterTweets = tweetArr.filter(isHashtag);
function isHashtag(element){
    if(element[0]==="#"){
        return true;
    }else{
        return false;
    }

}
    var filterTweetsNew = filterTweets.map(x => x.slice(1));
return filterTweetsNew;
};
