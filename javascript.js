console.log("Hello World");
const computerChoice = ["rock", "paper", "scissors"];
function getComputerChoice() {
  let choice = Math.floor(Math.random() * computerChoice.length);
  return computerChoice[choice];
}

let player = 0;
let computer = 0;

function round(playerSelection, computerSelection) {
  let userChoice = prompt("Chose between:\n-Rock\n-Paper\n-Scissors");
  playerSelection = userChoice.toLowerCase();
  computerSelection = getComputerChoice();
  if (playerSelection == "rock" && computerSelection == "scissors") {
    alert("Rock beats Scissors!\nYou WIN!");
    player++;
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    alert("Paper beats Rock!\nMachine WIN!");
    computer++;
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    alert("Scissors beats Paper!\nYou WIN!");
    player++;
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    alert("Rock beats Scissors!\nMachine WIN!");
    computer++;
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    alert("Paper beats Rock!\nYou WIN!");
    player++;
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    alert("Scissors beats Paper!\nMachine WIN!");
    computer++;
  } else {
    alert("TIE!!");
  }
  console.log(computerSelection);
  console.log(playerSelection);
}

function game() {
  for (let i = 0; i <= 5; i++) {
    if (i < 5) {
      round();
      alert(`Machine: ${computer};\nYou ${player};\nChoose Again!`);
    } else {
      if (player > computer) {
        alert("You WIN!!!");
      } else if (player < computer) {
        alert("Machine WIN!!!");
      } else {
        alert("It's TIE!\n WAR IS OVER");
      }
    }
  }
}
