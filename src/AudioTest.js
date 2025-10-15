import React, { useRef } from "react";

export default function AudioTest() {
  const audioRef = useRef(null);

  const playAudio = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = 13; // skip first 13 seconds
      audio.play().catch((err) => console.log("Audio error:", err));
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Audio Test</h1>
      
      {/* Audio element */}
      <audio
        ref={audioRef}
        src={process.env.PUBLIC_URL + "/sounds/mp1.mp3"}
        loop
        controls // allows manual play/pause
      />

      {/* Button to trigger playback */}
      <br /><br />
      <button
        onClick={playAudio}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer"
        }}
      >
        Play Music from 13s
      </button>
    </div>
  );
}
