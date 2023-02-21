import React from 'react';

const FeedbackOptions = ({ goodFeedback, neutralFeedback, badFeedback }) => (
  <div>
    <button onClick={goodFeedback}>Good</button>
    <button onClick={neutralFeedback}>Neutral</button>
    <button onClick={badFeedback}>Bad</button>
  </div>
);

export default FeedbackOptions;
