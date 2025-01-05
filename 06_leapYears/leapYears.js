const leapYears = function(year) {
    if (year % 4 === 0) {
        if (year % 100 !== 0) {
            return true;
        } else if (year % 100 === 0 && year % 400 === 0) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
};
console.log(leapYears(2000));
console.log(leapYears(2004));
console.log(leapYears(2024));
console.log(leapYears(1800));
console.log(leapYears(1900));
console.log(leapYears(1985));

// Do not edit below this line
module.exports = leapYears;
