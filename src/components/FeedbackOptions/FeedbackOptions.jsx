import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';
import shortid from 'shortid';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <>
      <ul className={css.feedbackList}>
        {options.map((option, index) => (
          <li className={css.feedbackItem} key={shortid.generate()}>
            <button
              className={css.feedbackBtn}
              type="button"
              name={option}
              onClick={onLeaveFeedback}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
