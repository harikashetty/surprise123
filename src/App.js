import React, { useState } from "react";
import "./App.css";
import StartPage from "./StartPage"; // Ensure StartPage.js exists
import FallingObjects from "./FallingObjects";

function App() {
  const [showMain, setShowMain] = useState(false);
  const [showSlideshow, setShowSlideshow] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [candlesLit, setCandlesLit] = useState(true);

  const blowOutCandles = () => setCandlesLit(false);
  const relightCandles = () => setCandlesLit(true);

  const photos = [
    "photo1.jpg","photo2.jpg","photo3.jpg","photo4.jpg","photo5.jpg",
    "photo6.jpg","photo7.jpg","photo8.jpg","photo9.jpg","photo10.jpg",
    "photo11.jpg","photo12.jpg","photo13.jpg","photo14.jpg","photo15.jpg",
    "photo16.jpg","photo17.jpg"
  ];

  const photoCaptions = [
    "Your coming made my birthday memorable",
    "Celebrating with friends is the best!",
    "A surprise I will never forget",
    "Beautiful cake and laughter",
    "Candle moments 💖",
    "Joyful memories together",
    "Laughing endlessly",
    "Special moments captured",
    "Friends forever",
    "Fun times",
    "Sharing smiles",
    "Dancing all night",
    "Heartwarming wishes",
    "Unforgettable hugs",
    "Amazing surprises",
    "Birthday joy",
    "Memories to cherish"
  ];

  const videos = ["video1.mp4", "video2.mp4"];

  // 👉 If not started yet → show StartPage
  if (!showMain) {
    return <StartPage onStart={() => setShowMain(true)} />;
  }

  return (
    <div className="App">
      <FallingObjects />

      <h1>🎉 Happy Birthday! 🎉</h1>

      {/* Floating Slideshow Intro Section */}
      <div className="slideshow-section">
        <div className="floating-container">
          <p className="floating-text">
            Here are some beautiful moments we spent together. Click below to start the slideshow 💖
          </p>
        </div>

        {!showSlideshow && (
          <button
            className="start-slideshow-btn"
            onClick={() => setShowSlideshow(true)}
          >
            Start Slideshow 📸
          </button>
        )}
      </div>

      {/* Photos Section */}
      <div className="media">
        {photos.map((photo, i) => {
          let className = "photo-small";
          if (i === 6 || i === 12 || i === 13) className = "photo-big";
          if (i === 2) className = "photo-3";

          return (
            <div key={i} className="photo-container">
              <img
                src={`/images/${photo}`}
                alt={`Memory ${i + 1}`}
                className={className}
              />
              <span className="photo-caption">{photoCaptions[i]}</span>
            </div>
          );
        })}
      </div>

      {/* Videos Section */}
      <div className="media-videos">
        {videos.map((video, i) => (
          <video
            key={i}
            src={`/videos/${video}`}
            controls
            className="video-small"
          />
        ))}
      </div>

      {/* Cake Section */}
      <div className="cake-section">
        <div className="cake-container">
          <div className="candles">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="candle">
                <div className="wax"></div>
                {candlesLit && <div className="flame"></div>}
              </div>
            ))}
          </div>

          <div className="cake-layers">
            <div className="layer layer-top"></div>
            <div className="layer layer-middle"></div>
            <div className="layer layer-bottom"></div>
          </div>
        </div>

        <div className="cake-buttons">
          {candlesLit ? (
            <button onClick={blowOutCandles}>💨 Blow Out Candles</button>
          ) : (
            <button onClick={relightCandles}>🔥 Light Candles Again</button>
          )}
        </div>
      </div>

      {/* Slideshow (Optional) */}
      {showSlideshow && (
        <div className="slideshow">
          <img
            src={`/images/${photos[currentIndex]}`}
            alt="Memory"
            className="slideshow-img"
          />
          <p>{photoCaptions[currentIndex]}</p>
          <button
            onClick={() =>
              setCurrentIndex((prev) => (prev + 1) % photos.length)
            }
          >
            Next ➡
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
