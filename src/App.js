import './App.css';
import { useRef, useState, useEffect } from 'react';

import Menu from './components/Menu.js';
import Settings from './components/Settings.js';
import Game from './components/Game.js';
import Selection from './components/Selection.js';
import Customization from './components/Customization.js';

import BackgroundMusicAudio from './audio/songs/menu.mp3';

function App() {

  const [ currentPage, setCurrentPage ] = useState('Home');

  const [ gameSounds, setGameSounds ] = useState(true);
  const [ backgroundMusic, setBackgroundMusic ] = useState(true);
  const [ showButtonPattern, setShowButtonPattern ] = useState(true);
  const [animationSpeed, setAnimationSpeed] = useState(999);
  const [backgroundColor, setBackgroundColor] = useState('#f3c801');
  const [buttonColor, setButtonColor] = useState('#a3c78d');
  const [buttonHoverColor, setButtonHoverColor] = useState('#a3db83');
  const [buttonTextColor, setButtonTextColor] = useState('#FFFFFF');
  const [buttonTextOutlineColor, setButtonTextOutlineColor] = useState('#000000');
  const [buttonTextOutlineThick, setButtonTextOutlineThick] = useState(1);
  const [customFont, setCustomFont] = useState('Fredoka One');
  
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

      <div className="sliding-background" style={{ '--animation-speed': `${animationSpeed}s`,'--background-color': `${backgroundColor}`,'--button-color': `${buttonColor}` }}></div>
      <link href='https://fonts.googleapis.com/css?family=Fredoka One' rel='stylesheet'></link>
      
      {(currentPage === 'Home') && <Menu setCurrentPage={setCurrentPage} audioRef={audioRef} backgroundMusic={backgroundMusic}
                                                buttonColor={buttonColor}
                                                setButtonColor={setButtonColor}
                                                buttonTextOutlineColor={buttonTextOutlineColor}
                                                buttonTextOutlineThick={buttonTextOutlineThick}
                                                customFont={customFont}
                                                buttonTextColor={buttonTextColor} 
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
                                                setShowButtonPattern={setShowButtonPattern}
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
                                        showButtonPattern={showButtonPattern}
                                        setButtonColor={setButtonColor} >
                                   </Game>}
      {(currentPage === 'Selection') && <Selection setCurrentPage={setCurrentPage}
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
                                                          showButtonPattern={showButtonPattern}
                                                          buttonTextColor={buttonTextColor} >
                                            </Customization>}
      <audio ref={audioRef} loop autoPlay>
        <source src={BackgroundMusicAudio} type="audio/mp3" />
      </audio>
      
      
    </div>
  
  );
}

export default App;
