// let fruits = ["Mango", "Lemon", "Apple", "Orange","Watermelon"];

// console.log(fruits.length);
// access items or array elements
// console.log(fruits[2]);
// let len = fruits.length;

// let lastItem = len-1;
// console.log(fruits[fruits.length-1]);
//add to the end of the array 
// fruits.push("Pear");
// console.log(fruits)
// add to begin of array
// fruits.unshift("Grape");
// console.log(fruits);

//add to the middle in array

// fruits.splice(2,0,"Guava");
// console.log(fruits);

//remove the last item from the array
// let removedItem = fruits.pop();

// console.log(fruits)
// remove the first item from array
// fruits.shift();
// console.log(fruits);
// how to remove items within the array
// fruits.splice(2,2);
// console.log(fruits);


// let prices = [100, 23, 65, 12, 900, 450];

//! to check if a paricular index exists use "include"
// let result = prices.includes(165);
// console.log(result);

// console.log(prices.indexOf(23));

//to compare use "sort"
// prices.sort((a, b) => a - b );
// console.log(prices);

// let extractFirstThree = prices.slice(0,3);
// console.log(extractFirstThree);

// function totalPrice(arr){
//     let sum = 0;

//     for(let i=)
// }


function removeDuplicate(arr){
    let newArr = [];

    for(let i = 0; i< arr.length; i++){
        if(!newArr.includes(arr[i])){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(removeDuplicate([20,40,20,4,10,4,30]));

