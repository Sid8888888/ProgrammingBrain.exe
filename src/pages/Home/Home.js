import React from 'react';
import { useNavigate } from 'react-router-dom';
import '@fontsource/roboto';
import '@fontsource/rock-salt';
import home from "../../Icons/home.jpg"

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
    color: '#fff',
    fontFamily: 'Roboto, sans-serif',
    textAlign: 'center',
    // padding: '20px',
    boxSizing: 'border-box',
    overflow: 'hidden',
    animation: 'fadeIn 2s ease-in-out',
    backgroundImage: `url(${home})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover', // Ensures the image covers the entire container
    width: '100%',
};

  const headingStyle = {
      fontSize: '3.5em',
      marginBottom: '20px',
      fontFamily: 'Rock Salt, cursive',  // Handwritten style for the heading
      textShadow: '2px 2px 8px rgba(0, 0, 0, 0.3)',
      fontWeight: 'bold', // Make the text bold
      WebkitTextStroke: '1px black', // Add black outline
      paddingTop: '70px',
  };

   const paragraphStyle = {
      fontSize: '2em',
      marginBottom: '30px',
      fontWeight: 'bold', // Make the text bold
      maxWidth: '600px',
      lineHeight: '1.6',
      WebkitTextStroke: '1px black', // Add black outline
      color: '#fff', // Set text color to white
      textShadow: `
          -1px -1px 0 #000,  
           1px -1px 0 #000,
          -1px  1px 0 #000,
           1px  1px 0 #000,
          -2px -2px 0 #fff,  
           2px -2px 0 #fff,
          -2px  2px 0 #fff,
           2px  2px 0 #fff
      `, // Add white outline
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
     
      <img
        src={`${process.env.PUBLIC_URL}/homephoto.jpg`}
        alt="Game"
        style={imageStyle}
      />
          <button
        style={{
          backgroundColor: '#2c3e50',
          color: '#fff',
          padding: '12px 30px',
          borderRadius: '5px', // Make the button square
          fontSize: '1.2em',
          border: 'none',
          cursor: 'pointer',
          fontWeight: '600',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          transition: 'background-color 0.3s, transform 0.3s, box-shadow 0.3s',
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = '#000000';
          e.target.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.2)';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = '#4e73df';
          e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
        }}
        onClick={handleClick}
      >
        Start Quiz
      </button>
      <p style={paragraphStyle}>
        Test your knowledge and have fun! Join now to challenge your brain with exciting quizzes on various topics.
      </p>
    </div>
  );
};

export default Home;