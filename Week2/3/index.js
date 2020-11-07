// Телефонная книга
var phoneBook = {};
/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {
var arr = command.split(' ');
if(arr[0]==='ADD'){
arr.shift();
    return addContact(arr);
}
if(arr[0]==='REMOVE_PHONE'){
    arr.shift();
    return removeNumber(arr[0]);
}
if(arr[0]==='SHOW'){
   return  showNumbers();
}



};
function addContact(arr){

    if( Object.keys(phoneBook).indexOf(arr[0])!==-1){
        var a = arr[1].split(',');
        for(let i=0; i<a.length; i++){
            phoneBook[arr[0]].numbers.push(a[i]);
        }
    }else{
        phoneBook[arr[0]]={
                name: arr[0],
                numbers: arr[1].split(',')
            }

    }

    return 0;
}


function removeNumber(number) {
    var keys = Object.keys(phoneBook);
    for(let i=0; i<keys.length; i++){

        if(phoneBook[keys[i]].numbers.indexOf(number)>=0){
            phoneBook[keys[i]].numbers.splice(phoneBook[keys[i]].numbers.indexOf(number),1);
            return true;
        }

    }
    return false;

}
function showNumbers(){
    var outPut = [];
    var keys = Object.keys(phoneBook);
    keys = keys.sort();
    for(let i=0; i<keys.length; i++){
        if(phoneBook[keys[i]].numbers.length!==0) {
            outPut[i] = phoneBook[keys[i]].name + ': ';
            for(let j=0;j<phoneBook[keys[i]].numbers.length;j++){
                if(phoneBook[keys[i]].numbers.length!==0) {
                    outPut[i] += phoneBook[keys[i]].numbers[j];
                    if (j !== phoneBook[keys[i]].numbers.length - 1) {
                        outPut[i] += ', ';
                    }
                }
            }
        }
    }
    outPut = outPut.filter(word => word.length > 0);

    return outPut;
}


