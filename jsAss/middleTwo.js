// Given a string of even length, return a string made of the middle two chars, so the string "string" yields "ri". The string length will be at least 2. If the string is an odd length, just return the character at the middle of the string.
// Note: you can use Math.floor(num) to round a number down to the nearest integer.

// Examples

// middleTwo('string') → ri
// middleTwo('code') → od
// middleTwo('Practice') → ct
// middleTwo('123456789') → 5

function middleTwo(str) {
    const length = str.length;
    const middleIndex = Math.floor(length / 2);
    // if (length % 2 === 0) {
    //     return str.slice(middleIndex - 1, middleIndex + 1);
    // } else {
    //     return str.charAt(middleIndex);
    // }
    return length % 2 === 0 ? str.slice(middleIndex - 1, middleIndex + 1) : str.charAt(middleIndex);
}
console.log(middleTwo('string'));
console.log(middleTwo('code'));
console.log(middleTwo('Practice')); 
console.log(middleTwo('123456789')); 