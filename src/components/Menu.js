import '../css/Menu.css';
import LycleLogo from '../images/Lycle_Logo.png';
import React, { useState } from 'react';

function Menu({ setCurrentPage, audioRef, backgroundMusic, buttonColor, buttonTextColor, 
  buttonTextOutlineColor, buttonTextOutlineThick, customFont, buttonHoverColor}) {
  const [isPlayHovered, setIsPlayHovered] = useState(false);
  const [isSettingsHovered, setIsSettingsHovered] = useState(false);

  const handlePlayMouseEnter = () => {
    setIsPlayHovered(true);
  };

  const handlePlayMouseLeave = () => {
    setIsPlayHovered(false);
  };

  const handleSettingsMouseEnter = () => {
    setIsSettingsHovered(true);
  };

  const handleSettingsMouseLeave = () => {
    setIsSettingsHovered(false);
  };

  const playButtonStyle = {
    backgroundColor: isPlayHovered ? buttonHoverColor : buttonColor,
    WebkitTextFillColor: buttonTextColor,
    fontFamily: customFont,
    WebkitTextStroke: `${buttonTextOutlineThick}px ${buttonTextOutlineColor}`
  };
  

  const settingsButtonStyle = {
    backgroundColor: isSettingsHovered ? buttonHoverColor : buttonColor,
    WebkitTextFillColor: buttonTextColor,
    fontFamily: customFont,
    WebkitTextStroke: `${buttonTextOutlineThick}px ${buttonTextOutlineColor}`
  };

  return (
    <div className="Menu">
      <img className="logo" src={LycleLogo} alt="Lycle Logo"></img>
      <div className="menuButtons">
        <button 
          style={playButtonStyle}
          onMouseEnter={handlePlayMouseEnter}
          onMouseLeave={handlePlayMouseLeave}
          onClick={() => {
            setCurrentPage("Selection"); 
            backgroundMusic ? audioRef.current.play() : audioRef.current++
          }}
        >
          Play
        </button>
        <button 
          style={settingsButtonStyle}
          onMouseEnter={handleSettingsMouseEnter}
          onMouseLeave={handleSettingsMouseLeave}
          onClick={() => {
            setCurrentPage("Settings");
            backgroundMusic ? audioRef.current.play() : audioRef.current++
          }}
        >
          Settings
        </button>
      </div>
      <div className="credits">
      <div>
        Based off of <a href="https://github.com/cfields7/lycle" target="_blank" rel="noopener noreferrer">Lycle.Co</a>
      </div>
      </div>
    </div>
  );
}

export default Menu;
