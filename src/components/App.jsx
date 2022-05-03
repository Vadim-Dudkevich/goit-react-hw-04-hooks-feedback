import React, { useState } from 'react';

import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

import css from './App.module.css';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const allFeedbacks = countTotalFeedback();
    let result = 0;
    if (allFeedbacks > 0) {
      result = Math.round((good * 100) / allFeedbacks);
    }
    return result;
  };

  const optionFeedbackClick = event => {
    const option = event.target.name;

    switch (option) {
      case 'good':
        setGood(prev => prev + 1);
        break;

      case 'neutral':
        setNeutral(prev => prev + 1);
        break;

      case 'bad':
        setBad(prev => prev + 1);
        break;

      default:
        break;
    }
  };

  const options = ['good', 'neutral', 'bad'];
  const feedbackSum = countTotalFeedback();
  const positiveFeedbacks = countPositiveFeedbackPercentage();

  return (
    <div className={css.feedback}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          className={css.feedbackOptions}
          options={options}
          onLeaveFeedback={optionFeedbackClick}
        ></FeedbackOptions>
      </Section>
      <Section title="Statistics">
        {feedbackSum === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={feedbackSum}
            positivePercentage={positiveFeedbacks}
          ></Statistics>
        )}
      </Section>
    </div>
  );
}
