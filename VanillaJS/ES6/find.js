/* ES5 for() */
var users = [
  { name: 'Tony Stark' },
  { name: 'Steve Rogers' },
  { name: 'Thor' },
]
var user;

for (var i = 0; i < users.length; i++) {
  if (users[i].name === 'Thor') {
    user = users[i];
    break; // 찾으면 끝냄
  }
}

/* ES6 find() */
var user = users.find(function(user){
  return user.name === 'Tony Stark';
});

/* 더 복잡한 코드 */
function Car(model) {
  this.model = model;
};

var cars = [
  new Car('Mercedes'),
  new Car('Ferrari'),
  new Car('BMW'),
  new Car('HK'),
];

var car = cars.find(function(car){
  return car.model === 'Ferrari';
});

/* 실제로는? */
// http://myblog.com/articles/1
const articles = [
  { id: 1, title: 'Motto', content: 'HappyHacking' },
  { id: 2, title: 'My personal info', content: 'It\'s secret' },
  { id: 3, title: 'Motto2', content: 'HappyHacking2' },
  { id: 4, title: 'Motto3', content: 'HappyHacking3' },
]

/* 실습 1 */
var users = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true },
];

var admin;
admin = users.find(function(user){
  return user.admin;// === true;
});
/* 실습 2 */
// 잔액이 12인 계좌를 account에 저장하자
var accounts = [
  { balance: -10 }, 
  { balance: 12 }, 
  { balance: 0 }, 
];

var account;
account = accounts.find(function(account){
  return account.balance === 12;
});
/* 실습 3 */
var ladders = [
  { id: 1, height: 20 },
  { id: 3, height: 25 },
];

function findWhere(array, standard) {
  if (array.length === 0) return console.log('array is not exist');
  const result = array.find(function(element){
    for (key in Object.keys(array[0])){
      for (stdkey in Object.keys(standard)){
        return (key === stdkey && element.key === standard.stdkey);
      }
    };
  });
  console.log(result);
};

findWhere(ladders, { height: 20 });