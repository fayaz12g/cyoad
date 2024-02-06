import '../css/Settings.css';
import BackButton from './BackButton';
import React, { useState } from 'react';

function Settings({ setCurrentPage, gameSounds, setGameSounds, audioRef, backgroundMusic, setBackgroundMusic, setAnimationSpeed, animationSpeed, backgroundColor, setBackgroundColor }) {
  const handleAnimationSpeedChange = (e) => {
    const speed = parseInt(e.target.value);
    // console.log("Animation Speed changed to:", speed);
    setAnimationSpeed(speed); // Update the animation speed in App component
  };

  const handleBackgroundColorChange = (e) => {
    console.log("Background Color changed to:", e.target.value);
    setBackgroundColor(e.target.value);
  };
  
  
  return (
    <div className="Settings">
      <div className="settingsTitle">Background</div>
      <div className="options">
      <label htmlFor="backgroundColorInput">Background Color:</label>
      <input
        type="text"
        id="backgroundColorInput"
        value={backgroundColor}
        onChange={handleBackgroundColorChange}
      />
      <div
        className="sliding-background"
        style={{ backgroundColor: backgroundColor }}
      ></div>
      <div className="option">
        <label htmlFor="animationSpeedSlider">Animation Speed</label>
        <input
          type="range"
          id="animationSpeedSlider"
          min="1"
          max="1999"
          value={animationSpeed}
          onChange={handleAnimationSpeedChange}
        />
      </div>
        <div className="Settings">
        <div className="settingsTitle">Audio</div>
        </div>
        <div className="option">
          <input type="checkbox" checked={gameSounds} onClick={(e) => {setGameSounds(!gameSounds)}} />
          Game Sounds
        </div>

        <div className="option">
          <input type="checkbox" checked={backgroundMusic} onClick={(e) => {setBackgroundMusic(!backgroundMusic); backgroundMusic ? audioRef.current.pause() : audioRef.current.play()}} />
          Background Music
        </div>

      </div>
      <BackButton navigateBack={() => setCurrentPage("Home")} />
    </div>
  );
}

export default Settings;