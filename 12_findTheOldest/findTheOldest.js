const findTheOldest = function(array) {
    const sorted = array.sort((a, b) => {
        if(a.yearOfBirth && a.yearOfDeath && b.yearOfBirth && b.yearOfDeath) {
            if(a.yearOfDeath - a.yearOfBirth > b.yearOfDeath - b.yearOfBirth) return 1;
            if(a.yearOfDeath - a.yearOfBirth < b.yearOfDeath - b.yearOfBirth) return -1;
            if(a.yearOfDeath - a.yearOfDeath == b.yearOfDeath - b.yearOfBirth) return 0;
        } else if (a.yearOfDeath === undefined) {
            if((new Date().getFullYear()) - a.yearOfBirth > b.yearOfDeath - b.yearOfBirth) return 1;
            if((new Date().getFullYear()) - a.yearOfBirth < b.yearOfDeath - b.yearOfBirth) return -1;
            if((new Date().getFullYear()) - a.yearOfDeath == b.yearOfDeath - b.yearOfBirth) return 0;
        } else if (b.yearOfDeath === undefined) {
            if(a.yearOfDeath - a.yearOfBirth > (new Date().getFullYear()) - b.yearOfBirth) return 1;
            if(a.yearOfDeath - a.yearOfBirth < (new Date().getFullYear()) - b.yearOfBirth) return -1;
            if(a.yearOfDeath - a.yearOfDeath == (new Date().getFullYear()) - b.yearOfBirth) return 0;
        } 
    });
    return sorted[sorted.length -1];
};

// Do not edit below this line
module.exports = findTheOldest;
