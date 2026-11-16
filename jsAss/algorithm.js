const str = `Classroom`;
// let vowCount = 0;
// let vowArr = [];
// for (let i = 0; i < str.length; i++) {
//   if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'){
//     vowCount++;
//     vowArr.push(str[i]);
//   }
// }
// console.log(vowArr);
// console.log(vowCount);

let reverseStr = '';
for(i = str.length - 1; i >= 0; i--){
  reverseStr += str[i];
}console.log(reverseStr);