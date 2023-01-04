1; //
function sumOfN(n) {
  var res = 0;
  for (var i = 0; i < n; n--) {
    res = res + n;
  }
  return res;
}

2; //
function factorialOfN(n) {
  var res = 1;
  for (var i = 0; i < n; n--) {
    res = res * n;
  }
  return res;
}
//3
function repeatString(string, num) {
  var str = "";
  for (var i = 0; num > 0; num--) {
    str += string;
  }
  return str;
}
//4
function sumMinToMax(min, max) {
  var sum = 0;
  for (var i = 0; min < max; min++) {
    sum = sum + min;
  }
  return sum;
}
//6
function productMinToMax(min, max) {
  var prod = 1;
  for (var i = 0; min < max; min++) {
    prod = prod * min;
  }
  return prod;
}
//7
function multiplyBy10NTimes(num, n) {
  var res = num;
  for (var i = 0; n > 0; n--) {
    res = res * 10;
  }
  return res;
}
//8
function countCharAtIndex(string1, index, string2) {
  var count = 0;

  for (var i = 0; i < string2.length; i++) {
    if (string1[index] === string2[i]) {
      count++;
    }
  }
  return count;
}
//9
function reverseString(string) {
  var str = "";
  for (var i = string.length - 1; i >= 0; i--) {
    str += string[i];
  }
  return str;
}
//9
function getIndexOf(string, char) {
  for (var i = 0; i < string.length; i++) {
    if (string[i] === char) {
      return i;
    }
  }
}
