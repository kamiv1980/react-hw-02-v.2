import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  const percentGoodFeed = positivePercentage
    ? positivePercentage.toFixed()
    : 0;
  return (
    <>
      <p className={styles.statistics}>Good: {good}</p>
      <p className={styles.statistics}>Neutral: {neutral}</p>
      <p className={styles.statistics}>Bad: {bad}</p>
      <p className={styles.statistics}>Total: {total}</p>
      <p className={styles.statistics}>
        Positive feedback: {percentGoodFeed} %
      </p>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
