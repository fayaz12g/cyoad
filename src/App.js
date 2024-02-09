import './App.css';
import { useRef, useState, useEffect } from 'react';

import Menu from './components/Menu.js';
import Settings from './components/Settings.js';
import Game from './components/Game.js';
import Selection from './components/Selection.js';
import Customization from './components/Customization.js';

import BackgroundMusicAudio from './audio/songs/menu.mp3';

function App() {
  
  const handleColorNameChange = (newValue, index) => {
    const newColors = [...colors];
    newColors[index].name = newValue;
    setColors(newColors); // Update the colors array in the parent component
  };
    
  const handleColorHexChange = (newValue, index) => {
    const newColors = [...colors];
    newColors[index].hex = newValue;
    setColors(newColors); // Update the colors array in the parent component
  };

  const [colors, setColors] = useState([
    { name: "Red", hex: "#FF0000" },
    { name: "Orange", hex: "#FFA500" },
    { name: "Yellow", hex: "#FFFF00" },
    { name: "Green", hex: "#008000" },
    { name: "Blue", hex: "#0000FF" },
    { name: "Purple", hex: "#800080" }
  ]);

  const specialColors = ["July", "White"];

  const [ currentPage, setCurrentPage ] = useState('Home');

  const [ gameSounds, setGameSounds ] = useState(true);
  const [ backgroundMusic, setBackgroundMusic ] = useState(true);
  const [ showButtonPattern, setShowButtonPattern ] = useState(true);
  const [ showBackgroundPattern, setShowBackgroundPattern ] = useState(true);
  const [animationSpeed, setAnimationSpeed] = useState(999);
  const [buttonTextSize, setButtonTextSize] = useState(4);
  const [backgroundColor, setBackgroundColor] = useState('#f3c801');
  const [buttonColor, setButtonColor] = useState('#a3c78d');
  const [buttonHoverColor, setButtonHoverColor] = useState('#a3db83');
  const [buttonTextColor, setButtonTextColor] = useState('#FFFFFF');
  const [buttonTextOutlineColor, setButtonTextOutlineColor] = useState('#000000');
  const [buttonTextOutlineThick, setButtonTextOutlineThick] = useState(1);
  const [customFont, setCustomFont] = useState('Fredoka One');
  const [gameTextSize, setGameTextSize] = useState(3);
  
  const [ animalType, setAnimalType ] = useState("Undefined");
  const [ animalColor, setAnimalColor ] = useState("White");
  const [ animalEmotion, setAnimalEmotion ] = useState("Idle");
  const [ animalSpecies, setAnimalSpecies ] = useState("Undefined");

  const audioRef = useRef(null);

  useEffect(() => {
    const handleTimeUpdate = () => {
      if (audioRef.current.currentTime >= 81.5) {
        audioRef.current.currentTime = 4.5; 
      }
    };

    const handleOrientationChange = () => {
      if (window.innerWidth < window.innerHeight) {
        setGameTextSize(2);
        setButtonTextSize(3);
      }}

    handleOrientationChange();

    if (backgroundMusic) {
      audioRef.current.play();
      audioRef.current.addEventListener('timeupdate', handleTimeUpdate);
    } else {
      audioRef.current.pause();
    }

    return () => {
      audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, [backgroundMusic]);

  function updateAnimalAttribute(attribute, value) {
    switch(attribute) {
      case("type"):
        setAnimalType(value);
        break;
      case("color"):
        setAnimalColor(value);
        break;
      case("emotion"):
        setAnimalEmotion(value);
        break;
      case("species"):
        setAnimalSpecies(value);
        break;
      default:
        break;
    }
  }

  return (
      <div className="App">

      <div className="sliding-background" style={{ 
        '--animation-speed': `${animationSpeed}s`,
      '--background-color': `${backgroundColor}`,
      '--button-color': `${buttonColor}`, 
      'background-image': showBackgroundPattern ? undefined : 'none'}}></div>
      <link href='https://fonts.googleapis.com/css?family=Fredoka One' rel='stylesheet'></link>
      
      {(currentPage === 'Home') && <Menu setCurrentPage={setCurrentPage} audioRef={audioRef} backgroundMusic={backgroundMusic}
                                                buttonColor={buttonColor}
                                                setButtonColor={setButtonColor}
                                                buttonTextOutlineColor={buttonTextOutlineColor}
                                                buttonTextOutlineThick={buttonTextOutlineThick}
                                                customFont={customFont}
                                                buttonTextColor={buttonTextColor} 
                                                buttonTextSize={buttonTextSize}
                                                setButtonTextSize={setButtonTextSize}
                                                showButtonPattern={showButtonPattern}
                                                buttonHoverColor={buttonHoverColor}>
                                                </Menu>}
      {(currentPage === 'Settings') && <Settings setCurrentPage={setCurrentPage} 
                                                gameSounds={gameSounds}
                                                setGameSounds={setGameSounds}
                                                audioRef={audioRef}
                                                backgroundMusic={backgroundMusic}
                                                setBackgroundMusic={setBackgroundMusic}
                                                setAnimationSpeed={setAnimationSpeed} 
                                                setBackgroundColor={setBackgroundColor}
                                                backgroundColor={backgroundColor}
                                                buttonColor={buttonColor}
                                                buttonHoverColor={buttonHoverColor}
                                                setButtonHoverColor={setButtonHoverColor}
                                                setButtonColor={setButtonColor}
                                                buttonTextColor={buttonTextColor}
                                                buttonTextOutlineColor={buttonTextOutlineColor}
                                                setButtonTextColor={setButtonTextColor}
                                                setButtonTextOutlineColor={setButtonTextOutlineColor}
                                                setButtonTextOutlineThick={setButtonTextOutlineThick}
                                                buttonTextOutlineThick={buttonTextOutlineThick}
                                                setCustomFont={setCustomFont}
                                                customFont={customFont}
                                                showButtonPattern={showButtonPattern}
                                                showBackgroundPattern={showBackgroundPattern}
                                                setShowBackgroundPattern={setShowBackgroundPattern}
                                                setShowButtonPattern={setShowButtonPattern}
                                                buttonTextSize={buttonTextSize}
                                                setButtonTextSize={setButtonTextSize}
                                                setGameTextSize={setGameTextSize}
                                                gameTextSize={gameTextSize}
                                                colors={colors}
                                                specialColors={specialColors}
                                                handleColorNameChange={handleColorNameChange}
                                                handleColorHexChange={handleColorHexChange}
                                                setColors={setColors}
                                                animationSpeed={animationSpeed} >
                                        </Settings>}
      {(currentPage === 'Game') && <Game setCurrentPage={setCurrentPage}
                                        type={animalType}
                                        color={animalColor}
                                        emotion={animalEmotion}
                                        species={animalSpecies}
                                        updateAnimalAttribute={updateAnimalAttribute}
                                        gameSounds={gameSounds}
                                        buttonColor={buttonColor}
                                        buttonHoverColor={buttonHoverColor}
                                        buttonTextColor={buttonTextColor}
                                        buttonTextOutlineColor={buttonTextOutlineColor}
                                        buttonTextOutlineThick={buttonTextOutlineThick}
                                        customFont={customFont}
                                        buttonTextSize={buttonTextSize}
                                        setButtonTextSize={setButtonTextSize}
                                        showButtonPattern={showButtonPattern}
                                        gameTextSize={gameTextSize}
                                        colors={colors}
                                        specialColors={specialColors}
                                        setButtonColor={setButtonColor} >
                                   </Game>}
      {(currentPage === 'Selection') && <Selection setCurrentPage={setCurrentPage}
                                                  colors={colors}
                                                  specialColors={specialColors}
                                                  updateAnimalAttribute={updateAnimalAttribute}>
                                                    
                                        </Selection>}
      {(currentPage === 'Customization') && <Customization setCurrentPage={setCurrentPage}
                                                          type={animalType}
                                                          color={animalColor}
                                                          emotion={animalEmotion}
                                                          species={animalSpecies}
                                                          updateAnimalAttribute={updateAnimalAttribute}
                                                          buttonColor={buttonColor}
                                                          buttonHoverColor={buttonHoverColor}
                                                          setButtonColor={setButtonColor}
                                                          buttonTextOutlineColor={buttonTextOutlineColor}
                                                          buttonTextOutlineThick={buttonTextOutlineThick}
                                                          customFont={customFont}
                                                          buttonTextSize={buttonTextSize}
                                                          setButtonTextSize={setButtonTextSize}
                                                          showButtonPattern={showButtonPattern}
                                                          colors={colors}
                                                          specialColors={specialColors}
                                                          buttonTextColor={buttonTextColor} >
                                            </Customization>}
      <audio ref={audioRef} loop autoPlay>
        <source src={BackgroundMusicAudio} type="audio/mp3" />
      </audio>
      
      
    </div>
  
  );
}

export default App;
