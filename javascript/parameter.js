function addTwo(number1, number2) {
    return number1 + number2;
}
console.log(`Sum = ${addTwo(5, 10)}`);

function userRegistration(fName, lname, email, password) {
    if(!fName) {
        return "First name is required.";
    }
    if(!lname) {
        return "Last name is required.";
    }
    if(!email) {
        return "Provide a valid email address.";
    }
    if(!password) {
        return "Password field cannot be empty.";
    }
    return `Congratulations! ${fName} ${lname}, you have successfully registered. Check your email ${email} for your next steps.`;
}

const btnSignUp = document.querySelector(".btnSignUp");

btnSignUp.addEventListener("click", () => {
    let fName = document.querySelector(".fName").value;
    let lname = document.querySelector(".lname").value;
    let email = document.querySelector(".email").value;
    let password = document.querySelector(".password").value;
    let message = document.getElementById("message");

    let userReg = userRegistration(fName, lname, email, password);
    message.textContent = userReg;
    message.style.color = "green";
    message.style.display = "block";
})