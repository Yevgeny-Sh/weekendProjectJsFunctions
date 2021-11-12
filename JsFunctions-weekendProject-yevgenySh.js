function returnBoolString(bool) {
  bool ? `yes` : `no`;
}

function lowest2InArray(array) {
  let lowestNum = Math.min(...array); //its a way to pass to function(min) all elemnts of array
  let index = array.indexOf(Math.min(...array)); // because min expects to recieve a list of numbers..
  array.splice(index, 1);
  let secondLowestNum = Math.min(...array);
  let sum = lowestNum + secondLowestNum;
  return sum;
}

function convertArray2binary(arr) {
  arrayAsANumber = arr.join("");
  return arrayAsANumber.toString(2);
}
function NextPerfectSquare(num) {
  let isNumPerfectSquare = Number.isInteger(Math.sqrt(num));
  let NextSquare = 0;
  if (isNumPerfectSquare) {
    for (let index = num + 1; index <= num * num; index++) {
      if (Math.sqrt(index) % 1 === 0) {
        NextSquare = index;
        break;
      }
    }
  }
  if (isNumPerfectSquare) {
    return NextSquare;
  } else return -1;
}

function findUniq(array) {
  let uniqValue = array[0];
  let sortedArray = array.sort();
  for (let index = 0; index < sortedArray.length - 1; index++) {
    if (sortedArray[index] !== sortedArray[index + 1]) {
      uniqValue = sortedArray[index + 1];
    }
  }
  return uniqValue;
}

function Summation(num) {
  let sum = 0;
  for (let index = 0; index <= num; index++) {
    sum += index;
  }
  return sum;
}

function century(year) {
  if (year > 100) {
    return Math.round(year / 100);
  } else return 0;
}

function fourBasic(operat, num1, num2) {
  let x = String(num1) + String(operat) + String(num2);
  let y = eval(x);
  return y;
}

function GrowthOfPopulation(
  originalInhabitantsNum,
  percent,
  annualInhabitants2Come,
  population2Surpass
) {
  let counter = 0;
  let currentInhabitants = originalInhabitantsNum;
  while (currentInhabitants < population2Surpass) {
    currentInhabitants =
      currentInhabitants +
      currentInhabitants * (percent / 100) +
      annualInhabitants2Come;
    counter++;
  }
  return counter;
}

function peopleOnTheBus(array) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    passengerAtBusStop = array[i];
    for (let j = 0; j < passengerAtBusStop.length; j++) {
      if (j % 2 === 0) {
        count += passengerAtBusStop[j];
      } else {
        count -= passengerAtBusStop[j];
      }
    }
  }
  return count;
}

function fibonachi(num) {
  let fibonachiArray = [0, 1];
  for (let index = 2; index < num; index++) {
    fibonachiArray.push(fibonachiArray[index - 1] + fibonachiArray[index - 2]);
  }
  return fibonachiArray[num - 1]; //the first index is 0...
}

function Tribonacci(signature, num) {
  let TribonacciArray = [];
  if (signature === [1, 1, 1]) {
    TribonacciArray = [1, 1, 1];
  } else {
    TribonacciArray = [0, 0, 1];
  }
  for (let index = 3; index < num; index++) {
    TribonacciArray.push(
      TribonacciArray[index - 1] +
        TribonacciArray[index - 2] +
        TribonacciArray[index - 3]
    );
  }
  return TribonacciArray;
}

function trimString(str) {
  let arrayFromString = str.split(""); //convert string to array
  arrayFromString.pop();
  arrayFromString.shift();
  let string = arrayFromString.join(""); // convert array back to string

  return string;
}
function stringRepeat(string, times) {
  let newString = ``;
  for (let index = 0; index < times; index++) {
    newString = newString + string;
  }
  return newString;
}

function toCamelCase(string) {
  for (let index = 0; index < string.length; index++) {
    if (string[index] === "-" || string[index] === "_") {
      string =
        string.slice(0, index) +
        string.charAt(index + 1).toUpperCase() +
        string.slice(index + 2, string.lengh);
    }
  }
  return string;
}

function toWeirdCase(string) {
  for (let index = 0; index < string.length; index++) {
    if (index % 2 === 0) {
      string =
        string.slice(0, index) +
        string.charAt(index).toUpperCase() +
        string.slice(index + 1, string.lengh);
    }
  }
  return string;
}

function abbreviateTwoWords1(string) {
  let newstr = ``;
  let newWordIndex = string.indexOf(` `) + 1;
  console.log(newWordIndex);
  console.log(string);
  let string1 =
    string.charAt(0).toUpperCase() +
    `.` +
    string.charAt(newWordIndex).toUpperCase();
  return string1;
}
function maskify(str) {
  let newstr = ``;
  let lenghCount = 0;
  for (let index = 0; index < str.length - 4; index++) {
    newstr = newstr + `#`;
    lenghCount++;
  }
  for (let index = lenghCount; index < str.length; index++) {
    newstr = newstr + str[index];
  }
  return newstr;
}

function shortestWordInSentence(sentence) {
  let arrayOfWords = sentence.split(" ");
  let shortestWordLengh = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < arrayOfWords.length; i++) {
    if (arrayOfWords[i].length < shortestWordLengh) {
      shortestWordLengh = arrayOfWords[i].length;
    }
  }
  return shortestWordLengh;
}
function longestWordInSentence(sentence) {
  let arrayOfWords = sentence.split(" ");
  let longestWord = 0;
  for (let i = 0; i < arrayOfWords.length; i++) {
    if (arrayOfWords[i].length > longestWord) {
      longestWord = arrayOfWords[i].length;
    }
  }
  return longestWord;
}

let arr = [2, 2, 2, 4, 2, 2, 2, 2, 1, 2, 2, 2];
let str = `abababababab`;
const newLocal = `i-like-camels_very_much`;
// console.log(lowest2InArray(arr));
// console.log(Summation(8));
// toWeirdCase;
// console.log(shortestWordInSentence("batm an f12345gggg6789p ghghg dsf"));
// console.log(longestWordInSentence("batm an f12345gggg6789p ghghg dsf"));

//console.log(toWeirdCase(newLocal));
console.log(toCamelCase(newLocal));
console.log(abbreviateTwoWords1(`yev sh`));
