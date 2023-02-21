import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ goodFeedback, neutralFeedback, badFeedback }) => (
  <div>
    <button onClick={goodFeedback}>Good</button>
    <button onClick={neutralFeedback}>Neutral</button>
    <button onClick={badFeedback}>Bad</button>
  </div>
);

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  goodFeedback: PropTypes.func.isRequired,
  neutralFeedback: PropTypes.func.isRequired,
  badFeedback: PropTypes.func.isRequired,
};
