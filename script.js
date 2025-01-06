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
let displayResult = document.getElementById("result");
let toss = document.getElementById("toss");
let letters = document.querySelectorAll(".letter");

let buttons = [btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9];
let chance = null;
let gameActive = false;
let tossDone = false;

// Random player select Through Toss
toss.onclick = function () {
  // toss animation
  letters.forEach((letter, index) => {
    setTimeout(() => {
      letter.style.animation = "spin 0.5s ease-in-out";
      setTimeout(() => {
        letter.style.animation = "";
      }, 500);
    }, index * 200);
  });

  // toss selection
  const players = ["X", "O"];
  if (!tossDone) {
    const selected_player = players[Math.floor(Math.random() * players.length)];
    chance = selected_player;
    gameActive = true;
    tossDone = true;
    setTimeout(() => {
      displayResult.innerText = `${chance} Won the toss and play first`;
    }, letters.length * 210);
    toss.disabled = true;
  }
};
// for button disable
let disableAllButtons = function () {
  buttons.forEach((btn) => {
    btn.disabled = true;
  });
};

// for change chance
let change_chance = function () {
  if (chance == "X") {
    chance = "O";
  } else {
    chance = "X";
  }
};

// fill text
buttons.forEach((btn) => {
  btn.onclick = function () {
    if (!tossDone) {
      displayResult.innerText = "Pleae do the Toss first!";
    }
    if (!gameActive || !tossDone || btn.innerText != "") return;
    btn.innerText = chance;
    change_chance();
    check_win();
  };
});

// reset game

reset.onclick = function () {
  gameActive = false;
  tossDone = false;
  buttons.forEach((btn) => {
    btn.innerText = " ";
    btn.disabled = false;
  });
  toss.disabled = false;
  displayResult.innerText = "Toss ...";
};

let check_win = function () {
  const winCondition = [
    [btn1, btn2, btn3],
    [btn4, btn5, btn6],
    [btn7, btn8, btn9],
    [btn1, btn4, btn7],
    [btn2, btn5, btn8],
    [btn3, btn6, btn9],
    [btn1, btn5, btn9],
    [btn3, btn5, btn7],
  ];
  for (let condition of winCondition) {
    const [a, b, c] = condition;
    if (
      (a.innerText == b.innerText) &
      (a.innerText == c.innerText) &
      (a.innerText != "")
    ) {
      displayResult.innerText = `Result: ${a.innerText} Won!`;
      disableAllButtons();
      gameActive = false;
      return;
    }
  }

  if (buttons.every((btn) => btn.innerText != "")) {
    displayResult.innerText = "Result: Draw!";
    disableAllButtons();
    gameActive = false;
  }
};
