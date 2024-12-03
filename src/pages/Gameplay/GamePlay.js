import React, { useState, useEffect } from 'react';
import '@fontsource/roboto';
import '@fontsource/rock-salt';
import { Answer0, Answer1, Answer2, Answer3,Answer4,Answer5,Answer6,Answer7,Answer8,Answer9 } from './GamePlayAnswers';

const GamePlay = () => {
  const [playerName, setPlayerName] = useState('Player 1');
  const [question, setQuestion] = useState(null);
  const [solution, setSolution] = useState(null);
  const [displayedAnswers, setDisplayedAnswers] = useState([]);


  
  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const response = await fetch('https://marcconrad.com/uob/banana/api.php');
        const data = await response.json();
        setQuestion(data.question);
        setSolution(data.solution);

        // Determine if the solution is even or odd
        const solutionNumber = parseInt(data.solution, 10);
        const answerSets = solutionNumber % 2 === 0
          ? [Answer0, Answer2, Answer4, Answer6, Answer8]
          : [Answer1, Answer3, Answer5, Answer7, Answer9];

        // Randomly select one answer from each set
        const selectedAnswers = answerSets.map(set => {
          return set[Math.floor(Math.random() * set.length)];
        });

        setDisplayedAnswers(selectedAnswers);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchQuestion();
  }, []);

  const containerStyle = {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100vw',
    color: '#fff',
    fontFamily: 'Roboto, sans-serif',
    textAlign: 'center',
    padding: '20px',
    boxSizing: 'border-box',
    overflow: 'hidden',
  };

  const headingStyle = {
    fontSize: '3.5em',
    marginBottom: '20px',
    fontFamily: 'Rock Salt, cursive',  // Handwritten style for the heading
    textShadow: '2px 2px 8px rgba(0, 0, 0, 0.3)',
    letterSpacing: '2px',
    zIndex: 2,
  };

  const playerNameStyle = {
    fontSize: '1.5em',
    marginBottom: '30px',
    fontWeight: '300',
    maxWidth: '600px',
    lineHeight: '1.6',
    zIndex: 2,
  };

  const questionStyle = {
    fontSize: '1.2em',
    marginBottom: '20px',
    zIndex: 2,
  };

  const answerStyle = {
    fontSize: '1.2em',
    marginTop: '20px',
    zIndex: 2,
  };

  const videoStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: 1,
  };

  return (
    <div style={containerStyle}>
      <video style={videoStyle} autoPlay loop muted>
        <source src={`${process.env.PUBLIC_URL}/gameplay.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h1 style={headingStyle}>Gameplay</h1>
      <p style={playerNameStyle}>Player: {playerName}</p>
      {question && <img src={question} alt="Question" style={questionStyle} />}
      {displayedAnswers.map((answer, index) => (
        <p key={index} style={answerStyle}>{answer}</p>
      ))}
    </div>
  );
};

export default GamePlay;