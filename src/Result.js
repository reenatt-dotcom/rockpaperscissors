import React from 'react';

const Result = ({ result }) => {
  return (
    <div>
      <h3>Result</h3>
      {result && <p>{result}</p>}
    </div>
  );
};

export default Result;
