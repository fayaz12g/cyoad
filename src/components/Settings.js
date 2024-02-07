import '../css/Settings.css';
import BackButton from './BackButton';
import React, { useState } from 'react';

function Settings({ setCurrentPage, gameSounds, setGameSounds, audioRef, backgroundMusic, setBackgroundMusic, setAnimationSpeed, animationSpeed, backgroundColor, setBackgroundColor, setButtonColor, buttonColor }) {
  const handleAnimationSpeedChange = (value) => {
    const speed = parseInt(value);
    setAnimationSpeed(speed); // Update the animation speed in App component
  };

  const handleBackgroundColorChange = (e) => {
    // console.log("Background Color changed to:", e.target.value);
    setBackgroundColor(e.target.value);
  };


  const handleButtonColorChange = (e) => {
    // console.log("Button Color changed to:", e.target.value);
    setButtonColor(e.target.value);
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
      <label htmlFor="buttonColorInput">Button Color:</label>
      <input
        type="text"
        id="buttonColorInput"
        value={buttonColor}
        onChange={handleButtonColorChange}
      />
      <div className="options"></div>
      <div
        className="Button"
        style={{ backgroundColor: buttonColor }}
      ></div>
      <div className="option">
        <label htmlFor="animationSpeedSlider">Animation Speed</label>
        <input
          type="range"
          id="animationSpeedSlider"
          min="0"
          max="1459"
          value={1479 - animationSpeed} // Invert the value
          onChange={(e) => handleAnimationSpeedChange(1480 - e.target.value)} // Invert the value again before passing it to the handler
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