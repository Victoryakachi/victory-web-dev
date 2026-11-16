// function ageValidation(){
//     let userAge =  document.getElementById("age").value;
//     let detail = document.getElementById("result")

//     if(userAge >= 18){
//         detail.textContent = "Congratulations, you can now can cast your vote"
//     }
//     else{
//         detail.textContent = "You are not eligible to vote"
//         detail.style.color = "red";
//     }         
// }

function rechargeAirtime(){
    let userChoice = document.getElementById("airtime").value;
    let message = document.getElementById("message")

    if(UserChoice === 1){
        message.textContent = "You have successful recharge =N==200 naira"
        message.style.display = "block";
    }
}