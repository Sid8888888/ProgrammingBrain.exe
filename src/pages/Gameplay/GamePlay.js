import React, { useState, useEffect } from 'react';
import '@fontsource/roboto';
import '@fontsource/rock-salt';
import { 
  Answer0, Answer1, Answer2, Answer3, Answer4, 
  Answer5, Answer6, Answer7, Answer8, Answer9 
} from './GamePlayAnswers';

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
        
        setQuestion(data.question);  // image URL or data for question
        setSolution(data.solution);  // the correct solution

        // Determine if the solution is even or odd
        const solutionNumber = parseInt(data.solution, 10);
        
        // Even solutions should pick answers from Answer0, Answer2, Answer4, Answer6, Answer8
        // Odd solutions should pick answers from Answer1, Answer3, Answer5, Answer7, Answer9
        const answerSets = solutionNumber % 2 === 0
          ? [Answer0, Answer2, Answer4, Answer6, Answer8]
          : [Answer1, Answer3, Answer5, Answer7, Answer9];

        // Randomly select one answer from each of the 5 answer sets (each containing 10 possible answers)
        const selectedAnswers = answerSets.map(set => {
          const randomIndex = Math.floor(Math.random() * set.length); // Random index from each set
          return set[randomIndex];  // Select the answer at the random index
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
    width: '50%',  // Resize the image to take up 50% of the container width
    marginBottom: '20px',
    borderRadius: '10px',  // Add rounded corners to the image for a softer look
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',  // Add a slight shadow to make the image pop
    zIndex: 2,
  };

  const buttonStyle = {
    fontSize: '1.5em',
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

  // Handle button hover effect
  const [hoveredButton, setHoveredButton] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredButton(index);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
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
      
      {/* Render answers as buttons */}
      {displayedAnswers.map((answer, index) => (
        <button
          key={index}
          style={{
            ...buttonStyle,
            ...(hoveredButton === index ? buttonHoverStyle : {})
          }}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          {answer}
        </button>
      ))}
    </div>
  );
};

export default GamePlay;
