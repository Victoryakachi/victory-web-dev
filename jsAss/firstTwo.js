// Given a string, return the string made of its first two chars, so the string "Hello" yields "He". 
// If the string is shorter than length 2, return whatever there is, so "X" yields "X", and the empty string "" yields the empty string "".

// Examples

// firstTwo('Hello') → He
// firstTwo('abcdefg') → ab
// firstTwo('ab') → ab

function firstTwo(str) {
    return str.length < 2 ? str : str.slice(0, 2);
}

console.log(firstTwo('Hello'))
console.log(firstTwo('abcdefg'))
console.log(firstTwo('ab'))