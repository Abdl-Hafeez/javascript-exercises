const convertToCelsius = function(farenheit) {
  const celcius = (farenheit - 32) * (5 / 9);
  return Math.round(celcius * 10) / 10;
};

const convertToFahrenheit = function(celcius) {
  farenheit = (9 / 5) * celcius + 32;
  return Math.round(farenheit * 10) / 10;
};

console.log(convertToCelsius(32));
console.log(convertToFahrenheit(0));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
