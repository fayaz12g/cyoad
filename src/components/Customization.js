import '../css/Customization.css';
import BackButton from './BackButton';
import React, { useState } from 'react';

import Character from './Character';

function Customization({ setCurrentPage, type, color, emotion, species, 
  updateAnimalAttribute, buttonColor, buttonTextColor, buttonTextOutlineColor, buttonTextOutlineThick,
  customFont, buttonHoverColor, showButtonPattern, setButtonTextSize,
  buttonTextSize, colors, specialColors}) {

  function animalChangeColor(color) {
    updateAnimalAttribute("color", color);
    updateAnimalAttribute("emotion", "Happy");
    setTimeout(() => {
      updateAnimalAttribute("emotion", "Idle");
    }, 4000);
  }

  const [prevColor, setPrevColor] = useState("White");

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
    const colorBoxes = document.querySelectorAll('.color');
    colorBoxes.forEach(box => {
      box.style.borderWidth = '1px';
      box.style.borderColor = 'black';
    });
  
    const selectedBox = document.querySelector(`.color.${selectedColor.toLowerCase()}`);
    if (selectedBox) {
      selectedBox.style.borderWidth = '3px';
      selectedBox.style.borderColor = 'lightgreen';
    }
  
    setPrevColor(color);
  };

  
  return(
    <div className="Customization" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Character type={type} color={color} emotion={emotion} species={species} updateAnimalAttribute={updateAnimalAttribute}/>

      <div className="customizationOptions">
        <div className="customizeTitle">Customize Character</div>
        <div className="colorLabel">Color</div>
        <div className="colorSelection">
          {/* Generate color options */}
          {colors.map((c) => (
            <div
              key={c.name}
              className={`color ${c.name.toLowerCase()} ${color === c.name ? "selected" : ""}`}
              style={{ backgroundColor: c.hex }}
              onClick={() => {
                handleColorSelection(c.name)
                animalChangeColor(c.hex)}}
              onMouseEnter={(e) => {animalChangeColor(c.hex); e.target.style.borderColor = 'lightgreen';}}
              onMouseLeave={(e) => {animalChangeColor(prevColor);   if (color !== e.name) {e.target.style.borderColor = 'black';}}}
            ></div>
          ))}
        </div>
        <div className="colorLabel">Special</div>
        <div className="colorSelection">
          {/* Generate special color options */}
          {specialColors.map((c) => (
            <div
              key={c}
              className={`color ${c.toLowerCase()} ${color === c ? "selected" : ""}`}
              onClick={() => animalChangeColor(c)}
              onMouseEnter={() => handleColorSelection(c)}
              onMouseLeave={() => animalChangeColor(prevColor)}
            ></div>
          ))}
        </div>
      </div>
      <div className="startContainer">
        <button 
          onMouseEnter={() => setIsStartHovered(true)}
          onMouseLeave={() => setIsStartHovered(false)}
          style={gameButtonStyle}
          className="startButton"
          onClick={() => setCurrentPage("Game")}
        >
          Start Game!
        </button>
      </div>

      <BackButton navigateBack={() => setCurrentPage("Selection")} />

      
    </div>
  );
}

export default Customization;
