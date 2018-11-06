/* ES5 for() */
var colors = ['red', 'blue', 'green'];

for (var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

/* ES6 forEach() */
colors.forEach(function(color) {
  console.log(color);
})

var numbers = [1,2,3,4,5];
var sum = 0;
function summation(number){
  sum += number;
}
numbers.forEach(summation);
console.log(sum);

/* In real world */
spamMails = [];
function deleteMail(){};
spamMails.forEach(function(spamMail) {
  deleteMail(spamMail);
});

/* 실습 1 */
function handlePosts() {
  var posts = [
    { id: 23, title: 'Daily JS News1' },
    { id: 52, title: 'Daily JS News2' },
    { id: 106, title: 'Daily JS News3' },
  ];

  posts.forEach(savePost);
}

/* 실습 2 */
var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 40, width: 40 },
];

var areas = [];
images.forEach(function(image){
  var rect = image.height * image.width;
  areas.push(rect);
});