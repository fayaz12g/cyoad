import '../css/Customization.css';
import BackButton from './BackButton';
import React, { useState } from 'react';

import Character from './Character';

function Customization({ setCurrentPage, type, color, emotion, species, 
  updateAnimalAttribute, buttonColor, buttonTextColor, buttonTextOutlineColor, buttonTextOutlineThick,
  customFont, buttonHoverColor, showButtonPattern, setButtonTextSize,
  buttonTextSize}) {

  function animalChangeColor(color) {
    updateAnimalAttribute("color", color);
    updateAnimalAttribute("emotion", "Happy");
    setTimeout(() => {
      updateAnimalAttribute("emotion", "Idle");
   }, 2000);
  }
  const handleStartMouseEnter = () => {
    setIsStartHovered(true);
  };

  const handleStartMouseLeave = () => {
    setIsStartHovered(false);
  };

  const [prevColor, setPrevColor] = useState("Red");

  const [isStartHovered, setIsStartHovered] = useState(false);

  const gameButtonStyle = {
    backgroundColor: isStartHovered ? buttonHoverColor : buttonColor,
    fontFamily: customFont,
    fontSize: buttonTextSize +'vh',
    WebkitTextFillColor: buttonTextColor,
    WebkitTextStroke: `${buttonTextOutlineThick}px ${buttonTextOutlineColor}`,
    backgroundImage: showButtonPattern ? undefined : 'none'
  };
  
  const handleColorSelection = (selectedColor) => {
    setPrevColor(color);
    animalChangeColor(selectedColor);
  };
  
  return(
    <div className="Customization">
      <Character type={type} color={color} emotion={emotion} species={species} updateAnimalAttribute={updateAnimalAttribute}/>

      <div className="customizationOptions">
        <div className="customizeTitle">Customize Your Character</div>
        <div className="colorLabel">Color</div>
        <div className="colorSelection">
        <div className={`color red ${color === "Red"}`} onClick={() => handleColorSelection("Red")} onMouseEnter={() => animalChangeColor("Red")} onMouseLeave={() => animalChangeColor(prevColor)}></div>
        <div className={`color orange ${color === "Orange"}`} onClick={() => handleColorSelection("Orange")} onMouseEnter={() => animalChangeColor("Orange")} onMouseLeave={() => animalChangeColor(prevColor)}></div>
        <div className={`color yellow ${color === "Yellow"}`} onClick={() => handleColorSelection("Yellow")} onMouseEnter={() => animalChangeColor("Yellow")} onMouseLeave={() => animalChangeColor(prevColor)}></div>
        <div className={`color green ${color === "Green"}`} onClick={() => handleColorSelection("Green")} onMouseEnter={() => animalChangeColor("Green")} onMouseLeave={() => animalChangeColor(prevColor)}></div>
        <div className={`color blue ${color === "Blue"}`} onClick={() => handleColorSelection("Blue")} onMouseEnter={() => animalChangeColor("Blue")} onMouseLeave={() => animalChangeColor(prevColor)}></div>
      </div>
        <div className="colorLabel">Special</div>
        <div className="colorSelection">
          <div className={`color july ${color === "July"}`} onClick={() => animalChangeColor("July")} onMouseEnter={() => handleColorSelection("July")} onMouseLeave={() => animalChangeColor(prevColor)}></div>
          <div className={`color white ${color === "White"}`} onClick={() => animalChangeColor("White")} onMouseEnter={() => handleColorSelection("White")} onMouseLeave={() => animalChangeColor(prevColor)}></div>
        </div>
      </div>
      <div className="startContainer">
        <button 
        onMouseEnter={handleStartMouseEnter}
        onMouseLeave={handleStartMouseLeave}
        style={gameButtonStyle} className="startButton" onClick={() => setCurrentPage("Game")}>Start Game!</button>
      </div>

      <BackButton navigateBack={() => setCurrentPage("Selection")} />

      
    </div>
  );
}

export default Customization;