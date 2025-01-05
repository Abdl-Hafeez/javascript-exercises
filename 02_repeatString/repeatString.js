const repeatString = function(string, num) {
    let str = '';
    if(num >= 0) {
        for(let i = 0; i < num; i++) {
            str += string;
        }
        return str;
    } else {
        return "ERROR";
    }
}
    
console.log(repeatString('YEAH!', -2));

// Do not edit below this line
module.exports = repeatString;


