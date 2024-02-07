import '../css/Menu.css';
import LycleLogo from '../images/Lycle_Logo.png';
import React, { useState } from 'react';

function Menu({ setCurrentPage, audioRef, backgroundMusic, buttonColor, buttonTextColor, 
  buttonTextOutlineColor, buttonTextOutlineThick, customFont}) {
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
    backgroundColor: isPlayHovered ? 'rgb(164, 219, 131)' : buttonColor,
    WebkitTextFillColor: buttonTextColor,
    fontFamily: customFont,
    WebkitTextStroke: `${buttonTextOutlineThick}px ${buttonTextOutlineColor}`
  };
  

  const settingsButtonStyle = {
    backgroundColor: isSettingsHovered ? 'rgb(164, 219, 131)' : buttonColor,
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
          onClick={() => setCurrentPage("Settings")}
        >
          Settings
        </button>
      </div>
      <div className="credits">
        <div>Fayaz & Christopher</div>
        <div>Hack_NCState 2024</div>
      </div>
    </div>
  );
}

export default Menu;
