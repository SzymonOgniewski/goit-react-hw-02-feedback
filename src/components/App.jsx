import React, { Component } from 'react';
import { Message } from './feedback/Message';
import styled from 'styled-components';
import { Stats } from './feedback/Statistics';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledBtn = styled.button`
  width: 75px;
  height: 25px;
  border-radius: 10px;
  border: none;
  &:hover {
    background-color: #2196f3;
    color: white;
  }
`;
const BtnList = styled.ul`
  display: flex;
  gap: 25px;
`;
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addStatGood = () => {
    this.setState(state => ({ good: state.good + 1 }));
  };
  addStatNeutral = () => {
    this.setState(state => ({ neutral: state.neutral + 1 }));
  };
  addStatBad = () => {
    this.setState(state => ({ bad: state.bad + 1 }));
  };
  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };
  countPositiveFeedbackPercentage = () => {
    const positivePercent =
      this.countTotalFeedback() === 0
        ? 0
        : (this.state.good / this.countTotalFeedback()) * 100;
    return Number(positivePercent.toFixed(0));
  };

  render() {
    return (
      <Container>
        <h1>Please leave feedback!</h1>
        <BtnList>
          <li>
            <StyledBtn onClick={this.addStatGood}>Good</StyledBtn>
          </li>
          <li>
            <StyledBtn onClick={this.addStatNeutral}>Neutral</StyledBtn>
          </li>
          <li>
            <StyledBtn onClick={this.addStatBad}>Bad</StyledBtn>
          </li>
        </BtnList>
        {this.countTotalFeedback() === 0 ? (
          <Message message="There is no feedback" />
        ) : (
          <Stats
            statTitle="Statistics"
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            percent={this.countPositiveFeedbackPercentage()}
          />
        )}
      </Container>
    );
  }
}
