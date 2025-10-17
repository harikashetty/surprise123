import React, { useRef, useState } from "react";
import "./App.css";
import StartPage from "./StartPage";
import FallingObjects from "./FallingObjects";

function App() {
  const [showMain, setShowMain] = useState(false);
  const [showSlideshow, setShowSlideshow] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [candlesLit, setCandlesLit] = useState(true);
  const [candleMessage, setCandleMessage] = useState("");

  // Audio states
  const audioRef = useRef(null);
  const [musicStarted, setMusicStarted] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const music = process.env.PUBLIC_URL + "/sounds/mp2.mp3";

  // Ensure audio exists
  const ensureAudio = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(music);
      audioRef.current.loop = true;
      audioRef.current.currentTime = 13;
      audioRef.current.volume = volume;
      audioRef.current.muted = isMuted;
    }
    return audioRef.current;
  };

  const startMusic = () => {
    const audio = ensureAudio();
    if (!musicStarted) {
      audio
        .play()
        .then(() => setMusicStarted(true))
        .catch((err) => console.log("Audio play error:", err));
    }
  };

  const toggleMute = () => {
    const audio = ensureAudio();
    audio.muted = !audio.muted;
    setIsMuted(audio.muted);
  };

  const increaseVolume = () => {
    const audio = ensureAudio();
    const newVol = Math.min(audio.volume + 0.1, 1);
    audio.volume = newVol;
    setVolume(newVol);
  };

  const decreaseVolume = () => {
    const audio = ensureAudio();
    const newVol = Math.max(audio.volume - 0.1, 0);
    audio.volume = newVol;
    setVolume(newVol);
  };

  const blowOutCandles = () => {
    setCandlesLit(false);
    setCandleMessage("All candles blown! 🎉 Make a wish! ✨");
  };

  const relightCandles = () => {
    setCandlesLit(true);
    setCandleMessage("Blow out the candles and make a wish! 🎂");
  };

  const photos = [
    "photo2.jpg", "photo4.jpg", "photo5.jpg", "photo6.jpg", "photo7.jpg",
    "photo8.jpg", "photo9.jpg", "photo10.jpg", "photo11.jpg", "photo13.jpg",
    "photo14.jpg", "photo15.jpg", "photo16.jpg", "photo17.jpg"
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

  if (!showMain) {
    return (
      <StartPage
        onStart={() => {
          setShowMain(true);
          startMusic();
        }}
      />
    );
  }

  return (
    <div className="App">
      <FallingObjects />

      <h1>🎉 Happy Birthday! 🎉</h1>

      {/* Slideshow Intro */}
      <div className="slideshow-section">
        <div className="floating-container">
          <p className="floating-text">
            Here are some beautiful moments we spent together. Click below to start the slideshow 💖
          </p>
        </div>
        {!showSlideshow && (
          <button
            className="start-slideshow-btn"
            onClick={() => setShowPopup(true)}
          >
            Start Slideshow 📸
          </button>
        )}
      </div>

      {/* Popup Section */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h2>💖 Get Ready!</h2>
            <p>Press OK to go down and relive the best memories! 🎉</p>
            <button
              className="popup-btn ok"
              onClick={() => {
                setShowPopup(false);
                setShowSlideshow(true);
                // wait for slideshow to render, then scroll to it
                setTimeout(() => {
                  const slideshowSection = document.querySelector(".slideshow");
                  if (slideshowSection) {
                    slideshowSection.scrollIntoView({ behavior: "smooth", block: "center" });
                  }
                }, 600);
              }}
            >
              ✅ OK
            </button>
          </div>
        </div>
      )}

      {/* Photos Grid */}
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
          <video key={i} src={`/videos/${video}`} controls />
        ))}
      </div>

      {/* Cake Section */}
      <div className="cake-section">
        <div className="cake-container">
          <div className="candles">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="candle">
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

        {candleMessage && <p className="candle-message">{candleMessage}</p>}
      </div>

      {/* Slideshow */}
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

      {/* Music Controls */}
      <div
        className="music-controls-bottom-right"
        style={{ position: "fixed", bottom: "10px", right: "10px", color: "white" }}
      >
        <button onClick={toggleMute}>{isMuted ? "🔇" : "🔊"}</button>
        <button onClick={increaseVolume}>🔼</button>
        <button onClick={decreaseVolume}>🔽</button>
        <p style={{ margin: 0 }}>Volume: {Math.round(volume * 100)}%</p>
      </div>
    </div>
  );
}

export default App;
