function playGame(playerChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  let result = '';

  if (playerChoice === computerChoice) {
      result = "It's a tie!";
  } else if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
      result = "You win!";
  } else {
      result = "You lose!";
  }

  document.getElementById('result').textContent = `You chose ${playerChoice}, computer chose ${computerChoice}. ${result}`;
}
//player score//

let playerScore = 0;
let computerScore = 0;

function updateScore() {
  document.getElementById('playerScore').textContent = playerScore;
  document.getElementById('computerScore').textContent = computerScore;
}