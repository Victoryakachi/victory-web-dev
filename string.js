// A string is combination of characters
// the create a new line in a string use \n
// for tab use \t
// .trim is used to reduce unwanted spaces. NB: Never trim password.
// to access a character use indexing or charArt
//slice, substring

let message = "Thanks for - registering - with us";

// console.log(message.length);
// console.log(message.charAt(0));
// console.log(message.toUpperCase());
// console.log(message.startsWith("U"));// to check what the element starts with
// console.log(message.includes("not"));

let newMess = message.replace("us","me"); //replaces us with me
// console.log(newMess);

let mss = message.split("-"); // to split by this
// console.log(mss);

let mes = mss.join("-");
// console.log(mes);


function countVowels(str){
    let counter = 0;
    let vowels = "aeiouAEIOU";

    for (let i = 0; i > )
}

// write a js program to return a winner between vowels and consonants in a given string if h