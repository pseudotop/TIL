/* ES5 for() */
var numbers = [10, 20, 30];
var sum = 0;

for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
/* ES6 reduce() */
var result = numbers.reduce(function (acc, number) {
  return acc + number;
}, 0); // acc = accumulate

/* map vs reduce */
var myColors = [{
    color: 'black'
  },
  {
    color: 'red'
  },
  {
    color: 'gold'
  },
];

//var onlyColors = ['black', 'red', 'gold'];
var onlyColors = myColors.map(myColor => myColor.color);
var onlyColorsReduce = myColors.reduce(function (acc, myColor) {
  acc.push(myColor.color);
  return acc;
}, []);

/* 실제로는? */
// 올바르게 닫힌 괄호 "()"", 올바르지 않은 괄호 ")(())" "(()()))"
function isGoodParens(string) {
  var braces = string.split('');
  var result = braces.reduce(function (acc, brace) {
    //console.log(acc);
    if (acc === null) return acc;
    if (brace === ')') {
      if (acc.pop() !== '(') {
        return null;
      }
      return acc;
    }
    acc.push(brace);
    return acc;
  }, []);
  return result !== null;
};

function isGoodParens(string) {
  var array = string.split('');
  return !array.reduce(function (acc, char) {
    if (acc < 0) {
      return acc;
    } else if (char === '(') {
      ++acc;
    } else {
      --acc;
    }
  })
}

isGoodParens('((((()))))'); // true
isGoodParens(')(((()()))'); // false
isGoodParens('(()))'); // false
/* 실습 1 */
var trips = [{
    distance: 34
  },
  {
    distance: 10
  },
  {
    distance: 100
  },
  {
    distance: 343
  },
];

var totalDistance = trips.reduce(function (acc, trip) {
  return acc + trip.distance;
}, 0);

/* 실습 2 */
var desks = [{
    type: 'Sitting'
  },
  {
    type: 'Standing'
  },
  {
    type: 'Sitting'
  },
  {
    type: 'Sitting'
  },
  {
    type: 'Standing'
  },
];

var deskTypes = desks.reduce(function (acc, trip) {
  var keyTrip = Object.keys(trip)[0];
  var keyAcc = trip[keyTrip];
  if (!acc[keyAcc]) acc[keyAcc] = 0;
  acc[keyAcc] += 1;
  return acc;
}, {}); // { sitting: 3, standing: 2 }

/* 실습 3 */
function unique(array) {
  // Fill me up
  var temp = array.reduce(function (acc, el) {
    if (!acc[el]) acc[el] = 1;
    return acc;
  }, {});
  return Object.keys(temp).map(function (el) {
    return parseInt(el);
  });
};

function unique(array) {
  array.reduce(function (acc, element) {
    if (
      !acc.find(function (uniqElement) {
        return element === uniqElement;
    })) {
      acc.push(element);
    }
    return acc;
  }, []);
}

var numbers = [4, 1, 3, 2, 2, 1, 3, 3, 4, 4, 4];
unique(numbers); // [1, 2, 3, 4]