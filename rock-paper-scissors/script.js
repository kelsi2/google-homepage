const container = document.querySelector('.container');
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.classList.add('btn');

  button.addEventListener('click', () => {
    playRound(button.id, computerSelection);
  });
});


const computerPlay = () => {
  const rand = Math.floor(Math.random() * 3);
  const gameMoves = ['Rock', 'Paper', 'Scissors']
  
  if (rand === 0) {
    return gameMoves[0];
  } else if (rand === 1) {
    return gameMoves[1];
  } else if (rand === 2) {
    return gameMoves[2];
  }
}

let playerSelection;
let computerSelection;

const div = document.createElement('div');
div.classList.add('game-info')

const scores = document.createElement('p');
scores.classList.add('scores');

const roundResult = document.createElement('p');
roundResult.classList.add('result');

const gameWin = document.createElement('p');
gameWin.classList.add('game-win');

const resetButton = document.createElement('button');
resetButton.classList.add('btn');

resetButton.addEventListener('click', () => {
  playerScore = 0;
  computerScore = 0;

  roundResult.textContent = '';
  scores.textContent = '';
  gameWin.textContent = '';

  buttons.forEach((button) => {
      button.disabled = false;
  });
});

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  computerSelection = computerPlay();
  
  const playerSelectionCase = playerSelection.toLowerCase();
  const computerSelectionCase = computerSelection.toLowerCase();
      
  if ((playerSelectionCase === 'rock' && computerSelectionCase === 'rock') || (playerSelectionCase === 'paper' && computerSelectionCase === 'paper') || (playerSelectionCase === 'scissors' && computerSelectionCase === 'scissors')) {
    roundResult.textContent = 'It\'s a tie!';
  } else if (playerSelectionCase === 'rock' && computerSelectionCase === 'paper') {
    computerScore++;
    roundResult.textContent = 'You lose! Paper beats rock!';
  } else if (playerSelectionCase === 'paper' && computerSelectionCase === 'scissors') {
    computerScore++;
    roundResult.textContent = 'You lose! Paper beats scissors';
  } else if (playerSelectionCase === 'scissors' && computerSelectionCase === 'rock') {
    computerScore++;
    roundResult.textContent = 'You lose! Rock beats scissors';
  } else if (playerSelectionCase === 'rock' && computerSelectionCase === 'scissors') {
    playerScore = playerScore + 1;
    roundResult.textContent = 'You win! Rock beats scissors!';
  } else if (playerSelectionCase === 'paper' && computerSelectionCase === 'rock') {
    playerScore++;
    console.log(playerScore)
    roundResult.textContent = 'You win! Paper beats rock!';
  } else if (playerSelectionCase === 'scissors' && computerSelectionCase === 'paper') {
    playerScore++;
    roundResult.textContent = 'You win! Scissors beat paper';
  }
  scores.textContent = `Player score: ${playerScore} Computer score: ${computerScore}`;

  if (playerScore === 5) {
    gameWin.textContent = 'You win! Congratulations! :D';
    resetButton.textContent = 'Play again!';
    gameWin.appendChild(resetButton);

    buttons.forEach((button) => {
      button.disabled = true;
    });
  } else if (computerScore === 5) {
    gameWin.textContent = 'You lose :(';
    resetButton.textContent = 'Try again!';
    gameWin.appendChild(resetButton);

    buttons.forEach((button) => {
      button.disabled = true;
    });
  }
};

div.appendChild(roundResult);
div.appendChild(scores);
div.appendChild(gameWin);

container.appendChild(div);