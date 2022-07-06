// UI
let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');


// these now corrosponde to the correct buttons, but I wonder if there is a easier way to bundle these up
// I need to incorporate these into playPlay
rock.addEventListener('click', function(){
  console.log('rock clicked');
});
paper.addEventListener('click', function(){
  console.log('paper clicked');
});
scissors.addEventListener('click', function(){
  console.log('scissors clicked');
});









// Original Game Logic
let playerScore = 0;
let computerScore = 0;

// computer select function
function computerPlay() {

  const option = ['rock', 'paper', 'scissors'];

  let random = Math.floor(Math.random() * 3);

  return option[random];
}


// player select function

function playerPlay() {

  const input = prompt("Please enter 'rock', 'paper' or 'scissors'");
  // take out input and figure out a way to replace it with what buttons are clicked

  const option = input.toLowerCase();

  return option;
}




// play 1 single round
function playRound(playerSelection, computerSelection) {

  if (playerSelection === computerSelection) {
    return 'It is a tie';
  }


  if (playerSelection === 'rock') {

    if (computerSelection === 'scissors') {
      playerScore++;
      return 'Player wins with rock';
    } else if (computerSelection === 'paper') {
      computerScore++;
      return 'Computer wins with paper'
    }
  }

  if (playerSelection === 'paper') {

    if (computerSelection === 'rock') {
      playerScore++;
      return 'Player wins with paper';
    } else if (computerSelection === 'scissors') {
      computerScore++;
      return 'Computer wins with scissors';
    }
  }

  if (playerSelection === 'scissors') {

    if (computerSelection === "paper") {
      playerScore++;
      return 'Player wins with scissors';
    } else if (computerSelection === 'rock') {
      computerScore++;
      return 'Computer wins with rock';
    }
  }

}

// console.log(playRound(playerSelection, computerSelection));


// game

function game() {
// for (i = 0; i <= 5; i++) { REMOVED THIS FOR NOW
  {    var playerSelection = playerPlay();
    var computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    console.log('Computer: ' + computerSelection);
    console.log('Player: ' + playerSelection);
    console.log('Player: ' + playerScore);
    console.log('Computer: ' + computerScore);
}
console.log('Final Player: ' + playerScore);
console.log('Final Computer: ' + computerScore);

}

game();