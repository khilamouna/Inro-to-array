//1
function arrayFor(array) {
  for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}
//2
function arrayWhile(array) {
  var i = 0;
  while (i < array.length) {
    console.log(array[i]);

    i++;
  }
}
//3
function sum(array) {
  total = 0;
  for (var i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}
//4
function sumEveryOther(array) {
  total = 0;
  for (var i = 0; i < array.length; i += 2) {
    total += array[i];
  }
  return total;
}
//5
function sumStartAt(array, index) {
  total = 0;
  for (var i = index; i < array.length; i++) {
    total += array[i];
  }
  return total;
}
//6
function sumUntil(array, index) {
  total = 0;
  for (var i = 0; i <= index; i++) {
    total += array[i];
  }
  return total;
}
//7
function subtractReverse(array) {
  res = array[array.length - 1];
  for (var i = array.length - 2; i >= 0; i--) {
    res -= array[i];
  }
  return res;
}
//8
function product(array) {
  res = 1;
  for (var i = 0; i < array.length; i++) {
    res *= array[i];
  }
  return res;
}
//9
function average(array) {
  avg = 0;
  for (var i = 0; i < array.length; i++) {
    avg += array[i];
  }
  return avg / array.length;
}
//10
function square(array) {
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    newArr.push(array[i] ** 2);
  }
  return newArr;
}
//11
function isArray(array) {
  return Array.isArray(array);
}
