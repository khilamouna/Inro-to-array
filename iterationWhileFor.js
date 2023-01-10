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
  return (avg / array.length).toFixed(0) * 1;
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
//More Practice
//1
function min(array) {
  var minValue = array[0];
  for (var i = 0; i < array.length; i++) {
    if (array[i] < minValue) {
      minValue = array[i];
    }
  }
  return minValue;
}
//2
function max(array) {
  var maxValue = array[0];
  for (var i = 1; i < array.length; i++) {
    if (maxValue < array[i]) {
      maxValue = array[i];
    }
  }
  return maxValue;
}
//3
function shortestString(array) {
  let shortestLength = array[0].length;
  for (let i = 1; i < array.length; i++) {
    shortestLength = Math.min(shortestLength, array[i].length);
  }
  return shortestLength;
}
//4
function longestString(array) {
  var longestLength = array[0].length;
  for (var i = 0; i < array.length; i++) {
    longestLength = Math.max(longestLength, array[i].length);
  }
  return longestLength;
}
//5
function shortestLongest(array) {
  let shortest = array[0];
  let longest = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i].length < shortest.length) {
      shortest = array[i];
    } else if (array[i].length > longest.length) {
      longest = array[i];
    }
  }

  return [shortest, longest];
}
//6
function minMax(array) {
  var min = array[0];
  var max = array[0];
  for (var i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    } else if (array[i] > max) {
      max = array[i];
    }
  }
  return [min, max];
}
//7
function multiplyBy(array, number) {
  return array.map((element) => element * number);
}
//or
function multiplyBy(array, number) {
  var newarray = [];
  array.map((element) => newarray.push(element * number));
  return newarray;
}
//8
function multiplyByIndex(array) {
  var newArray = [];
  array.map((element, index) => newArray.push(element * index));
  return newArray;
}
