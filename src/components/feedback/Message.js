import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Message extends Component {
  render() {
    const { message } = this.props;
    return (
      <>
        <p>{message}</p>
      </>
    );
  }
}

Message.propTypes = {
  message: PropTypes.string,
};
