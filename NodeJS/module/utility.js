console.log('1');
module.exports = function(numbersToSum=[]) {
  let sum = 0;
  numbersToSum.forEach(number => sum += number);
  return sum;
};
console.log('2');
