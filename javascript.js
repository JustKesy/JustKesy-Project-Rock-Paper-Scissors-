console.log("Write 'game()' under this line!");
const computerChoice = ["rock", "paper", "scissors"];
function getComputerChoice() {
  let choice = Math.floor(Math.random() * computerChoice.length);
  return computerChoice[choice];
}

let player = 0;
let computer = 0;

function round(playerSelection, computerSelection) {
  if (playerSelection == "rock" && computerSelection == "scissors") {
    res.innerHTML = "Rock beats Scissors! You WIN!";
    player++;
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    res.innerHTML = "Paper beats Rock! Machine WIN!";
    computer++;
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    res.innerHTML = "Scissors beats Paper! You WIN!";
    player++;
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    res.innerHTML = "Rock beats Scissors! Machine WIN!";
    computer++;
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    res.innerHTML = "Paper beats Rock! You WIN!";
    player++;
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    res.innerHTML = "Scissors beats Paper! Machine WIN!";
    computer++;
  } else {
    res.innerHTML = "TIE!!";
  }

  console.log(computerSelection);
  console.log(playerSelection);
}

let buttons = document.querySelectorAll("button");

buttons.forEach((btn) =>
  btn.addEventListener("click", (e) =>
    round(e.target.textContent, getComputerChoice())
  )
);
let user = document.querySelector(".user");
console.log(user.textContent);
let mach = document.querySelector(".machine");
console.log(mach.textContent);
let res = document.querySelector(".result");
let win = document.querySelector(".winner");

window.addEventListener("click", () => {
  if (player < 5 && computer < 5) {
    user.innerHTML = `User: ${player}`;
    mach.innerHTML = `Machine: ${computer}`;
  } else if (player === 5) {
    user.innerHTML = "You WIN!!";
    mach.innerHTML = `Machine: ${computer}`;
    win.innerHTML = "Well done!! You WIN!!";
  } else if (computer === 5) {
    user.innerHTML = `User: ${player}`;
    mach.innerHTML = "Machine WIN!!";
    win.innerHTML = "More luck next time! Machine WIN!!";
  }
});
