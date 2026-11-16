// Given a string, return a string length 1 from its front, unless the parameter front is false, in which case return a string length 1 from its back. The string will be non-empty.

// Examples

// theEnd('Hello', true) → H
// theEnd('Hello', false) → o
// theEnd('oh', true) → o

// function theEnd(str, front) {
//   if (front) {
//     return str[0];
//   } else {
//     return str[str.length - 1];
//   }
// }
function theEnd(str, front) {
  return front ? str[0] : str[str.length - 1];
}
console.log(theEnd('Hello', true))
console.log(theEnd('Hello', false))
console.log(theEnd('oh', true))
