import React from 'react';

const PlayAgain = ({ handlePlayAgain }) => {
  return (
    <div>
      <button onClick={handlePlayAgain}>Play Again</button>
    </div>
  );
};

export default PlayAgain;
