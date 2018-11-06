/* ES5 map() */
var numbers = [1,2,3];
var dNumbers = [];

for (var i = 0; i < numbers.length; i++) {
  dNumbers.push(numbers[i] * 2);
}

/* ES6 map */
var tNumbers = numbers.map(function(number){
  return number*3;
});

/* 실제 사용 */
var posts = [
  { title: 'Happy', content: 'Hacking' },
  { title: 'Multi', content: 'Campus' },
];

var frontElement = posts.map(function(post) {
  return `<h1>${post.title}</h1><p>${post.content}</p>`;
});

/* 실습 1 */
var images = [
  { h: '10px', w: '20px'},
  { h: '30px', w: '21px'},
  { h: '40px', w: '30px'},
];
var heights = images.map(function(image) {
  return image.h;
});

/* 실습 2 */
var trips = [
  { dist: 34, time: 10 },
  { dist: 3224, time: 110 },
  { dist: 314, time: 101 },
];
var speeds = trips.map(function(trip){
  return trip.dist/trip.time;
});

/* 실습 3 */
function pluck (arr, prop) {
  var temp = arr.map(function(el){
    return el[prop];
  });
  console.log(temp);
}
var paints = [
  { color: 'red', price: 100 },
  { color: 'white', price: 110 },
  { color: 'navy', price: 120 },
  { color: 'brown', price: 130 },
]
// pluck(paints, 'color') => ['red', 'white', 'navy', 'brown']
// pluck(paints, 'price') => [100, 110, 120, 130]
pluck(paints, 'color');
pluck(paints, 'price');