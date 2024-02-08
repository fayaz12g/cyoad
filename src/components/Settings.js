import "../css/Settings.css";
import BackButton from "./BackButton";
import React, { useState, useRef, useEffect } from "react";
import { SketchPicker } from "react-color";

function Settings({
  setCurrentPage,
  gameSounds,
  setGameSounds,
  audioRef,
  backgroundMusic,
  setBackgroundMusic,
  setAnimationSpeed,
  animationSpeed,
  backgroundColor,
  setBackgroundColor,
  setButtonColor,
  buttonColor,
  buttonTextColor,
  setButtonTextColor,
  buttonTextOutlineColor,
  setButtonTextOutlineColor,
  setButtonTextOutlineThick,
  buttonTextOutlineThick,
  customFont,
  setCustomFont,
  buttonHoverColor,
  setButtonHoverColor,
  setShowButtonPattern,
  showButtonPattern,
  showBackgroundPattern,
  setShowBackgroundPattern,
  setButtonTextSize,
  buttonTextSize,
  gameTextSize,
  setGameTextSize
}) {
  const [activeTab, setActiveTab] = useState("General");
  const [showColorPicker, setShowColorPicker] = useState(false);
  const colorPickerRef = useRef(null);
  const [pickerPosition, setPickerPosition] = useState({ top: 0, left: 0 });

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const setPosition = () => {
    const buttonColorInput = document.getElementById("buttonColorInput");
    const backgroundColorInput = document.getElementById("backgroundColorInput");
    let position = { top: 0, left: 0 };
  
    if (buttonColorInput) {
      const { top, left } = buttonColorInput.getBoundingClientRect();
      position = { top: top + buttonColorInput.offsetHeight, left };
    }
    if (backgroundColorInput) {
      const { top, left } = backgroundColorInput.getBoundingClientRect();
      position = { top: top + backgroundColorInput.offsetHeight, left };
    }
  
    setPickerPosition(position);
  };

  useEffect(() => {
    setPosition();
  }, [buttonColor]);

  useEffect(() => {

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (
      colorPickerRef.current &&
      !colorPickerRef.current.contains(event.target)
    ) {
      setShowColorPicker(false);
    }
  };

  const handleColorPickerClose = () => {
    setShowColorPicker(false);
  };

  const handleAnimationSpeedChange = (value) => {
    const speed = parseInt(value);
    setAnimationSpeed(speed); 
  };

  const handleBackgroundColorChange = (e) => {
    setBackgroundColor(e.target.value);
  };

  const handleButtonColorChange = (color) => {
    setButtonColor(color.hex); 
  };

  const handleButtonHoverColorChange = (e) => {
    setButtonHoverColor(e.target.value);
  };

  const handleButtonTextColorChange = (e) => {
    handleBackgroundColorInputClick()
    setButtonTextColor(e.target.value);
  };

  const handleButtonTextOutlineColorChange = (e) => {
    setButtonTextOutlineColor(e.target.value);
  };

  const handleButtonTextOutlineThickChange = (e) => {
    setButtonTextOutlineThick(e.target.value);
  };

  const handleButtonTextSize = (e) => {
    setButtonTextSize(e.target.value);
  };

  const handleButtonTextFontChange = (e) => {
    setCustomFont(e.target.value);
  };

  const [isHovered, setIsHovered] = useState(false);

  const handlePreviewMouseEnter = () => {
    setIsHovered(true);
  };

  const handlePreviewMouseLeave = () => {
    setIsHovered(false);
  };

  const handleButtonColorInputClick = () => {
    setShowColorPicker(true);
    // console.log("Color Picker is set to" + showColorPicker);
    setPosition();
  };

  const handleBackgroundColorInputClick = () => {
    setShowColorPicker(true);
    // console.log("Color Picker is set to " + showColorPicker);
    setPosition();
  };

  const setShowButtonPatternClick = () => {
    setShowButtonPattern((prevState) => !prevState);
  };

  const setShowBackgroundPatternClick = () => {
    setShowBackgroundPattern((prevState) => !prevState);
  };

  const handleGameTextSizeChange = (e) => {
    setGameTextSize(e.target.value);
  };
  
  const gameButtonStyle = {
    backgroundColor: isHovered ? buttonHoverColor : buttonColor,
    WebkitTextFillColor: buttonTextColor,
    fontFamily: customFont,
    fontSize: buttonTextSize +'vh',
    WebkitTextStroke: `${buttonTextOutlineThick}px ${buttonTextOutlineColor}`,
    backgroundImage: showButtonPattern ? undefined : "none",
  };

  return (
    <div className="Settings">
      <div className="tabContainer">
        <div
          className={`tab ${activeTab === "General" ? "active" : ""}`}
          style={{
            fontSize: 30,
            fontFamily: "Fredoka One",
            color: activeTab === "General" ? "#FFFFFF" : "#000000",
            WebkitTextStroke: "1px #000000",
          }}
          onClick={() => handleTabClick("General")}
        >
          General
        </div>
        <div
          className={`tab ${activeTab === "Button" ? "active" : ""}`}
          style={{
            fontSize: 30,
            fontFamily: "Fredoka One",
            color: activeTab === "Button" ? "#FFFFFF" : "#000000",
            WebkitTextStroke: "1px #000000",
          }}
          onClick={() => handleTabClick("Button")}
        >
          Buttons
        </div>
        <div
          className={`tab ${activeTab === "Patterns" ? "active" : ""}`}
          style={{
            fontSize: 30,
            fontFamily: "Fredoka One",
            color: activeTab === "Patterns" ? "#FFFFFF" : "#000000",
            WebkitTextStroke: "1px #000000",
          }}
          onClick={() => handleTabClick("Patterns")}
        >
          Patterns
        </div>
        <div
          className={`tab ${activeTab === "Audio" ? "active" : ""}`}
          style={{
            fontSize: 30,
            fontFamily: "Fredoka One",
            color: activeTab === "Audio" ? "#FFFFFF" : "#000000",
            WebkitTextStroke: "1px #000000",
          }}
          onClick={() => handleTabClick("Audio")}
        >
          Audio
        </div>
      </div>
      {activeTab === "General" && (
        <div className="options">
          <div
            style={{
              textAlign: "center",
              fontFamily: "Fredoka One",
              color: "#FFFFFF",
              WebkitTextStroke: "1px #000000",
            }}
            className="settingsTitle"
          >
            General
          </div>
          <div
            style={{
              textAlign: "center",
              fontFamily: "Fredoka One",
              color: "#000000",
              WebkitTextStroke: "1px #FFFFFF",
              fontSize: '5vh',
            }}
            className="settingsTitle"
          >
            Text
          </div>
          <label htmlFor="gameTextSizeSlider">Game Text Size</label>
            <input
              type="range"
              id="gameTextSizeSlider"
              min="1"
              max="10"
              value={gameTextSize}
              onChange={handleGameTextSizeChange}
            />
          <div
            style={{
              textAlign: "center",
              fontFamily: "Fredoka One",
              color: "#000000",
              WebkitTextStroke: "1px #FFFFFF",
              fontSize: '5vh',
            }}
            className="settingsTitle"
          >
            Background
          </div>
          <label htmlFor="backgroundColorInput">Background Color:</label>
          <input
            type="text"
            id="backgroundColorInput"
            value={backgroundColor}
            onClick={handleBackgroundColorInputClick}
          />
          {showColorPicker && (
            <div
              ref={colorPickerRef}
              style={{
                position: "absolute",
                top: pickerPosition.top,
                left: pickerPosition.left,
                zIndex: "2",
              }}
            >
              <SketchPicker
                color={backgroundColor}
                onChange={handleBackgroundColorInputClick}
              />
            </div>
          )}
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
              onChange={(e) =>
                handleAnimationSpeedChange(1480 - e.target.value)
              }
            />
          </div>
        </div>
      )}
      {activeTab === "Button" && (
        <div className="options">
          <div
            style={{
              textAlign: "center",
              fontFamily: "Fredoka One",
              color: "#FFFFFF",
              WebkitTextStroke: "1px #000000",
            }}
            className="settingsTitle"
          >
            Buttons
          </div>
          <label htmlFor="buttonTextSize">
            Size:
          </label>
          <input
            type="range"
            id="buttonTextSize"
            min="1"
            max="15"
            value={buttonTextSize}
            onChange={handleButtonTextSize}
          />
          <label htmlFor="buttonColorInput">Background Color:</label>
          <input
            type="text"
            id="buttonColorInput"
            value={buttonColor}
            onClick={handleButtonColorInputClick}
          />
          {showColorPicker && (
            <div
              ref={colorPickerRef}
              style={{
                position: "absolute",
                top: pickerPosition.top,
                left: pickerPosition.left,
                zIndex: "2",
              }}
            >
              <SketchPicker
                color={buttonColor}
                onChange={handleButtonColorChange}
              />
            </div>
          )}
          <label htmlFor="buttonHoverColorInput">Background Hover Color:</label>
          <input
            type="text"
            id="buttonHoverColorInput"
            value={buttonHoverColor}
            onChange={handleButtonHoverColorChange}
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
            <option value="Franklin Gothic Medium">
              Franklin Gothic Medium
            </option>
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
          <label htmlFor="buttonTextOutlineColorInput">
            Text Outline Color:
          </label>
          <input
            type="text"
            id="buttonTextOutlineColorInput"
            value={buttonTextOutlineColor}
            onChange={handleButtonTextOutlineColorChange}
          />
          <label htmlFor="buttonTextOutlineThickInput">
            Text Outline Thickness:
          </label>
          <input
            type="range"
            id="buttonTextOutlineThickInput"
            min="0"
            max="10"
            value={buttonTextOutlineThick}
            onChange={handleButtonTextOutlineThickChange}
          />
          <div style={{margin:"6vh"}}>
          <button
            style={gameButtonStyle}
            onMouseEnter={handlePreviewMouseEnter}
            onMouseLeave={handlePreviewMouseLeave}
          >
            Preview!
          </button>
        </div>
          </div>
      )}
      {activeTab === "Patterns" && (
        <div className="options">
          <div
            style={{
              textAlign: "center",
              fontFamily: "Fredoka One",
              WebkitTextFillColor: "#FFFFFF",
              WebkitTextStroke: "1px #000000",
            }}
            className="settingsTitle"
          >
            Patterns
          </div>
          <div
            style={{
              textAlign: "center",
              fontFamily: "Fredoka One",
              color: "#000000",
              WebkitTextStroke: "1px #FFFFFF",
              fontSize: '5vh',
            }}
            className="settingsTitle"
          >
            Background
          </div>
          <div className="section">
            <div>
              <input
                type="checkbox"
                checked={showBackgroundPattern}
                onChange={setShowBackgroundPatternClick}
              />
              Show Background Pattern
            </div>
            {showBackgroundPattern && (
              <>
                <div className="sectionTitle">Background Pattern Color</div>
                <input
                  type="text"
                  id="backgroundPatternColorInput"
                  placeholder="Coming soon!"
                />
              </>
            )}
          </div>
          <div
            style={{
              textAlign: "center",
              fontFamily: "Fredoka One",
              color: "#000000",
              WebkitTextStroke: "1px #FFFFFF",
              fontSize: '5vh',
            }}
            className="settingsTitle"
          >
            Button
          </div>
          <div className="section">
            <div>
              <input
                type="checkbox"
                checked={showButtonPattern}
                onChange={setShowButtonPatternClick}
              />
              Show Button Pattern
            </div>
            {showButtonPattern && (
              <>
                <div className="sectionTitle">Button Pattern Color:</div>
                <div style={{ display: 'flex', justifyContent: 'center', margin:"1vh" }}>
                <input
                  align-items="center"
                  style={{textAlign: "center"}}
                  type="text"
                  id="buttonPatternColorInput"
                  placeholder="Coming soon!"
                /></div>
              </>
            )}
      <div style={{textAlign: "center", margin:"7vh" }}>
        <button
          style={gameButtonStyle}
          onMouseEnter={handlePreviewMouseEnter}
          onMouseLeave={handlePreviewMouseLeave}
        >
          Preview!
        </button>
      </div>
          </div>
        </div>
      )}

      {activeTab === "Audio" && (
        <div className="options">
          <div
            style={{
              textAlign: "center",
              fontFamily: "Fredoka One",
              color: "#FFFFFF",
              WebkitTextStroke: "1px #000000",
            }}
            className="settingsTitle"
          >
            Audio
          </div>
          <div className="option">
            <input
              type="checkbox"
              checked={gameSounds}
              onClick={(e) => {
                setGameSounds(!gameSounds);
              }}
            />
            Game Sounds
          </div>
          <div className="option">
            <input
              type="checkbox"
              checked={backgroundMusic}
              onClick={(e) => {
                setBackgroundMusic(!backgroundMusic);
                backgroundMusic
                  ? audioRef.current.pause()
                  : audioRef.current.play();
              }}
            />
            Background Music
          </div>
        </div>
      )}
      <BackButton navigateBack={() => setCurrentPage("Home")} />
    </div>
  );
}

export default Settings;
