// StartPage.js
import React from "react";
import "./StartPage.css";

function StartPage({ onStart }) {
  const backgroundImage = process.env.PUBLIC_URL + "/images/bg1.jpg";
  const friendPic = process.env.PUBLIC_URL + "/images/photo6.jpg"; // put your friend's image here

  return (
    <div className="start-page-bg" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="start-page-overlay"></div>

      <div className="start-page-emojis">
        <span>🎈</span>
        <span>🎁</span>
        <span>🎂</span>
        <span>🎉</span>
        <span>✨</span>
      </div>

      <div className="start-page-content">
        {/* Friend's Profile Picture */}
        <img src={friendPic} alt="Friend" className="friend-pic" />

        <h1 className="start-page-heading"> Happy Birthday </h1>
        <h2 className="start-page-subheading">My Friend! 🎊</h2>
        <p className="start-page-message">
          Today is all about celebrating YOU! Get ready for an amazing journey filled
          with memories, surprises, and lots of love! ✨
        </p>
        <button className="start-page-btn" onClick={onStart}>
          Let's Go! 🎈
        </button>
      </div>
    </div>
  );
}

export default StartPage;
