import React from 'react';

const PlayerChoice = ({ choices, playerChoice, handlePlayerChoice }) => {
  return (
    <div>
      <h3>Your Choice</h3>
      <div className="choices">
        {choices.map((choice) => (
          <button
            key={choice}
            onClick={() => handlePlayerChoice(choice)}
            disabled={playerChoice !== ''}
          >
            {choice}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PlayerChoice;
