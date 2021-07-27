import './index.css';

import React, { useState } from "react";
import Statistics from "./components/Statistics";
import FeedbackOptions from "./components/Feedback";
import Section from "./components/Section";
import Notification from "./components/Notification";

const Feedback =()=> {
  const [good,setGood]=useState(0)
  const [neutral,setNeutral]=useState(0)
  const [bad,setBad]=useState(0)


  const addToGood = () => {
    setGood(good+1)
  };

  const addToNeutral = () => {
    setNeutral(neutral+1)
  };

  const addToBad = () => {
    setBad(bad+1)
  };
  const countTotalFeedback =
    bad+neutral+good


  const countPositiveFeedbackPercentage = (good * 100) /
        (good + neutral + bad)


    return (
        <>
          <Section title="Please leave feedback">
            <FeedbackOptions
                addToGood={addToGood}
                addToNeutral={addToNeutral}
                addToBad={addToBad}
            />
          </Section>
          <Section title="Statistics">
            {countTotalFeedback ? (
                <Statistics
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    total={countTotalFeedback}
                    positivePercentage={countPositiveFeedbackPercentage}
                />
            ) : (
                <Notification message="No feedback given" />
            )}
          </Section>
        </>
    );

}

export default Feedback;