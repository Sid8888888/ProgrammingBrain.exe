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
import Cookies from 'universal-cookie';

const GamePlay = () => {
  const [playerName, setPlayerName] = useState('Player 1');
  const [question, setQuestion] = useState(null);
  const [solution, setSolution] = useState(null);
  const [displayedAnswers, setDisplayedAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(900); // 15 minutes in seconds
  const [score, setScore] = useState(0); // Initialize score
  const [EditedArray, setEditedArray] = useState([]);

  useEffect(() => {
    const cookies = new Cookies();
    const customerName = cookies.get('customerName');
    setPlayerName(customerName)
  }, []);

  // Fetch a new question from the API
  const fetchQuestion = async () => {
    try {
      const response = await fetch('https://marcconrad.com/uob/banana/api.php');
      const data = await response.json();
      
      setQuestion(data.question); 
      setSolution(parseInt(data.solution, 10));  // Convert solution to an integer

      const solutionNumber = parseInt(data.solution, 10);
      
      const answerSets = solutionNumber % 2 === 0
        ? [Answer0, Answer2, Answer4, Answer6, Answer8]
        : [Answer1, Answer3, Answer5, Answer7, Answer9];

      const selectedAnswers = answerSets.map(set => {
        const randomIndex = Math.floor(Math.random() * set.length); 
        return set[randomIndex]; 
      });

      const arrayOfA = answerSets.map(set => {
        const randomIndex = Math.floor(Math.random() * set.length); 
        const data = {
          id: set,
          value: set[randomIndex]
        }
       
        return data; 
      });

      setEditedArray(arrayOfA)

      console.log('Array of A:', arrayOfA);

      setDisplayedAnswers(selectedAnswers);  // Update the displayed answers
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

  // Handle answer click event (using explicit if conditions)
  const handleAnswerClick = (clickedAnswer) => {
    let updatedScore = score;

    console.log('Solution:', solution);
    console.log('Clicked Answer:', clickedAnswer);

    // Explicit if conditions to check if the clicked answer matches the solution
    if (solution === 0 && clickedAnswer === Answer0) {
      updatedScore += 5;
    } else if (solution === 1 && clickedAnswer === Answer1) {
      updatedScore += 5;
    } else if (solution === 2 && clickedAnswer === Answer2) {
      updatedScore += 5;
    } else if (solution === 3 && clickedAnswer === Answer3) {
      updatedScore += 5;
    } else if (solution === 4 && clickedAnswer === Answer4) {
      updatedScore += 5;
    } else if (solution === 5 && clickedAnswer === Answer5) {
      updatedScore += 5;
    } else if (solution === 6 && clickedAnswer === Answer6) {
      updatedScore += 5;
    } else if (solution === 7 && clickedAnswer === Answer7) {
      updatedScore += 5;
    } else if (solution === 8 && clickedAnswer === Answer8) {
      updatedScore += 5;
    } else if (solution === 9 && clickedAnswer === Answer9) {
      updatedScore += 5;
    } else {
      updatedScore -= 4; // If clicked answer is wrong
    }

    setScore(updatedScore); // Update the score
    fetchQuestion();  // Fetch a new question after answering
  };

  // Handle leave button click event
  const handleLeaveClick = () => {
    let updatedScore = score - 1; // Deduct 1 point for skipping
    setScore(updatedScore); // Update the score
    fetchQuestion(); // Fetch a new question
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

  const scoreBoxStyle = {
    position: 'absolute',
    top: '185px',
    right: '20px',
    background: 'rgba(0, 0, 0, 0.5)',
    color: '#fff',
    padding: '20px',
    fontSize: '1.8em',
    fontWeight: 'bold',
    borderRadius: '10px',
    boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.3)',
    zIndex: 3,
  };

  const answerContainerStyle = {
    display: 'flex',  // Make the answers display horizontally
    justifyContent: 'center',  // Center the answers
    flexWrap: 'wrap',  // Wrap answers if they overflow
    gap: '20px',  // Space out answers a bit more
    zIndex: 2,  // Ensure answers are on top of other elements
  };

  const answerTextStyle = {
    fontFamily: 'monospace',  // Use monospace font for code-like answers
    fontSize: '1.1em',  // Slightly larger font for readability
    lineHeight: '1.5',
    textAlign: 'center',
    padding: '10px',
    borderRadius: '8px',
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

      {/* Score Box */}
      <div style={scoreBoxStyle}>
        Score: {score}
      </div>

      {/* Skip Button */}
      <button
        style={leaveButtonStyle}
        onClick={handleLeaveClick}
      >
        Skip Question
        <span style={arrowStyle}>→</span>  
      </button>

      {/* Render answers horizontally */}
      <div style={answerContainerStyle}>
        <Container>
          <Row>
            {EditedArray.map((answer, index) => (
              <Col key={index}>
                <button
                  style={buttonStyle}
                  onClick={() => handleAnswerClick(answer.id)}  // Pass the specific answer here
                >
                  <span style={answerTextStyle}>{answer.value}</span>
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
