/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {
    if(hashtags.length<1){
        return "";
    }
    var lowerHashtags = hashtags.map(function (x){
        return x.toLowerCase();
    });
    for(var i=0;i<lowerHashtags.length;i++) {
        var index = lowerHashtags.indexOf(lowerHashtags[i], (i + 1));
        if (index > -1) {
            lowerHashtags.splice(index, 1);
            i--;
        }
    }
    return lowerHashtags.join(", ")
};