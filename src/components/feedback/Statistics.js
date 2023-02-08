import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Stats extends Component {
  render() {
    const { good, neutral, bad, total, percent } = this.props;
    return (
      <>
        <h2>{this.props.statTitle}</h2>
        <ul>
          <li>Good:{good}</li>
          <li>Neutral:{neutral}</li>
          <li>Bad:{bad}</li>
          <li>Total:{total}</li>
          <li>Positive feedback: {percent}%</li>
        </ul>
      </>
    );
  }
}

Stats.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  percent: PropTypes.number,
  statTitle: PropTypes.string,
};
