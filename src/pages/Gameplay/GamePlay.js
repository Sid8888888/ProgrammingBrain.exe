import React, { useState, useEffect } from 'react';
import '@fontsource/roboto';
import '@fontsource/rock-salt';
import { 
  Answer0, Answer1, Answer2, Answer3, Answer4, 
  Answer5, Answer6, Answer7, Answer8, Answer9 
} from './GamePlayAnswers';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const GamePlay = () => {
  const [playerName, setPlayerName] = useState('Player 1');
  const [question, setQuestion] = useState(null);
  const [solution, setSolution] = useState(null);
  const [displayedAnswers, setDisplayedAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(900); // 15 minutes in seconds
  const [score, setScore] = useState(0); // Player score

  // Fetch a new question from the API
  const fetchQuestion = async () => {
    try {
      const response = await fetch('https://marcconrad.com/uob/banana/api.php');
      const data = await response.json();
      
      setQuestion(data.question); 
      setSolution(data.solution);  

      const solutionNumber = parseInt(data.solution, 10);
      
      const answerSets = solutionNumber % 2 === 0
        ? [Answer0, Answer2, Answer4, Answer6, Answer8]
        : [Answer1, Answer3, Answer5, Answer7, Answer9];

      const selectedAnswers = answerSets.map(set => {
        const randomIndex = Math.floor(Math.random() * set.length); 
        return set[randomIndex]; 
      });

      setDisplayedAnswers(selectedAnswers);
    
      setTimeLeft(900);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchQuestion();
  }, []);

  useEffect(() => {
    if (timeLeft <= 0) return; 

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer); 
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const containerStyle = {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '170vh',
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
    marginBottom: '0px',
    marginTop: '-100px',
    fontFamily: 'Rock Salt, cursive', 
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
    width: '50%',  
    maxWidth: '600px', 
    marginBottom: '20px',
    borderRadius: '10px', 
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',  
    zIndex: 2,
  };

  const buttonStyle = {
    fontSize: '1.2em',
    padding: '15px 30px',
    margin: '10px',
    border: 'none',
    borderRadius: '8px',
    backgroundColor: '#fff',
    color: '#333',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'transform 0.3s ease, background-color 0.3s ease',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
    zIndex: 2,
  };

  const buttonHoverStyle = {
    transform: 'scale(1.05)',
    backgroundColor: '#2c3e50',
    color: '#fff',
  };

  const leaveButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#e74c3c',
    color: '#fff',
    fontSize: '1.2em',
    position: 'absolute',
    top: '29%',
    right: '0',
    marginRight: '20px',
    transform: 'translateY(-50%)',
    paddingRight: '20px',  
    alignItems: 'center',  
    justifyContent: 'center' 
  };

  const arrowStyle = {
    marginLeft: '10px', 
    fontSize: '1.8em'
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

  const countdownStyle = {
    position: 'absolute',
    top: '70px',  
    right: '20px',
    background: 'linear-gradient(145deg, #004080, #0066cc)',  
    color: '#fff',
    padding: '20px 40px',
    fontSize: '2.2em', 
    fontWeight: 'bold',
    borderRadius: '20px',
    boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.3)',
    zIndex: 3,
    letterSpacing: '1px',
    border: '2px solid #fff', 
  };

  const scoreStyle = {
    position: 'absolute',
    top: '150px',  
    right: '20px',
    background: 'linear-gradient(145deg, #004080, #0066cc)',  
    color: '#fff',
    padding: '20px 40px',
    fontSize: '2.2em', 
    fontWeight: 'bold',
    borderRadius: '20px',
    boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.3)',
    zIndex: 3,
    letterSpacing: '1px',
    border: '2px solid #fff', 
  };

  const answerContainerStyle = {
    display: 'flex',  // Make the answers display horizontally
    justifyContent: 'center',  // Center the answers
    flexWrap: 'wrap',  // Wrap answers if they overflow
    gap: '20px',  // Space out answers a bit more
    zIndex: 2,  // Ensure answers are on top of other elements
  };

  const answerTextStyle = {
    // Ensure long lines break correctly
    fontFamily: 'monospace',  // Use monospace font for code-like answers
    fontSize: '1.1em',  // Slightly larger font for readability
    lineHeight: '1.5',
    textAlign: 'center',
    padding: '10px',
    
    borderRadius: '8px',
    
  };

  const [hoveredButton, setHoveredButton] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredButton(index);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
  };

  const handleAnswerClick = (answer) => {
    const match = answer.match(/\d+$/);
    if (match && match[0] === solution) {
      setScore(score + 5);
    } else {
      setScore(score - 4);
    }
    fetchQuestion();
  };

  const handleLeaveClick = () => {
    fetchQuestion();
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
      
      {/* Countdown Timer */}
      <div style={countdownStyle}>
        {formatTime(timeLeft)}
      </div>

      {/* Player Score */}
      <div style={scoreStyle}>
        Score: {score}
      </div>

      <button
        style={leaveButtonStyle}
        onClick={handleLeaveClick}  // When clicked, fetch a new question
      >
        Skip Question
        <span style={arrowStyle}>→</span>  
      </button>
      
      {/* Render answers horizontally */}
      <div style={answerContainerStyle}>
      <Container>
      <Row>
      {displayedAnswers.map((answer, index) => (
        <Col key={index}>
        <button
            style={{
              ...buttonStyle,
              ...(hoveredButton === index ? buttonHoverStyle : {}),
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleAnswerClick(answer)}  // When an answer is clicked, fetch a new question
          >
            <span style={answerTextStyle}>{answer}</span>
          </button>
        </Col>
        ))}
      </Row>
    </Container>
    </div>
    </div>
  );
};

export default GamePlay;