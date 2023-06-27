import React from 'react';

const Scoreboard = ({ playerScore, computerScore }) => {
  return (
    <div>
      <h3>Scoreboard</h3>
      <p>Player: {playerScore}</p>
      <p>Computer: {computerScore}</p>
    </div>
  );
};

export default Scoreboard;
