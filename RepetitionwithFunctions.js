//1
function sum(number) {
  var total = 0;
  for (var i = 0; i <= number; i++) {
    total += i;
  }
  return total;
}
//or
function sum(number) {
  var total = 0;
  var i = 0;
  while (i <= number) {
    total += i;
    i++;
  }
  return total;
}
//or
function sum(num) {
  if (num === 0) {
    return 0;
  }
  return num + sum(num - 1);
}

//2
function factorial(number) {
  var res = 1;
  for (var i = 1; i <= number; i++) {
    res *= i;
  }
  return res;
}
//or
function factorial(number) {
  if (number === 0) {
    return 1;
  }
  return (res = number * factorial(number - 1));
}
//3
function repeatString(string, number) {
  var res = "";
  for (var i = 0; i < number; i++) {
    res += string;
  }
  return res;
}
//or
function repeatString(string, number) {
  if (number === 0) {
    return " ";
  }
  return (res = string + repeatString(string, number - 1));
}
//4
function fibonacci(number) {
  if (number <= 2) {
    return 1;
  }
  return (res = fibonacci(number - 1) + fibonacci(number - 2));
}
//5
function multiplyBy10(firstNumber, secondNumber) {
  if (secondNumber === 0) {
    return firstNumber;
  }
  return (num = multiplyBy10(firstNumber * 10, secondNumber - 1));
}
//More Practice
//1
function sumBetween(start, end) {
  if (start > end) {
    [start, end] = [end, start];
  }
  if (end === start) {
    return start;
  }
  return start + sumBetween(start + 1, end);
}

//2
function add(number1, number2) {
  if (number2 === 0) {
    return number1;
  }
  return add(++number1, --number2);
}
//3
function isEven(num) {
  if (num === 0) {
    return true;
  }
  if (num === 1) {
    return false;
  }
  return isEven(num - 2);
}
