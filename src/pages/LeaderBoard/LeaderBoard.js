import React from 'react';
import styled from 'styled-components';

const Leaderboard = () => {
  const leaderboardData = [
    { name: "Alice", score: 95 },
    { name: "Bob", score: 85 },
    { name: "Charlie", score: 75 },
    { name: "Diana", score: 65 },
    { name: "Ethan", score: 55 },
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
  background-color: #2c3e50;
  padding: 20px;
  box-sizing: border-box;
`;

const LeaderboardTitle = styled.h1`
  color: #ffffff;
  margin-bottom: 20px;
`;

const LeaderboardList = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const LeaderboardEntry = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #34495e;
  border-radius: 5px;
  color: #ffffff;
`;

const Rank = styled.span`
  font-weight: bold;
  color: #3498db;
`;

const Name = styled.span`
  flex-grow: 1;
  text-align: center;
`;

const Score = styled.span`
  font-weight: bold;
  color: #e74c3c;
`;

export default Leaderboard;