const reverseString = function(word) {
    const reversedString = word.split('').reverse().join('');
    return reversedString;
};
console.log(reverseString("word"));

// Do not edit below this line
module.exports = reverseString;
