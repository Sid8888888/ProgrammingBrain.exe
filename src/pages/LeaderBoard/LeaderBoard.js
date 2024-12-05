import React from 'react';
import styled from 'styled-components';
import home from '../../Icons/home.jpg';  // You can replace this with a new background image if needed.

const Leaderboard = () => {
  const leaderboardData = [
    { name: "Sid Sugananth", score: 95 },
    { name: "Raj Pragash", score: 85 },
    { name: "Prathes Vijayan", score: 75 },
    { name: "Abilash Abi", score: 65 },
    { name: "Brainny Gamer", score: 55 },
  ];

  return (
    <LeaderboardContainer>
      <LeaderboardTitle>Leaderboard</LeaderboardTitle>
      <LeaderboardList>
        {leaderboardData.map((player, index) => (
          <LeaderboardEntry key={index}>
            <Rank>Rank {index + 1}</Rank>
            <Name>{player.name}</Name>
            <Score>{player.score}</Score>
          </LeaderboardEntry>
        ))}
      </LeaderboardList>
    </LeaderboardContainer>
  );
};

const LeaderboardContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${home});
  background-size: cover;
  background-position: center;
  padding: 20px;
  box-sizing: border-box;
  overflow: hidden;
`;

const LeaderboardTitle = styled.h1`
  font-family: 'Arial', sans-serif;
  color: #fff;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 30px;
  text-transform: uppercase;
  letter-spacing: 3px;
`;

const LeaderboardList = styled.div`
  width: 100%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const LeaderboardEntry = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #2c3e50;  // Dark blue background
  border-radius: 10px;
  color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  &:hover {
    background-color: #34495e;  // Darker blue on hover
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }
`;

const Rank = styled.span`
  font-family: 'Arial', sans-serif;
  font-size: 1.2rem;
  font-weight: bold;
  color: #fff;
  background-color: #3498db;
  padding: 10px;
  border-radius: 50%;
  text-align: center;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Name = styled.span`
  flex-grow: 1;
  font-family: 'Arial', sans-serif;
  font-size: 1.2rem;
  font-weight: 500;
  text-align: center;
  text-transform: capitalize;
  color: #fff;
  padding: 0 15px;
`;

const Score = styled.span`
  font-family: 'Arial', sans-serif;
  font-size: 1.2rem;
  font-weight: bold;
  color: #e74c3c;
`;

export default Leaderboard;
