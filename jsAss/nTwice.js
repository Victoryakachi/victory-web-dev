// Given a string and a number n, return a string made of the first and last n chars from the string. The string length will be at least n.

// Examples

// nTwice('hello', 2) → helo
// nTwice('Chocolate', 3) → Choate
// nTwice('Chocolate', 1) → Ce

function nTwice(str, n) {
    if (n < 1){
      const firstNchars = str.slice(0,0);
      const lastNchars = str.slice(0,0);
      return firstNchars + lastNchars;
      //everything same as return empty i.e. return "";
    }
  
    const firstNChars = str.slice(0,n);
    const lastNChars = str.slice(-n);
    return firstNChars + lastNChars; 
}
console.log(nTwice('hello', 2))
console.log(nTwice('Chocolate', 3))
console.log(nTwice('Chocolate', 1)) 
console.log(nTwice('Chocolate', 0)) 