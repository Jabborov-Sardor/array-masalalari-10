// // #1 //////////////////////////////
// function reverseStringToArray(str) {
//   let numArray = str.split("");
//   let reversedArray = numArray.reverse();

//   reversedArray = reversedArray.map(Number);

//   return reversedArray;
// }

// let result = reverseStringToArray("34567");
// console.log(result);
// // #2 //////////////////////////////
// function doubleNumbers(arr) {
//   return arr.map((number) => number * 2);
// }

// const numbers = [1, 2, 3, 4, 5];
// console.log(doubleNumbers(numbers));
// // #3 //////////////////////////////
// function findIndex(arr, element) {
//   return arr.indexOf(element);
// }

// let arr = [10, 20, 30, 40, 50];
// let element = 30;
// console.log(`Index of ${element} in array: ${findIndex(arr, element)}`);

// element = 15;
// console.log(`Index of ${element} in array: ${findIndex(arr, element)}`);
// // #4 //////////////////////////////
// function separateEvenAndOdd(arr) {
//   let result = {
//     juft: [],
//     toq: [],
//   };

//   arr.forEach((number) => {
//     if (number % 2 === 0) {
//       result.juft.push(number);
//     } else {
//       result.toq.push(number);
//     }
//   });

//   return result;
// }

// let nums = [10, 31, 2, 6];
// let res = separateEvenAndOdd(numbers);
// console.log(res);
// // #5 //////////////////////////////
// function removeExclamationMarks(str) {
//   return str.split("!").join("");
// }

// let inputString = "salom dunyo! hello world!";
// let rest = removeExclamationMarks(inputString);
// console.log(rest);
// // #6 //////////////////////////////
// function sumOfArrays(arr1, arr2) {
//   let combinedArray = arr1.concat(arr2);

//   let sum = combinedArray.reduce((acc, current) => acc + current, 0);

//   return sum;
// }

// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];
// let natija = sumOfArrays(array1, array2);
// console.log(natija);

// /////#7 //////////////////////////////

// function removeFirstAndLastChar(str) {
//   if (str.length <= 2) {
//     return "";
//   }
//   return str.substring(1, str.length - 1);
// }

// let inputString1 = "salom";
// let result1 = removeFirstAndLastChar(inputString1);
// console.log(result1);

// inputString = "a";
// result = removeFirstAndLastChar(inputString1);
// console.log(result1);

// inputString = "ab";
// result = removeFirstAndLastChar(inputString1);
// console.log(result1);

// //////// #8 //////////////////////////////

// function reverseArray(arr) {
//   let result = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     result.push(arr[i]);
//   }
//   return result;
// }

// let array = [1, 2, 3, 4, 5];
// let reversedArray = reverseArray(array);
// console.log(reversedArray);

// // #9 //////////////////////////////

// function removeTrailingZero(str) {
//   if (str.endsWith("0")) {
//     return str.slice(0, -1);
//   }
//   return str;
// }

// let inputString2 = "12340";
// let result2 = removeTrailingZero(inputString2);
// console.log(result2);

// inputString2 = "1234";
// result = removeTrailingZero(inputString2);
// console.log(result2);

// // #10 //////////////////////////////

// function findSmallestNumberAndFourthPower(arr) {
//   if (arr.length === 0) {
//     return "Array empty!";
//   }

//   let smallestNumber = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < smallestNumber) {
//       smallestNumber = arr[i];
//     }
//   }

//   return Math.pow(smallestNumber, 4).toString();
// }

// let numbers3 = [5, 3, 8, 1, 7];
// let result3 = findSmallestNumberAndFourthPower(numbers3);
// console.log(result3);

// numbers3 = [-2, 0, 4, 6, 3];
// result3 = findSmallestNumberAndFourthPower(numbers3);
// console.log(result3);
