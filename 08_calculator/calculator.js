const add = function(a,b) {
	 return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((total, current) => {
    return total + current;
  }, 0)
};

const multiply = function(array) {
  const product = array.reduce((product, current) => {
    return product * current;
  },1);
  return product;
};

const power = function(a, b) {
	return Math.pow(a,b);
};

const factorial = function(num) {
  let factorial = 1;
  if(num === 0) {
    return factorial;
  } 
  
  for(let i = 0; i < num; i++) {
    factorial = factorial * (num - i);
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
