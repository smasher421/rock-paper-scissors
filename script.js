/* 
There needs to be 2 parameters regarding player choice and computer choice. 
the computer choice needs to be a generated string between rock paper and scissors;
the player choice needs to be 3 strings with rock paper or scissors
single-round function  --> playerSelection and computerSelection --> returns string that says lose or win
return results not console.log them 
*/

let playerSelection;
let computerSelection;

function getComputerChoice() {
  var choice = ["Rock", "Paper", "Scissors"];
  var random = choice[(Math.random() * choice.length) | 0]; // choice de random number * lungimea elementelor din string
  // | 0 --> convertire din float in int

  return random; // returnare random number aici
}

function playRound(playerSelection, computerSelection) {
  
let returnedMessage;
  if (playerSelection == "rock") {
    if (getComputerChoice() == "Rock") {
      returnedMessage = alert("It's a draw");
      return returnedMessage;
    } else if (getComputerChoice() == "Paper") {
      returnedMessage = alert("You Lost! Paper beats rock");
      return returnedMessage;
    } else {
      returnedMessage = alert("You won! Rock beats scissors");
      return returnedMessage;
    }
  } else if (playerSelection == "paper") {
    if (getComputerChoice() == "Rock") {
      returnedMessage = alert("You won! Paper beats Rock");
      return returnedMessage;
    } else if (getComputerChoice() == "Paper") {
      returnedMessage = alert("It's a draw");
      return returnedMessage;
    } else {
      returnedMessage = alert("You lost! Scissors beats paper");
      return returnedMessage;
    }
  } else if (playerSelection == "scissors") {
    if (getComputerChoice() == "Rock") {
      returnedMessage = alert("You lost! Rock beats scissors");
      return returnedMessage;
    } else if (getComputerChoice() == "Paper") {
      returnedMessage = alert("You win! Paper beats scissors");
      return returnedMessage;
    } else {
      returnedMessage = alert("DRAW! Scissors with Scissors");
      return returnedMessage;
    }
  }
}

function game()
{
    let loop = 5;
    for (let i=0; i<5;i++)
    playRound(playerSelection, computerSelection);

}


playerSelection = prompt("Enter rock paper or scissors...");
computerSelection = getComputerChoice();
console.log (game());