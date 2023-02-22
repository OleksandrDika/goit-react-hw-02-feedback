import React from 'react';
import PropTypes from 'prop-types';
import { Buttonbox } from './FeedbackOptions.styled';

const FeedbackOptions = ({ goodFeedback, neutralFeedback, badFeedback }) => (
  <Buttonbox>
    <button onClick={goodFeedback}>Good</button>
    <button onClick={neutralFeedback}>Neutral</button>
    <button onClick={badFeedback}>Bad</button>
  </Buttonbox>
);

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  goodFeedback: PropTypes.func.isRequired,
  neutralFeedback: PropTypes.func.isRequired,
  badFeedback: PropTypes.func.isRequired,
};
