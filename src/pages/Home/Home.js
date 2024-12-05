import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '@fontsource/roboto';
import '@fontsource/rock-salt';
import home from "../../Icons/home.jpg";
import Cookies from 'universal-cookie';

const Home = () => {
  const [programmingQuote, setProgrammingQuote] = useState({ quote: '', author: '' });
  const navigate = useNavigate();

  // Fetch programming quote on component mount
  useEffect(() => {
    fetch('https://programming-quotesapi.vercel.app/api/random')
      .then(response => response.json())
      .then(data => setProgrammingQuote({
        quote: data?.quote || 'No quote found',
        author: data?.author || 'Unknown Author'
      }))
      .catch(error => console.error('Error fetching programming quote:', error));
  }, []);

  const handleClick = () => {
    // Navigate to the /gameplay route
    const cookies = new Cookies();
    const customerId = cookies.get('customerId');
    if (!customerId) {
      navigate('/login');
      return;
    } else {
      navigate('/gameplay');
    }
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
    backgroundImage: `url(${home})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: '100%',
    position: 'relative',
  };

  const headingStyle = {
    fontSize: '3.5em',
    marginBottom: '20px',
    fontFamily: 'Rock Salt, cursive',
    textShadow: '2px 2px 8px rgba(0, 0, 0, 0.3)',
    fontWeight: 'bold',
    paddingTop: '85px',
    marginTop: '0px',
  };

  const paragraphStyle = {
    fontSize: '2em',
    marginBottom: '30px',
    fontWeight: 'bold',
    maxWidth: '600px',
    lineHeight: '1.6',
    color: '#d7dbdd',
  };

  const imageStyle = {
    width: '320px',
    height: '300px',
    marginBottom: '30px',
    borderRadius: '15px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s ease-in-out',
  };

  const factBoxStyle = {
    marginTop: '10px',
    backgroundColor: '#2c3e50',
    color: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
    width: '80%',
    maxWidth: '600px',
    fontSize: '0.8em',
    textAlign: 'center',
    lineHeight: '1.5',
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
          borderRadius: '5px',
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

      {/* Programming Quote Section */}
      {programmingQuote.quote && (
        <div style={factBoxStyle}>
          <h3>Programming Quote of the Moment</h3>
          <p>"{programmingQuote.quote}"</p>
          <p><em>- {programmingQuote.author}</em></p>
        </div>
      )}
    </div>
  );
};

export default Home;
