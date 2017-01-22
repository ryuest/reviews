'use strict';
// Filter an array for only odd numbers
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Before...
let es5OddNumbers = numbers.filter(function(number) {
  return number % 2;
});
console.log(es5OddNumbers);

let es6OddNumbers = numbers.filter(number => number % 2);
console.log(es6OddNumbers);

let developers = [{name: 'Rob'}, {name: 'Jake'}];

let es5Output = developers.map(function(developer) {
  return developer.name;
});
console.log(es5Output);

let es6Output = developers.map(developer => developer.name);
console.log(es6Output);

function CounterES5() {
  this.seconds = 0;
  global.setInterval(function() {
    this.seconds++;
  }.bind(this), 1000); // or }.bind(this), 1000) and skip that = this
}

var counterA = new CounterES5();
global.setTimeout(function() {
  console.log(counterA.seconds);
}, 1200);

// After...
// ES6 Arrows instead bind `this` to the immediate enclosing
// lexical scope:
function CounterES6() {
  this.seconds = 0;
  global.setInterval(() => this.seconds++, 1000);
}

let counterB = new CounterES6();
global.setTimeout(() => console.log(counterB.seconds), 1200);
