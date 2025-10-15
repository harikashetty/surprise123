import React, { useEffect } from "react";
import "./FallingObjects.css";

function FallingObjects() {
  useEffect(() => {
    const container = document.querySelector(".falling-container");
    const numberOfObjects = 20; // reduced number of confetti papers

    for (let i = 0; i < numberOfObjects; i++) {
      const confetti = document.createElement("div");
      confetti.classList.add("confetti");
      // Random color
      const colors = ["#f44336", "#e91e63", "#ffeb3b", "#4caf50", "#2196f3", "#ff9800"];
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.left = Math.random() * 100 + "vw";
      // Same size for all papers
      confetti.style.width = "8px";  
      confetti.style.height = "12px"; 
      confetti.style.animationDuration = 3 + Math.random() * 2 + "s";
      confetti.style.animationDelay = Math.random() * 5 + "s";
      container.appendChild(confetti);
    }
  }, []);

  return <div className="falling-container"></div>;
}

export default FallingObjects;
