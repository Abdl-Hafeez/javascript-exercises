const sumAll = function(int1, int2) {
   if((int1 < 0 || int2 < 0) || 
      (isNaN(int1) || isNaN(int2)) || 
      (!Number.isInteger(int1) || !Number.isInteger(int2))) {
      return "ERROR";
   }
   let start = int1 < int2 ? int1 : int2;
   let end = int1 > int2 ? int1 : int2;
   let sum = 0;
   for (let i = start; i <= end; i++) {
      sum += i;
   }
   return sum;
};

console.log(sumAll(10, [90, 1]));

// Do not edit below this line
module.exports = sumAll;
