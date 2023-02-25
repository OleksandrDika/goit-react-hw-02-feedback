import React from 'react';
import PropTypes from 'prop-types';
import { Buttonbox } from './FeedbackOptions.styled';

const FeedbackOptions = ({
  goodFeedback,
  neutralFeedback,
  badFeedback,
  options,
  // onLeaveFeedback,
}) => (
  <Buttonbox>
    <button onClick={goodFeedback} name="good">
      Good
    </button>
    <button onClick={neutralFeedback} name="neutral">
      Neutral
    </button>
    <button onClick={badFeedback} name="bed">
      Bad
    </button>
  </Buttonbox>
);

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  goodFeedback: PropTypes.func.isRequired,
  neutralFeedback: PropTypes.func.isRequired,
  badFeedback: PropTypes.func.isRequired,
};
