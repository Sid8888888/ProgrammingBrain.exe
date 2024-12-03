import React from 'react';
import { useNavigate } from 'react-router-dom';
import '@fontsource/roboto';
import '@fontsource/rock-salt';

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the /gameplay route
    navigate('/gameplay');
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    background: 'linear-gradient(135deg, #4e73df, #1cc88a)',  // Gradient background
    color: '#fff',
    fontFamily: 'Roboto, sans-serif',
    textAlign: 'center',
    padding: '20px',
    boxSizing: 'border-box',
    overflow: 'hidden',
    animation: 'fadeIn 2s ease-in-out',
  };

  const headingStyle = {
    fontSize: '3.5em',
    marginBottom: '20px',
    fontFamily: 'Rock Salt, cursive',  // Handwritten style for the heading
    textShadow: '2px 2px 8px rgba(0, 0, 0, 0.3)',
    letterSpacing: '2px',
  };

  const paragraphStyle = {
    fontSize: '1.5em',
    marginBottom: '30px',
    fontWeight: '300',
    maxWidth: '600px',
    lineHeight: '1.6',
  };

  const imageStyle = {
    width: '320px',
    height: 'auto',
    marginBottom: '30px',
    borderRadius: '15px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s ease-in-out',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Welcome to the Quiz Game!</h1>
      <p style={paragraphStyle}>
        Test your knowledge and have fun! Join now to challenge your brain with exciting quizzes on various topics.
      </p>
      <img
        src={`${process.env.PUBLIC_URL}/homephoto.jpg`}
        alt="Game"
        style={imageStyle}
      />
      <button
        style={{
          backgroundColor: '#fff',
          color: '#4e73df',
          padding: '12px 30px',
          borderRadius: '30px',
          fontSize: '1.2em',
          border: 'none',
          cursor: 'pointer',
          fontWeight: '600',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          transition: 'background-color 0.3s, transform 0.3s',
        }}
        onMouseEnter={(e) => e.target.style.backgroundColor = '#4e73df'}
        onMouseLeave={(e) => e.target.style.backgroundColor = '#fff'}
        onClick={handleClick}
      >
        Start Game
      </button>
    </div>
  );
};

export default Home;