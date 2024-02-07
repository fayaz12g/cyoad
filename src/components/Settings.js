import '../css/Settings.css';
import BackButton from './BackButton';
import React, { useState } from 'react';

function Settings({ setCurrentPage, gameSounds, setGameSounds, audioRef, backgroundMusic, setBackgroundMusic, 
  setAnimationSpeed, animationSpeed, backgroundColor, setBackgroundColor, setButtonColor, buttonColor,
  buttonTextColor, setButtonTextColor, buttonTextOutlineColor, setButtonTextOutlineColor,
  setButtonTextOutlineThick,  buttonTextOutlineThick}) {
  
  const [activeTab, setActiveTab] = useState('Background');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

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
  
  const handleButtonTextColorChange = (e) => {
    // console.log("Button Text Color changed to:", e.target.value);
    setButtonTextColor(e.target.value);
  };

  const handleButtonTextOutlineColorChange = (e) => {
    // console.log("Button Text Ouline Color changed to:", e.target.value);
    setButtonTextOutlineColor(e.target.value);
  };
  
  const handleButtonTextOutlineThickChange = (e) => {
    // console.log("Button Text Ouline Thickeness changed to:", e.target.value);
    setButtonTextOutlineThick(e.target.value);
  };
  
  return (
    <div className="Settings">
      <div className="tabContainer">
        <button className={`tab ${activeTab === 'Background' ? 'active' : ''}`} style={{ backgroundColor: buttonColor, color: buttonTextColor, WebkitTextStroke: `${buttonTextOutlineThick}px ${buttonTextOutlineColor}` }} onClick={() => handleTabClick('Background')}>Background</button>
        <button className={`tab ${activeTab === 'Button' ? 'active' : ''}`} style={{ backgroundColor: buttonColor, color: buttonTextColor, WebkitTextStroke: `${buttonTextOutlineThick}px ${buttonTextOutlineColor}` }} onClick={() => handleTabClick('Button')}>Buttons</button>
        <button className={`tab ${activeTab === 'Audio' ? 'active' : ''}`} style={{ backgroundColor: buttonColor, color: buttonTextColor, WebkitTextStroke: `${buttonTextOutlineThick}px ${buttonTextOutlineColor}` }} onClick={() => handleTabClick('Audio')}>Audio</button>
      </div>
      {activeTab === 'Background' && (
        <div className="options">
          <div className="settingsTitle">Background</div>
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
              min="0"
              max="1459"
              value={1479 - animationSpeed} // Invert the value
              onChange={(e) => handleAnimationSpeedChange(1480 - e.target.value)} 
            />
          </div>
        </div>
      )}
      {activeTab === 'Button' && (
        <div className="options">
          <div className="settingsTitle">Buttons</div>
          <label htmlFor="buttonColorInput">Button Color:</label>
          <input
            type="text"
            id="buttonColorInput"
            value={buttonColor}
            onChange={handleButtonColorChange}
          />
          <label htmlFor="buttonTextColorInput">Text Fill Color:</label>
          <input
            type="text"
            id="buttonTextColorInput"
            value={buttonTextColor}
            onChange={handleButtonTextColorChange}
          />
          <label htmlFor="buttonTextOutlineColorInput">Text Outline Color:</label>
          <input
            type="text"
            id="buttonTextOutlineColorInput"
            value={buttonTextOutlineColor}
            onChange={handleButtonTextOutlineColorChange}
          />
          <label htmlFor="buttonTextOutlineThickInput">Text Outline Thickness:</label>
          <input
            type="range"
            id="buttonTextOutlineThickInput"
            min="0"
            max="10"
            value={buttonTextOutlineThick}
            onChange={handleButtonTextOutlineThickChange}
          />
        </div>
      )}
      {activeTab === 'Audio' && (
        <div className="options">
          <div className="settingsTitle">Audio</div>
          <div className="option">
            <input type="checkbox" checked={gameSounds} onClick={(e) => {setGameSounds(!gameSounds)}} />
            Game Sounds
          </div>
          <div className="option">
            <input type="checkbox" checked={backgroundMusic} onClick={(e) => {setBackgroundMusic(!backgroundMusic); backgroundMusic ? audioRef.current.pause() : audioRef.current.play()}} />
            Background Music
          </div>
        </div>
      )}
      <BackButton navigateBack={() => setCurrentPage("Home")} />
    </div>
  );
}

export default Settings;
