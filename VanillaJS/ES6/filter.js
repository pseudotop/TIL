/* ES5 filter() */
var products = [
  { name: 'banana', type: 'fruit' },
  { name: 'carrot', type: 'vegetable' },
  { name: 'apple', type: 'fruit' },
  { name: 'eggplant', type: 'vegetable' },
  { name: 'tomato', type: 'fruit' },
];

var fruits = [];
for (var i = 0; i < products.length; i++){
  if (products[i].type === 'fruit') {
    fruits.push(products[i]);
  }
}
/* ES6 map */
var vegetables = products.filter(function(product) {
  return product.type === 'vegetable';
});

/* 실제 사용 */

/* 실습 1 */
var numbers = [1,3,4,123,651,222,2,31,23,111,23];
var bigNumbers = numbers.filter(function(number) {
  return number>50;
}); // 50 초과

/* 실습 2 */
var users = [
  {id: 1, admin: true},
  {id: 2, admin: false},
  {id: 3, admin: true},
  {id: 4, admin: true},
  {id: 5, admin: false},
]
var admins = users.filter(user => user.admin);// admin 만
var admins = users.filter(function(user) {
  return user.admin;// === true;
});// admin 만

/* 실습 3 */
var numbers = [10, 20, 30];

function reject(arr, iterFunc) {
  return arr.filter((el) => {
    var isExist = false;
    arr.filter(iterFunc).forEach(el2 => {
      if (el === el2) isExist = true;
    });
    return !isExist;
  });
};

var lessThan15 = reject(numbers, function(number) {
  return number > 15;
});

console.log(lessThan15); // 10