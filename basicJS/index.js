/* Hello, world*/
// Hello, world

var myName;

// Setup
var a;
a = 7;
var b;

// Only change code below this line
b = a;

var a = 9;

var myFirstName = 'Marina';
var myLastName = 'Diubailo';

// Only change code below this line
var a = 5;
var b = 10;
var c = 'I am a';
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + ' String!';

// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = 'A String';
titleCaseOver = 9000;

let catName = 'Oliver';
let catSound = 'Meow!';

const FCC = 'freeCodeCamp'; // Change this line
let fact = 'is cool!'; // Change this line
fact = 'is awesome!';
console.log(FCC, fact); // Change this line

const sum = 10 + 10;

const difference = 45 - 33;

const product = 8 * 10;

const quotient = 66 / 33;

let myVar = 87;
// Only change code below this line
myVar++;

let myVar2 = 11;
// Only change code below this line
myVar2--;

const ourDecimal = 5.7;
const myDecimal = 10.23;
// Only change code below this line

const product2 = 2.0 * 2.5;

const quotient2 = 4.4 / 2.0; // Change this line

const remainder = 11 % 3;

let a = 3;
let b = 17;
let c = 12;

// Only change code below this line
a += 12;
b += 9;
c += 7;

let a = 11;
let b = 9;
let c = 3;

// Only change code below this line
a -= 6;
b -= 15;
c -= 1;

let a = 5;
let b = 12;
let c = 4.6;

// Only change code below this line
a *= 5;
b *= 3;
c *= 10;

let a = 48;
let b = 108;
let c = 33;

// Only change code below this line
a /= 12;
b /= 4;
c /= 11;

const myStr = 'I am a "double quoted" string inside "double quotes".';

const myStr2 = '<a href="http://www.example.com" target="_blank">Link</a>';

const myStr3 = 'FirstLine\n\t\\SecondLine\nThirdLine';

const myStr4 = 'This is the start. ' + 'This is the end.';

let myStr5 = 'This is the first sentence. ';
myStr5 += 'This is the second sentence.';

const myName = 'Marina';
const myStr6 = 'My name is ' + myName + 'and I am well!';

const someAdjective = 'excellent';
let myStr7 = 'Learning to code is ';
myStr7 += someAdjective;

// Setup
let lastNameLength = 0;
const lastName = 'Lovelace';

// Only change code below this line
lastNameLength = lastName.length;

// Setup
let firstLetterOfLastName = '';
const lastName2 = 'Lovelace';

// Only change code below this line
firstLetterOfLastName = lastName2[0];

// Setup
let myStr8 = 'Jello World';

// Only change code below this line
myStr8 = 'Hello World'; // Change this line
// Only change code above this line

// Setup
const lastName3 = 'Lovelace';

// Only change code below this line
const thirdLetterOfLastName = lastName3[2]; // Change this line

// Setup
const lastName4 = 'Lovelace';

// Only change code below this line
const lastLetterOfLastName = lastName4[lastName.length - 1];

// Setup
const lastName5 = 'Lovelace';

// Only change code below this line
const secondToLastLetterOfLastName = lastName5[lastName.length - 2];

const myNoun = 'dog';
const myAdjective = 'big';
const myVerb = 'ran';
const myAdverb = 'quickly';

// Only change code below this line
const wordBlanks =
  'A ' + myAdjective + ' ' + myNoun + ' ' + myVerb + ' ' + myAdverb + '!';

const myArray = ['My String', 10];

const myArray2 = [
  [10, 15],
  [20, 30],
];

const myArray3 = [50, 60, 70];
const myData = myArray3[0];

// Setup
const myArray4 = [18, 64, 99];
myArray4[0] = 45;

const myArray5 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

const myData2 = myArray5[2][1];

const myArray6 = [
  ['John', 23],
  ['cat', 2],
];
myArray6.push(['dog', 3]);

// Setup
const myArray7 = [
  ['John', 23],
  ['cat', 2],
];
const removedFromMyArray = myArray7.pop();

const myArray8 = [
  ['John', 23],
  ['dog', 3],
];
const removedFromMyArray2 = myArray8.shift();

const myArray9 = [
  ['John', 23],
  ['dog', 3],
];
myArray9.shift();
myArray9.unshift(['Paul', 35]);

const myList = [];
myList.push(['Chocolate Bar', 15]);
myList.push(['Chocolate Waffles', 20]);
myList.push(['Chocolate Milk', 3]);
myList.push(['Banana Bar', 15]);
myList.push(['Banana Waffles', 13]);

function reusableFunction() {
  console.log('Hi World');
}
reusableFunction();

function functionWithArgs(a, b) {
  console.log(a + b);
}
functionWithArgs(10, 20);

function timesFive(num) {
  return num * 5;
}

// Declare the myGlobal variable below this line
const myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal here
  oopsGlobal = 5;
}

// Only change code above this line

function fun2() {
  let output = '';
  if (typeof myGlobal != 'undefined') {
    output += 'myGlobal: ' + myGlobal;
  }
  if (typeof oopsGlobal != 'undefined') {
    output += ' oopsGlobal: ' + oopsGlobal;
  }
  console.log(output);
}

function myLocalScope() {
  // Only change code below this line
  let myVar = 'Foo';
  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);

// Setup
const outerWear = 'T-Shirt';

function myOutfit() {
  // Only change code below this line
  const outerWear = 'sweater';
  // Only change code above this line
  return outerWear;
}

myOutfit();

// Setup
let sum1 = 0;

function addThree() {
  sum1 = sum1 + 3;
}

// Only change code below this line
function addFive() {
  sum1 = sum1 + 5;
}
// Only change code above this line

addThree();
addFive();

// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}
processed = processArg(7);

function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item);
  item = arr.shift();
  return item;
  // Only change code above this line
}

function welcomeToBooleans() {
  // Only change code below this line

  return true; // Change this line

  // Only change code above this line
}

function trueOrFalse(wasThatTrue) {
  // Only change code below this line
  if (wasThatTrue) {
    return 'Yes, that was true';
  }
  return 'No, that was false';

  // Only change code above this line
}

// Setup
function testEqual(val) {
  if (val == 12) {
    // Change this line
    return 'Equal';
  }
  return 'Not Equal';
}

testEqual(10);

// Setup
function testStrict(val) {
  if (val === 7) {
    // Change this line
    return 'Equal';
  }
  return 'Not Equal';
}

testStrict(10);

// Setup
function compareEquality(a, b) {
  if (a === b) {
    // Change this line
    return 'Equal';
  }
  return 'Not Equal';
}

compareEquality(10, '10');

// Setup
function testNotEqual(val) {
  if (val != 99) {
    // Change this line
    return 'Not Equal';
  }
  return 'Equal';
}

testNotEqual(10);

// Setup
function testStrictNotEqual(val) {
  if (val !== 17) {
    // Change this line
    return 'Not Equal';
  }
  return 'Equal';
}

testStrictNotEqual(10);
