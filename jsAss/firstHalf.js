// Given a string of even length, return the first half. So the string "WooHoo" yields "Woo".

// Examples

// firstHalf('WooHoo') → Woo
// firstHalf('HelloThere') → Hello
// firstHalf('abcdefg') → abc

function firstHalf(str) {
  const halfLength = str.length / 2;
  return str.slice(0, halfLength);
}

console.log(firstHalf('WooHoo'));
console.log(firstHalf('HelloThere'));
console.log(firstHalf('abcdefg'));