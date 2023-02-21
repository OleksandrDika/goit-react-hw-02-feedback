import React from 'react';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div>
    <h2>Statistic</h2>
    <p>Good:{good}</p>
    <p>Neutral:{neutral}</p>
    <p>Bad:{bad}</p>
    <p>Total:{total}</p>
    <p>
      Positive feedback:
      {positivePercentage ? Math.round(positivePercentage) : 0}%
    </p>
  </div>
);

export default Statistics;
