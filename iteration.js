function sum(n) {
  var res = 0;
  while (n > 0) {
    res = res + n;
    n--;
  }
  return res;
}
sum(5);
//2
function factorialOfN(n) {
  res = 1;
  while (n > 0) {
    res = res * n;
    n--;
  }
  return res;
}
//3
function repeatString(string, num) {
  var res = "";
  while (num > 0) {
    res += string;
    num--;
  }
  return res;
}
//4
function countMinMax(min, max) {
  var count = 0;
  while (min < max) {
    count++;

    min++;
  }
  return count;
}
//5
function sumMinToMax(min, max) {
  var sum = 0;
  while (min < max) {
    sum = sum + min;
    min++;
  }
  return sum;
}
//6
function productMinToMax(min, max) {
  var prod = 1;
  while (min < max) {
    prod *= min;
    min++;
  }
  return prod;
}

//9
function multiplyBy10NTimes(num, n) {
  var res = num;
  while (n > 0) {
    res = res * 10;
    n--;
  }
  return res;
}

//8
function countCharAtIndex(string1, index, string2) {
  var count = 0;
  var i = 0;
  while (i < string2.length) {
    if (string1[index] === string2[i]) {
      count++;
    }
    i++;
  }
  return count;
}
//10
function reverseString(string) {
  var str = "";
  var i = string.length - 1;
  while (i <= 0) {
    str += string[i];
    i--;
  }
  return str;
}
//11
function getIndexOf(string, char) {
  var i = 0;
  while (i < string.length) {
    if (string[i] === char) {
      return i;
    }
    i++;
  }
}
//12
function sumEven(number1, number2) {
  var res = 0;
  while (number1 < number2) {
    if (number1 % 2 === 0) {
      res += number1;
    }
    number1++;
  }
  return res;
}
//13
function isPrime(n) {
  if (n < 2) {
    return false;
  }
  var i = 2;
  while (i < n) {
    if (n % i === 0) {
      return false;
    }
    i++;
  }
  return true;
}
//14
function primeCounter(num) {
  var counter = 0;
  var i = 0;
  while (i < num) {
    if (isPrime(i) === true) {
      counter++;
    }
    i++;
  }
  return counter;
}
//15
function Rsp() {
  var input = prompt("play the game");
  while (input !== "r" && input !== "p" && input !== "p") {
    input = prompt("tray again");
  }
  console.log(input);
}
//16
function sumOfLastAndFirst(n) {
  var last = n % 10;
  var first = n;
  while (first >= 10) {
    first = Math.floor(first / 10);
  }
  return first + last;
}
