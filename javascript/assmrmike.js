function calculateResult() {
let datas;
let data = document.getElementById("maths").value;
let result = document.getElementById("result");
let maths = document.getElementById("maths_score");

if (data >= 70 && data <= 100){
    maths.textContent = " A ";
    maths.style.color = "green";
}
else if (data >= 60 && data <= 69){
    maths.textContent = " B ";
    maths.style.color = "greenyellow";
}
else if (data >= 50 && data <= 59){
    maths.textContent = " C ";
    maths.style.color = "orange";
}
else if (data >= 45 && data <= 49){
    maths.textContent = " D ";
    maths.style.color = "orangered";
}
else if (data >= 40 && data <= 44){
    maths.textContent = " E ";
    maths.style.color = "red";
}
else if (data >= 0 && data <= 39){
    maths.textContent = " F ";
    maths.style.color = "red";
}
else if (data > 100 ){
    maths.textContent = " Invalid  ";
    maths.style.color = "red";
}
else{
    maths.textContent = " incorrect input ";
    maths.style.color = "red";
}
}