import React, { Component } from 'react';

import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
// import { css } from 'styled-components';

import css from './App.module.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const allFeedbacks = this.countTotalFeedback();
    let result = 0;
    if (allFeedbacks > 0) {
      result = Math.round((good * 100) / allFeedbacks);
    }
    return result;
  };

  optionFeedbackClick = event => {
    const option = event.target.name;

    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    const feedbackSum = this.countTotalFeedback();
    const positiveFeedbacks = this.countPositiveFeedbackPercentage();

    return (
      <div className={css.feedback}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.optionFeedbackClick}
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
}

export default App;
