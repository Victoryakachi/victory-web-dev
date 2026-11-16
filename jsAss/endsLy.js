// Given a string, return true if it ends in "ly".

// Examples

// endsLy('oddly') → true
// endsLy('y') → false
//endsLy('oddl') → false

function endsLy(str){
    // return str.endsWith('ly');
    return str.slice(-2) === 'ly';
}
console.log(endsLy('oddly'))
console.log(endsLy('y'))
console.log(endsLy('oddl'))