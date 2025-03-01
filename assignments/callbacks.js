// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  // GIVEN THIS PROBLEM:

  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // SOLUTION:

  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // NOTES ON THE SOLUTION:

  // firstItem is a higher order function.
  // It expects a callback (referred to as `cb`) as its second argument.
  // To test our solution, we will use the given `items` array and a variety of callbacks.
  // Note how callbacks can be declared separately, or inlined.

  // TEST 1 (inlined callback):

  firstItem(items, item => console.log(`I love my ${item}!`));
  // "I love my Pencil!"

  // TEST 2 (declaring callback before hand):

  function logExorbitantPrice(article) {
    console.log(`this ${article} is worth a million dollars!`);
  };

  firstItem(items, logExorbitantPrice);
  // "this Pencil is worth a million dollars!"
*/


function getLength(arr, cb) {
  return cb(arr.length);
  // getLength passes the length of the array into the callback.
}
let a = function a(param){ return param} //the callback
console.log(getLength(items, a))


function last(arr, cb) {
  var lastItem = arr[arr.length - 1]
  return cb(lastItem)
  // last passes the last item of the array into the callback.
}
function b(param){ return param}
console.log(last(items, b))


function sumNums(x, y, cb) {
  var sum = x + y;
  return cb(sum);
  // sumNums adds two numbers (x, y) and passes the result to the callback.
}
let c = (sumUp) => sumUp; 
console.log(sumNums(3, 4, c))

function multiplyNums(x, y, cb) {
  var multiply = x * y;
  return cb(multiply);
  // multiplyNums multiplies two numbers and passes the result to the callback.
}
let d = (multiplyUp) => multiplyUp; 
console.log(multiplyNums(3, 4, d))

function contains(item, list, cb) {
  var checks = list.includes(item);
  return cb(checks);
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
}
console.log(contains('yo-yo', items, (value) => value));

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  var remove = [...new Set(array)];
  return cb(remove);
}
console.log(removeDuplicates(items, (value) => value));