let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;
const generateTarget = () => Math.floor(Math.random() * 10);
const compareGuesses = (humanGuess, computerGuess, targetNumber) => Math.abs(humanGuess - targetNumber) > Math.abs(computerGuess - targetNumber) ? false : true;
const updateScore = (winner) => winner === "human" ? humanScore++ : computerScore++;
const advanceRound = () => currentRoundNumber++;