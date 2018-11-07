/* ES5 */
/* ES6 */
let multiply = function (a,b) {
  return a * b;
};

multiply = (a, b) => {
  return a * b;
};

multiply = (a, b) => a * b;

let double = number => number * 2;
let print = () => 'bj';

const numbers = [1, 2, 3];
const doubledNumbers = numbers.map((number) => {
  return number * 2;
});

doubledNumbers = numbers.map(number => 2 * number);