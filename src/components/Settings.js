import '../css/Settings.css';
import BackButton from './BackButton';
import React, { useState } from 'react';

function Settings({ setCurrentPage, gameSounds, setGameSounds, audioRef, backgroundMusic, setBackgroundMusic, 
  setAnimationSpeed, animationSpeed, backgroundColor, setBackgroundColor, setButtonColor, buttonColor,
  buttonTextColor, setButtonTextColor, buttonTextOutlineColor, setButtonTextOutlineColor,
  setButtonTextOutlineThick,  buttonTextOutlineThick, customFont, setCustomFont}) {
  
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

  const handleButtonTextFontChange = (e) => {
    // console.log("Button Text Ouline Thickeness changed to:", e.target.value);
    setCustomFont(e.target.value);
  };
  
  return (
    <div className="Settings">
      <div className="tabContainer">
      <div className={`tab ${activeTab === 'Background' ? 'active' : ''}`} style={{ fontSize: 30, fontFamily: 'Fredoka One', color: activeTab === 'Background' ? "#FFFFFF" : "#000000", WebkitTextStroke: "1px #000000"}} onClick={() => handleTabClick('Background')}>Background</div>
      <div className={`tab ${activeTab === 'Button' ? 'active' : ''}`} style={{ fontSize: 30, fontFamily: 'Fredoka One', color: activeTab === 'Button' ? "#FFFFFF" : "#000000", WebkitTextStroke: "1px #000000"}} onClick={() => handleTabClick('Button')}>Buttons</div>
      <div className={`tab ${activeTab === 'Patterns' ? 'active' : ''}`} style={{ fontSize: 30, fontFamily: 'Fredoka One', color: activeTab === 'Patterns' ? "#FFFFFF" : "#000000", WebkitTextStroke: "1px #000000"}} onClick={() => handleTabClick('Patterns')}>Patterns</div>
      <div className={`tab ${activeTab === 'Audio' ? 'active' : ''}`} style={{ fontSize: 30, fontFamily: 'Fredoka One', color: activeTab === 'Audio' ? "#FFFFFF" : "#000000", WebkitTextStroke: "1px #000000" }} onClick={() => handleTabClick('Audio')}>Audio</div>

      </div>
      {activeTab === 'Background' && (
        <div className="options">
          <div style={{ textAlign: "center", fontFamily: 'Fredoka One', color: "#FFFFFF", WebkitTextStroke: "1px #000000" }} className="settingsTitle">Background</div>
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
          <div style={{ textAlign: "center", fontFamily: 'Fredoka One', color: "#FFFFFF", WebkitTextStroke: "1px #000000" }} className="settingsTitle">Buttons</div>
          <label htmlFor="buttonColorInput">Button Color:</label>
          <input
            type="text"
            id="buttonColorInput"
            value={buttonColor}
            onChange={handleButtonColorChange}
          />
          <label htmlFor="buttonTextColorInput">Text Font:</label>
          <select
            id="buttonTextFont"
            value={customFont}
            onChange={handleButtonTextFontChange}
          >
            <option value="Fredoka One">Lycle</option>
            <option value="Arial">Arial</option>
            <option value="Helvetica">Helvetica</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Courier New">Courier New</option>
            <option value="Verdana">Verdana</option>
            <option value="Georgia">Georgia</option>
            <option value="Palatino">Palatino</option>
            <option value="Garamond">Garamond</option>
            <option value="Bookman">Bookman</option>
            <option value="Comic Sans MS">Comic Sans MS</option>
            <option value="Trebuchet MS">Trebuchet MS</option>
            <option value="Arial Black">Arial Black</option>
            <option value="Impact">Impact</option>
            <option value="Lucida Console">Lucida Console</option>
            <option value="Lucida Sans Unicode">Lucida Sans Unicode</option>
            <option value="Tahoma">Tahoma</option>
            <option value="Geneva">Geneva</option>
            <option value="Century Gothic">Century Gothic</option>
            <option value="Copperplate">Copperplate</option>
            <option value="Franklin Gothic Medium">Franklin Gothic Medium</option>
            <option value="Optima">Optima</option>
            <option value="Rockwell">Rockwell</option>
            <option value="Symbol">Symbol</option>
            <option value="Wingdings">Wingdings</option>
            <option value="Courier">Courier</option>
            <option value="MS Serif">MS Serif</option>
            <option value="MS Sans Serif">MS Sans Serif</option>
            <option value="Brush Script MT">Brush Script MT</option>
            <option value="Papyrus">Papyrus</option>
          </select>
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
          <button 
          style={{ fontFamily: customFont, backgroundColor: buttonColor, WebkitTextFillColor: buttonTextColor, WebkitTextStroke: `${buttonTextOutlineThick}px ${buttonTextOutlineColor}` }} 
          >Preview!</button>
        </div>
      )}
      {activeTab === 'Patterns' && (
        <div className="options">
          <div style={{ textAlign: "center", fontFamily: 'Fredoka One', WebkitTextFillColor: "#FFFFFF", WebkitTextStroke: "1px #000000" }} className="settingsTitle">Patterns</div>
          <div className="section">
            <div className="sectionTitle">Background Pattern Color</div>
            <input
              type="text"
              id="backgroundPatternColorInput"
              placeholder="Enter background pattern color"
              // Add onChange handler for background pattern color
            />
          </div>
          <div className="section">
            <div className="sectionTitle">Button Pattern Color</div>
            <input
              type="text"
              id="buttonPatternColorInput"
              placeholder="Enter button pattern color"
              // Add onChange handler for button pattern color
            />
          </div>
        </div>
      )}
      {activeTab === 'Audio' && (
        <div className="options">
          <div style={{ textAlign: "center", fontFamily: 'Fredoka One', color: "#FFFFFF", WebkitTextStroke: "1px #000000" }} className="settingsTitle">Audio</div>
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
