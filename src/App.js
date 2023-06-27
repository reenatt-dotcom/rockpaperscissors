import React, { useState } from 'react';
import Header from './Header';
import Scoreboard from './Scoreboard';
import PlayerChoice from './PlayerChoice';
import ComputerChoice from './ComputerChoice';
import Result from './Result';
import PlayAgain from './PlayAgain';
import './styles.css'

const App = () => {
  const [playerChoice, setPlayerChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [result, setResult] = useState('');

  const choices = ['rock', 'paper', 'scissors'];

  const handlePlayerChoice = (choice) => {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    setPlayerChoice(choice);
    setComputerChoice(computerChoice);
    calculateResult(choice, computerChoice);
  };
  

  const calculateResult = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice) {
      setResult("It's a tie!");
    } else if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      setResult('You win!');
      setPlayerScore(playerScore + 1);
    } else {
      setResult('Computer wins!');
      setComputerScore(computerScore + 1);
    }
  };
  

  const handlePlayAgain = () => {
    setPlayerChoice('');
    setComputerChoice('');
    setResult('');
  };

  return (
    <div>
      <Header />
      <Scoreboard playerScore={playerScore} computerScore={computerScore} />
      <PlayerChoice
        choices={choices}
        playerChoice={playerChoice}
        handlePlayerChoice={handlePlayerChoice}
      />
      <ComputerChoice computerChoice={computerChoice} />
      <Result result={result} />
      <PlayAgain handlePlayAgain={handlePlayAgain} />
    </div>
  );
};

export default App;
