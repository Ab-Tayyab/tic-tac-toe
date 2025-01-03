let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let reset = document.getElementById("reset");

let buttons = [btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9];
let chance = "X";
let gameActive = true;

// for button disable
let disableAllButtons = function () {
  buttons.forEach((btn) => {
    btn.disabled = true;
  });
};

// for change chance
let change_chance = function () {
  if (chance == "X") {
    chance = "0";
  } else {
    chance = "X";
  }
};

// fill text
buttons.forEach((btn) => {
  btn.onclick = function () {
    if (!gameActive || btn.innerText != "") return;
    btn.innerText = chance;
    change_chance();
    check_win();
  };
});

// reset game

reset.onclick = function () {
  gameActive = true;
  buttons.forEach((btn) => {
    btn.innerText = " ";
    btn.disabled = false;
  });
};

let check_win = function () {
  if (
    (btn1.innerText == btn2.innerText &&
      btn1.innerText == btn3.innerText &&
      btn1.innerText != "") ||
    (btn4.innerText == btn5.innerText &&
      btn4.innerText == btn6.innerText &&
      btn5.innerText != "") ||
    (btn7.innerText == btn8.innerText &&
      btn7.innerText == btn9.innerText &&
      btn9.innerText != "") ||
    (btn1.innerText == btn4.innerText &&
      btn1.innerText == btn7.innerText &&
      btn4.innerText != "") ||
    (btn2.innerText == btn5.innerText &&
      btn5.innerText == btn8.innerText &&
      btn8.innerText != "") ||
    (btn3.innerText == btn6.innerText &&
      btn3.innerText == btn9.innerText &&
      btn9.innerText != "") ||
    (btn1.innerText == btn5.innerText &&
      btn1.innerText == btn9.innerText &&
      btn9.innerText != "") ||
    (btn3.innerText == btn5.innerText &&
      btn3.innerText == btn7.innerText &&
      btn7.innerText != "")
  ) {
    setTimeout(() => {
      alert("X");
      disableAllButtons();
      gameActive = false;
    }, 0);
    return;
  }

  if (buttons.every((btn) => btn.innerText != "")) {
    setTimeout(() => {
      alert("It's a Draw!");
      disableAllButtons();
      gameActive = false;
    }, 0);
  }
};
