let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");

let chance = "X"
let change_chance = function (){
    if(chance == "X"){
        chance ="0"
    }
    else{
        chance="X"
    }
}
btn1.onclick = function () {
  btn1.innerText = chance;
  change_chance();
};

btn2.onclick = function () {
  btn2.innerText = chance;
  change_chance();
};
btn3.onclick = function () {
  btn3.innerText = chance;
  change_chance();
};
btn4.onclick = function () {
  btn4.innerText = chance;
  change_chance();
};
btn5.onclick = function () {
  btn5.innerText = chance;
  change_chance();
};
btn6.onclick = function () {
  btn6.innerText = chance;
  change_chance();
};
btn7.onclick = function () {
  btn7.innerText = chance;
  change_chance();
};

btn8.onclick = function () {
  btn8.innerText = chance;
  change_chance();
};
btn9.onclick = function () {
  btn9.innerText = chance;
  change_chance();
};
