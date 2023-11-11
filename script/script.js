"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let gameStatus = false;
let highScore = 0;

function displayTextContent(query, value) {
  document.querySelector(query).textContent = value;
}

document.querySelector(".check").addEventListener("click", function () {
  const guess = +document.querySelector(".guess").value;
  console.log(typeof guess);

  if (!gameStatus) {
    // when there is no input.
    if (!guess) {
      displayMessage("⛔ No number!");

      // when player wins.
    } else if (guess === secretNumber) {
      gameStatus = true;
      if (score > highScore) {
        highScore = score;
        displayTextContent(".highscore", score);
        document.querySelector(".highscore").textContent = score;
      }
      displayTextContent(".number", secretNumber);
      displayTextContent(".message", "🎉 Correct Number!");
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";

      // when guess is high.
    } else if (guess !== secretNumber) {
      if (score > 1) {
        displayTextContent(
          ".message",
          guess > secretNumber ? "Too high 📈" : "Too low 📉"
        );

        --score;
        document.querySelector(".score").textContent = score;
      } else {
        gameStatus = true;
        displayTextContent(".message", "💥 You lost the game!");
        displayTextContent(".score", 0);
      }
    }
  }
});

// resetting functionality.
document.querySelector(".again").addEventListener("click", function () {
  gameStatus = false;
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayTextContent(".message", "Start guessing...");
  displayTextContent(".score", score);
  displayTextContent(".number", "?");
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
