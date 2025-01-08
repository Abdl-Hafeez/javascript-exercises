const palindromes = function (string) {
    const original = string.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversed = original.split('').reverse().join('');
    if(original === reversed) {
        return true;
    } 
    return false;
};
// console.log('race car'.trim(''));
console.log(palindromes('Racecar'));


// Do not edit below this line
module.exports = palindromes;
 