import React, { Component } from 'react';
import PropTypes from 'prop-types';
export class Feedback extends Component {
  render() {
    return (
      <>
        <h1>{this.props.feedbackOpts}</h1>
        <ul>
          <li>
            <button>{this.props.optBtnG}</button>
          </li>
          <li>
            <li>
              <button>{this.props.optBtnN}</button>
            </li>
            <button>{this.props.optBtnB}</button>
          </li>
        </ul>
      </>
    );
  }
}
Feedback.propTypes = {
  feedbackOpts: PropTypes.string,
  optBtnG: PropTypes.string,
  optBtnN: PropTypes.string,
  optBtnB: PropTypes.string,
};
