import React from "react";
import "./StartPage.css";

function StartPage({ onStart }) {
  return (
    <div className="start-page">
      <video autoPlay loop muted playsInline className="bg-video">
        <source src="/videos/i1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="overlay">
        <h1>🎉 Happy Birthday My Best Friend 🎉</h1>
        <button onClick={onStart}>Let's Go!</button>
      </div>
    </div>
  );
}

export default StartPage;
