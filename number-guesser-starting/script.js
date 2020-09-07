let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
  return Math.floor(Math.random() * 9);
}
generateTarget();

const compareGuesses = (human, computer, target) => {
  if (Math.abs(target - human) < Math.abs(target - computer)) {
    return true;
  } else if (Math.abs(target - human) > Math.abs(target - computer)) {
      return false;
  } else {
      return true;
  }
}

const updateScore = (string) => {
  if (string === 'human') {
    humanScore += 1;
  } else if (string === 'computer') {
    computerScore += 1;
  }
}

const advanceRound = () => {
  currentRoundNumber += 1;
}
