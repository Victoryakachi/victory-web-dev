// Given 2 strings, a and b, return a new string made of the first char of a and the last char of b, so "yo" and "java" yields "ya". If either string is length 0, use '@' for its missing char.

// Examples

// lastChars('last', 'chars') → ls
// lastChars('yo', 'java') → ya
// lastChars('hi', '') → h@
// lastChars(``, ``) → @@

function lastChars(a, b) {
    const firstChar = a.slice(0,1);
    const lastChar = b.slice(-1);
    if(firstChar.length === 0 && lastChar.length === 0){
    return "@@";}
  if(lastChar.length === 0){
    return firstChar + "@";}
  if(firstChar.length === 0){
    return "@" + lastChar;}
  if(firstChar.length > 0 && lastChar.length > 0){
    return firstChar + lastChar;}
}
console.log(lastChars('last', 'chars'))
console.log(lastChars('yo', 'java'))
console.log(lastChars('hi', ''))
console.log(lastChars(``, ``))