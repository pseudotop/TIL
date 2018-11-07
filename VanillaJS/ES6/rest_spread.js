/* Rest 나머지 */
const addNumbers = (a, b) => {
  const numbers = [a, b];
  return numbers.reduce((acc, number) => {
    return acc += number;
  }, 0);
};

const addAll = (...numbers) => {
  return numbers.reduce((acc, number) => {
    return acc += number;
  }, 0);
}

/* Spread 펼치다 */
let defaultColors = ['red','green','blue'];
let myColors = ['black', 'navy', 'gold'];
let iphoneColors = ['rose gold', 'space gray'];
let palette = defaultColors.concat(myColors);
palette = ['brown',...defaultColors, ...myColors, 'hot pink',...iphoneColors];

/* 실습 */
const showShoppingList = (...items) => {
  // items = ['a', 'b']; items.indexOf('c') => return -1
  if(items.indexOf('milk' < 0)) {
    return ['milk', ...items];
  }
};

/* 실제 개발에서는? */
let MathLibrary = {
  calculateProduct(a, b) {
    return a * b;
  }
}

let MathLibrary = {
  multiply(a, b) {
    return a * b;
  },
  calculateProduct(...args){ // Rest, calculateProduct([10,20])
    console.log('Please use method "multiply" instead');
    return this.multiply(...args); // Spread, this.multiply(10,20)
  },
};

MathLibrary.calculateProduct(10, 10);

/* 실습 */
let join = (array1, array2) => {
  return array1.concat(array2);
};
let join = (...arr1, ...arr2) => {
  return [...arr1, ...arr2];
};

let unshift = (array, a, b, c, d, e) => {
  return [a,b,c,d,e].concat(array);
};
let unshift = (...arr2, ...arr1) => {
  return [...arr1, ...arr2];
};

