// for(let i=1; i<=5; i++){
//     console.log("I love you")
// }

// for(let i=10; i>=0; i--){
//     console.log("This is PH");
// }



function multiplyNumbers1To100() {
    let product = 1n;

    for (let number = 1n; number <= 100n; number++) {
        product *= number;
    }

    return product;
}

console.log(multiplyNumbers1To100().toString());