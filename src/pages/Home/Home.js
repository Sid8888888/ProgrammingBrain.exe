import React, { Component } from 'react';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeLeft: 600, // 10 minutes in seconds
      timerRunning: false,
      quizNumber: null,
    };
    this.timer = null;
  }

  startTimer = () => {
    this.setState({ timerRunning: true });
    this.timer = setInterval(() => {
      this.setState(prevState => {
        if (prevState.timeLeft <= 1) {
          clearInterval(this.timer);
          this.setState({ timerRunning: false, timeLeft: 600 });
          return { timeLeft: 600 };
        }
        return { timeLeft: prevState.timeLeft - 1 };
      });
    }, 1000);
  };

  fetchQuizNumber = async () => {
    const randomNum = Math.floor(Math.random() * 10); // Generate a random number between 0 and 9
    try {
      const response = await fetch('https://marcconrad.com/uob/banana/api.php');
      const data = await response.json();
      const apiNum = data.solution;
      const combinedNum = `${randomNum}${apiNum}`;
      this.setState({ quizNumber: combinedNum });
    } catch (error) {
      console.error('Error fetching the API number:', error);
    }
  };

  render() {
    const { timeLeft, timerRunning, quizNumber } = this.state;

    return (
      <div>
        <h1>Home</h1>
        {!timerRunning && (
          <button onClick={this.startTimer}>Start Timer</button>
        )}
        {timerRunning && (
          <div>
            <p>Time left: {Math.floor(timeLeft / 60)}:{timeLeft % 60}</p>
          </div>
        )}
        <button onClick={this.fetchQuizNumber}>Fetch Quiz Number</button>
        {quizNumber && <p>Show quiz number: {quizNumber}</p>}
      </div>
    );
  }
}