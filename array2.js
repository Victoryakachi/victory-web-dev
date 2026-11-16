// Higher Order Function
// map, filter, reduce, find, findindex, some, even.

// const numbers = [1,2,3,4,5]; 1,4,9,16,25

// let newElement = numbers.map((number) => number * number);
// console.log(newElement);

// const numbers = [1,2,3,4,5,6]; //[1,4,3,16,5,36]

// let newElement = numbers.map((number) => number * number);
// console.log(newElement);


// let prices = [100, 23, 65, 12, 900, 450];
// prices[0]
//! how to check if a particular index exists
// let result = prices.includes(165);
// console.log(result);

// console.log(prices.indexOf(4500));
// prices.sort((a, b) => a -b);
// console.log(prices);

// let extractFirstThree = prices.slice(0, 3);
// console.log(extractFirstThree[0])

// function totalPrice(arr) {
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }

//   return sum;
// }
// console.log(`Sum= ${totalPrice([2,9,1])}`)

// function removeDuplicate(arr){
//   let newArr = [];

//   for(let i=0; i<arr.length; i++){
//     if(!newArr.includes(arr[i])){
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }
// console.log(removeDuplicate([2,2,2,2,2,2]));

// const numbers = [1, 2, 3, 4, 5, 6]; //[1,4,9,16,25]

// function muiltplyArrayBy2(arr) {
//   let newArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     newArray.push(arr[i] * arr[i]);
//   }

//   return newArray;
// }

// let newElement = numbers.map((number) => number * number);
// console.log(newElement);
// console.log(muiltplyArrayBy2(numbers));

// function doubleEven(arr) {
//   return arr.map((num,index) => (num % 2 === 0 ? index+":"+num * num : index+":"+num));
// }
// console.log(doubleEven(numbers));

// let elements = [20, 12, 22, 10, 17, 11, 70, 21, 90]; //[70,90]

// function filterElements(arr, target) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= target) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }

// console.log(filterElements(elements, 20));

// filter

// let above50 = elements.filter((element, index, array) => element >= 50);
//console.log(above50);

// Given an array of ints, return true if 6 appears as either the first or last element in the array. The array will be length 1 or more.

// Examples

// firstLast6([1, 2, 6]) → true
// firstLast6([6, 1, 2, 3]) → true
// firstLast6([13, 6, 1, 2, 3]) → false

// function firstLast6(arr) {
//   if (arr[0] === 6 || arr[arr.length - 1] === 6) return true;

//   return false;
// }

// console.log(firstLast6([1, 2, 6]))
// console.log(firstLast6([6, 1, 2, 3]))
// console.log(firstLast6([13, 6, 1, 2, 3]))

// Given 2 int arrays, a and b, each length 3, return a new array length 2 containing their middle elements.

// Examples

// middleWay([1, 2, 3], [4, 5, 6]) → [2,5]
// middleWay([7, 7, 7], [3, 8, 0]) → [7,8]
// middleWay([5, 2, 9], [1, 4, 5]) → 2,4

// function middleWay(arr1, arr2) {
//   const newArr = [];

//   newArr.push(arr1[1]);
//   newArr.push(arr2[1]);
//   return newArr;
// }
// console.log(middleWay([1, 2, 3], [4, 5, 6]))
// console.log(middleWay([7, 7, 7], [3, 8, 0]))
// console.log(middleWay([5, 2, 9], [1, 4, 5]))

// function sumStrings(arr) {
//   const strings = arr.filter((value) => typeof value === "string");
//   return strings.reduce((sum, value) => sum + Number(value), 0);
// }

// console.log(sumStrings([3, "5", 2, "7", 8, 10])); 
// console.log(sumStrings([1, 2, "3", 4, 5, "6"]));

//create a function that chooses the highest number for each items.
//"5, 30, 20, 6, 16, 14" outputs 30
//"80, 100, 20, 10, 33, 103, 12, 8" outputs 103

// function highestStr(str) {
  // const numbers = str.split(",")

// Given a string name, e.g. "Bob", return a greeting of the form "Hello Bob!".

// Examples

// helloName('Bob') → Hello Bob!
// helloName('Alice') → Hello Alice!
// helloName('X') → Hello X!

// function helloName(name) {
//   return `Hello ${name}!`;
// }
// console.log(helloName('Bob'))
// console.log(helloName('Alice'))
// console.log(helloName('X'))