import React from 'react';
import ChatBubbleContainer from './ChatBubbleContainer';

const StartBtn = (props) => {
    const selectorList = [
        { tag: 1, label: "🎮 Game Levels" },
        { tag: 2, label: "🏆 Challenges" },
        { tag: 3, label: "📝 Hints/Tips" },
        { tag: 4, label: "📊 Scores/Leaderboard" },
        { tag: 5, label: "💬 Ask a Question" },
        { tag: 6, label: "📢 Report a Bug" },
    ];

    return (
        <div className="startBtn-container">
            <p>Welcome to the Programming Game Bot! 👾</p>
            <p>How can I assist you today? Select the option that best fits your current need:</p>
            <ChatBubbleContainer props={props} selectorList={selectorList} />
        </div>
    );
};

export default StartBtn;
