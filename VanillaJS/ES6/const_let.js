/* ES5 */
var name = '김병준';
var title = 'CTO';
var workHour = '9 am to 6 pm';

name = 'ㅇㅇㅇ';
title = 'Senior';

function count(targetString) {
  var chars = ['a', 'e', 'i', 'o', 'u'];
  var number = 0;

  for (var i = 0; i < targetString.length; i++) {
    if (characters.includes(targetString[i])) {
      number++;
    }
  }
  return number;
}

/* ES6 */
const name = '김병준';
const title = 'CTO';
let workHour = '8 hours/day';

name = 'ㅇㅇㅇ'; // error;
function count(targetString) {
  const chars = ['a', 'e', 'i', 'o', 'u'];
  const number = targetString.split('').reduce(function(acc, char){
    if (chars.includes(char)){
      acc++;
    }
    return acc;
  }, 0);
  return number;
};

// Facebook Profile management
// with var
let name = 'Your Name';
let age = 100;
const dateOfBirth = '0101';