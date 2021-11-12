function returnBoolString(bool) {
  bool ? `yes` : `no`;
}
function lowest2InArray(array) {
  let lowestNum = Math.min(...array); //its a way to pass to function(min) all elemnts of array
  let index = array.indexOf(Math.min(...array)); // because min expects to recieve a list of numbers..
  array.splice(index, 1); //delete min value from array
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
  let sortedArray = array.sort();
  if (sortedArray[0] < sortedArray[1]) {
    return sortedArray[0];
  } else return sortedArray[sortedArray.length - 1];
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
  let parametersToString = String(num1) + String(operat) + String(num2);
  return eval(parametersToString);
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
  return count >= 0 ? count : 0; //acount for negetive int because wrong input
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
  return num > 0 ? TribonacciArray : 0; //account for num not positive int as input
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

function abbreviateTwoWords(string) {
  let newstr = ``;
  let newWordIndex = string.indexOf(` `) + 1;
  let string1 =
    string.charAt(0).toUpperCase() +
    `.` +
    string.charAt(newWordIndex).toUpperCase();
  return string1;
}
function maskify(str) {
  let newstr = ``;
  let lenghCount = 0;
  if (str) {
    for (let index = 0; index < str.length - 4; index++) {
      newstr = newstr + `#`;
      lenghCount++;
    }
    for (let index = lenghCount; index < str.length; index++) {
      newstr = newstr + str[index];
    }
    return newstr;
  } else return "";
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
  let longestWord = arrayOfWords[0];
  for (let i = 0; i < arrayOfWords.length; i++) {
    if (arrayOfWords[i].length > longestWord.length) {
      longestWord = arrayOfWords[i];
    }
  }
  return String(longestWord);
}
