import React, { useEffect } from "react";
import "./FallingObjects.css";

const objects = ["🎈", "❤", "⭐"];

function FallingObjects() {
  useEffect(() => {
    const container = document.querySelector(".falling-container");

    const createObject = () => {
      const object = document.createElement("div");
      object.classList.add("falling-object");
      object.textContent = objects[Math.floor(Math.random() * objects.length)];
      object.style.left = Math.random() * 100 + "vw";
      object.style.animationDuration = 3 + Math.random() * 4 + "s";
      object.style.fontSize = 20 + Math.random() * 30 + "px";
      container.appendChild(object);

      setTimeout(() => object.remove(), 7000);
    };

    const interval = setInterval(createObject, 500);
    return () => clearInterval(interval);
  }, []);

  return <div className="falling-container"></div>;
}

export default FallingObjects;
