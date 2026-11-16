// console.log(`hello`);
// console.log(`i like pizza`)

// window.alert(`this is an alert!`);
// window.alert(`be careful`);

// document.getElementById("myH1").textContent = `Hello`;
// document.getElementById(`myP`).textContent = 'paragraph';

// let age = 23;
// let price = 100.67;
// let gpa = 2.9;


// console.log(`You gpa is ${gpa}`)
// console.log(`You are ${age} years old`);
// console.log(`The price is $${price}`);
// console.log(typeof price);

// let firstName = 'Bro';
// let favoriteFood = 'rice';
// let email = 'Bro123@gmail.com';

// console.log(typeof firstName);
// console.log(`Your name is ${firstName} and I like ${favoriteFood}, btw my email is ${email}`);
// console.log(typeof email);

// let online = false
// let forSale = false
// isStudent = true

// console.log(`Bro is online: ${online}`);
// console.log(`is this car for sale: ${forSale}`);
// console.log(`Are you sure this guy is a student?: ${isStudent}`)

// let fullName = "Victory Udonachi";
// let age = 23;
// let student = true;

// document.getElementById("p1").textContent = `My name is ${fullName}`;
// document.getElementById("p2").textContent = `I am ${age} years old`;
// document.getElementById("p3").textContent = `Am I Enrolled into College? ${student}`;

// let students = 30;

// students = students + 5;
// students = students - 5;
// students = students * 2;
// students = students / 2;
// students = students ** 2;
// students = students % 5;
// let extraStudents = students % 5;
// console.log(extraStudents);

// students += 5;
// students -= 5;
// students *= 2;
// students /= 2;
// students **= 2;
// students %= 5;
// students++;
// console.log(students);

// let result = 1 + 2 * 3 + 4 ** 2;
// console.log(result);

// let username = window.prompt("what is your name?");
// console.log(username);

// document.getElementById("mySubmit").onclick = function() {
//     username = document.getElementById("myText").value;
//     document.getElementById("myH1").textContent = `Hello ${username}`;
// }

// let age = window.prompt("How old are you?");
// age = Number(age);
// age+=1;

// console.log(age, typeof age);

// let x;
// let y;
// let z;

// x = Number(x);
// y = String(y);
// z = Boolean(z);

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);

// const = a variable that cannot be reassigned(changed). It is a constant variable.

// const PI = 3.14;
// let radius;
// let circumference;

// PI = 420;

// radius = window.prompt("Enter the radius of a circle: ");
// radius = Number(radius);

// circumference = 2 * PI * radius;

// document.getElementById("mySubmit").onclick = function() {
//     radius = Number(document.getElementById("myText").value);
//     radius = Number(radius);
//     circumference = 2 * PI * radius;
//     document.getElementById("myH3").textContent = `The circumference is ${circumference} cm`;
// }

// #COUNTER PROGRAM

// const decreaseBtn = document.getElementById("decreaseBtn");
// const resetBtn = document.getElementById("resetBtn");
// const increaseBtn = document.getElementById("increaseBtn");
// const countLabel = document.getElementById("countLabel");
// let count = 0;

// increaseBtn.onclick = function() {
//     count++;
//     countLabel.textContent = count;
// }
// decreaseBtn.onclick = function() {
//     count--;
//     countLabel.textContent = count;
// }
// resetBtn.onclick = function() {
//     count = 0;
//     countLabel.textContent = count;
// }

// Math = built-in object that provides a collection of properties and methods

// let x = 0;
// let y = Math.PI;
// let z = 4;
// let max = Math.max(x, y, z);

// z = Math.sin(y);
// console.log(max);

// RANDOM NUMBER GENERATOR

// const myButton = document.getElementById("myButton");
// const Label1 = document.getElementById("Label1");
// const Label2 = document.getElementById("Label2");
// const Label3 = document.getElementById("Label3");
// const min = 1;
// const max = 6;
// let randomNum1;
// let randomNum2;
// let randomNum3;

// myButton.onclick = function() {
//     randomNum1 = Math.floor(Math.random() * max) + min;
//     randomNum2 = Math.floor(Math.random() * max) + min;
//     randomNum3 = Math.floor(Math.random() * max) + min;
//     Label1.textContent = randomNum1;
//     Label2.textContent = randomNum2;
//     Label3.textContent = randomNum3;
// }

// IF STATEMENTS =  if a condition is true we can execute some code,
                    // if not, do something else.


// let age = 16;

// if(age >=18){
//     console.log("You're old enough to enter this site");
// }else{
//     console.log("You must be 18+ to enter this site");
// }

// 

// let isStudent =  false;

// if(isStudent){
//     console.log("You are a student")
// }else{
//     console.log("You ain't a student")
// }

// let age = 17;
// let hasLicense = true;

// if(age >= 16){
//     console.log(`You're old enough to drive`);

//     if(hasLicense){
//         console.log(`You have your license`);
//     }
//     else{
//         console.log(`But You do not have a license yet`);
//     }
// }else{
//     console.log(`You gotta 16+ to have a fking license`);
// }

// let age = 12;
// let hasPermit = false;

// if(age >= 18){
//     console.log("Congrats, you're old enough to access this site");
// }else{
//     console.log(`you must be 18+ to access this site`);

//     if(hasPermit){
//         console.log(`but you can access cos you've got a permit`);
//     }else{
//         alert(`you ain't upto age and you've got no permit. Get th f outta here now.`);
//     }
// }

// const myText = document.getElementById("myText");
// const mySubmit =  document.getElementById("mySubmit");
// const resultElement =  document.getElementById("resultElement");
// let age;

// mySubmit.onclick = function(){

//     age = myText.value;
//     age = Number(age);
//     if(age >= 100){
//         resultElement.textContent = `You're TOO OLD to enter this site. You're ${age} years old.`;
//         resultElement.style.color = "cyan";
//     }
//     // = is an assignment operator
//     // == is for comparison i.e. too see if 2 values are equal.
//     else if(age == 0){
//         resultElement.textContent = "You can't access the site. You're a baby.";
//     }
//     else if(age >= 18){
//         resultElement.textContent = `You're old enough to access this site`;
//         resultElement.style.color = "Green";
//     }
//     else if(age < 0){
//         resultElement.textContent = `your age can't be below 0`;
//         resultElement.style.color = "red";
//     }
//     else{
//         resultElement.textContent = `You ain't old enought to access this site`;
//         resultElement.style.color = "orange";
//     }
// }

// .checked = property that determines the checked state of an HTML checkbox or radio button element.

// const myCheckBox = document.getElementById("myCheckBox");
// const visaBtn = document.getElementById("visaBtn");
// const masterCardBtn = document.getElementById("masterCardBtn");
// const payPalBtn = document.getElementById("payPalBtn");
// const mySubmit = document.getElementById("mySubmit");
// const subResult = document.getElementById("subResult");
// const paymentResult = document.getElementById("paymentResult");

// mySubmit.onclick = function(){

//     if(myCheckBox.checked){
//         subResult.textContent = `You're Subcribed!`;
//     }
//     else{
//         subResult.textContent = `You are Not Subscribed`;
//     }

//     if(visaBtn.checked){
//         paymentResult.textContent = `You are paying with Visa`;
//     }
//     else if(masterCardBtn.checked){
//         paymentResult.textContent = `You are paying with MasterCard`;
//     }
//     else if(payPalBtn.checked){
//         paymentResult.textContent = `You are paying with PayPal`;
//     }
//     else{
//         paymentResult.textContent = `You need to select a payment type`;
//     }
// }

//Tenary operator is a shortcut to if and else statements.  Helps to assign a variable based on a condition. Represented as ? codeIfTrue: codeIfFalse;

// let age = 13;
// let message = age >= 18 ? "You're an adult" : "You're a minor";
// console.log(message);

// This is same as 
// let age = 13;
// let message;

// if(age >= 18)[
//     message = "You're an adult"
// ]
// else{
//     message = "You're a minor"
// }
// console.log(message);

// let time = 4;
// let greeting = time >= 12 ? 'Good day': 'Good morning';

// console.log(greeting);

//this is same as

// let time = 13;
// let greeting;

// if(time >= 12){
//     greeting = 'Good Day'
// }
// else{
//     greeting = 'Good Morning';
// }
// console.log(greeting);


// let isStudent = false;
// let message = isStudent ? `You're a student` : `You're not a student`;
// console.log(message);

//Same as

// let isStudent = true;
// let message;
// if(isStudent){
//     message = `You're a student`;
// }
// else{
//     message = `You're not a student`;
// }
// console.log(message);

// const customerName = document.getElementById("fname");
// const customerPurchaseAmount = document.getElementById("purchaseAmount");
// const percentDiscount = document.getElementById("discount");
// const mySubmit = document.getElementById("mySubmit"); 

// mySubmit.onclick = function(){
//     const customerFname = customerName.value;
//     const amount = Number(customerPurchaseAmount.value);

//     if(purchaseAmount >= 100){
//         discount.textContent = `Hello ${customerFname}, Your total is $${amount - amount * (10/100)}`;
//     }
//     else{
//         discount.textContent = `Your total is $${percentDiscount}`;
//     }
// }

const nameInput = document.getElementById("fname");
const purchaseAmountInput = document.getElementById("purchaseAmount");
const discountOutput = document.getElementById("discount");
const mySubmit = document.getElementById("mySubmit");

mySubmit.onclick = function () {
    const customerName = nameInput.value.trim();
    const amount = Number(purchaseAmountInput.value);

    if (amount >= 100) {
        const discountPercent = 10;
        const discountedTotal = amount - (amount * discountPercent / 100);
        discountOutput.textContent = `Hello ${customerName}, your total is $${discountedTotal.toFixed(2)}`;
    } else {
        discountOutput.textContent = `Your total is $${amount.toFixed(2)}`;
    }
};


// mySubmit.onclick = function () {
//     const name = customerName.value.trim();
//     const amount = Number(customerPurchaseAmount.value);

//     if (amount >= 100) {
//         const total = amount - amount * (10 / 100);
//         percentDiscount.textContent = `Hello ${name}, your total is $${total}`;
//     } else {
//         percentDiscount.textContent = `Your total is $${amount}`;
//     }
// };