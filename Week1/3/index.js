/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {
    var s="";
   minutes=minutes+interval;
   if((minutes/60)>=1){
       hours=hours+Math.floor(minutes/60);
       if((hours/24)>=1){
           hours=hours-(Math.floor(hours/24)*24);
       }
       minutes=minutes-(Math.floor(minutes/60)*60);
   }
    if(hours<10){
        s=s+"0";
    }
    s=s+hours;
    s=s+":";
    if(minutes<10){
        s=s+"0";
    }
    s=s+minutes;
    return s;
};

