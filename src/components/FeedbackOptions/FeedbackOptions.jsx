import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module';
import shortid from 'shortid';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul className={css.feedbackList}>
      {options.map((option, index) => (
        <li key={shortid.generate()} className={css.feedbackItem}>
          <button
            type="button"
            name={option}
            onClick={onLeaveFeedback}
            className={css.feedbackButton}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
