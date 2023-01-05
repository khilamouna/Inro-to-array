//1
var myArray = ["dog", "cat", "fox", "monkey"];
//2
myArray[0];
myArray[1];
myArray[myArray.length - 1];
//3
var arr = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  "The",
  "quick",
  "brown",
  "fox",
  "jumped",
  "over",
  "the",
  "lazy",
  "dog",
  true,
  false,
  true,
];
//
function emptyArray() {
  return [];
}
//5
function numbersArray() {
  var arr = [1, 2, 3, 4, 5];
  return arr;
}
//
function numbersArray() {
  var arr = [];
  for (i = 1; i <= 5; i++) {
    arr.push(i);
  }
  return arr;
}
//6
function booleansArray() {
  var arr = [true, true, true];
  return arr;
}
//7
function stringsArray() {
  var arr = ["Mouna", "Khila"];
  return arr;
}
//8
function arrayLength(array) {
  return arr.length;
}
//More parctice
//1
function firstElement(arr) {
  return arr[0];
}
//2
function lastElement(arr) {
  return arr[arr.length - 1];
}
//3
function getNthElement(arr, n) {
  return arr[n];
}
//4
function push(arr, element) {
  arr.push(element);
  return arr;
}
//5
function pop(arr) {
  const newArray = arr.slice();
  newArray.pop();
  return newArray;
}
//6
function unshift(array, element) {
  const newArray = array.slice();
  newArray.unshift(element);
  return newArray;
}
//7
function shift(array) {
  const newArray = array.slice();
  newArray.shift();
  return newArray;
}
//8
function reassignLast(arr, element) {
  const newArray = arr.slice();
  newArray[newArray.length - 1] = element;
  return newArray;
}
//9
function reassignNthElement(arr, index, element) {
  const newArray = arr.slice();
  newArray[index] = element;
  return newArray;
}

//Advanced

//1

function indexOf(array, element) {
  return array.indexOf(element);
}

function concatArrays(array1, array2) {
  return array1.concat(array2);
}
