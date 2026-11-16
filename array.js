// Array allows you to store multiple items into a single value
// Array is accessed based on index. The first index is always index 0. It is used to access items or array elements.

// let fruits = ["Mango", "Lemon", "Apple", "Orange", "Watermelon"];

// console.log(fruits.length);
// console.log(fruits[3]);
// let len = fruits.length;

// let lastItem = len-1;
// console.log(fruits[fruits.length-1]);

let prices = ["500#", "1000#", "2000#", "3000#", "4000#"];

// console.log(prices.length);
// console.log(prices[1]);

// let lastItem = length -1;
// console.log(prices[prices.length-1]);


//add to middle of array

// fruits.splice(2,0,"Guava");
// console.log(fruits);

prices.push("50000#")
console.log(prices)
//push is used to add last element

prices.splice(3,0, "3000#")
console.log(prices)
//splice  in this case is used to add to any position in the array apart from first and last
//splice can be used to insert or delete

prices.unshift("5600#")
console.log(prices)
//unshift is used to add first item to array

prices.pop()
console.log(prices)