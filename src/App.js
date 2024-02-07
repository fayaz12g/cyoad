import './App.css';
import { useRef, useState } from 'react';

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
  const [animationSpeed, setAnimationSpeed] = useState(999);
  const [backgroundColor, setBackgroundColor] = useState('#f3c801');
  const [buttonColor, setButtonColor] = useState('#a3c78d');
  const [buttonTextColor, setButtonTextColor] = useState('#FFFFFF');
  const [buttonTextOutlineColor, setButtonTextOutlineColor] = useState('#000000');
  const [buttonTextOutlineThick, setButtonTextOutlineThick] = useState(1);
  const [customFont, setCustomFont] = useState('Fredoka One');
  

  const [ animalType, setAnimalType ] = useState("Undefined");
  const [ animalColor, setAnimalColor ] = useState("White");
  const [ animalEmotion, setAnimalEmotion ] = useState("Idle");
  const [ animalSpecies, setAnimalSpecies ] = useState("Undefined");

  const audioRef = useRef(null);

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

      <div class="sliding-background" style={{ '--animation-speed': `${animationSpeed}s`,'--background-color': `${backgroundColor}`,'--button-color': `${buttonColor}` }}></div>
      <link href='https://fonts.googleapis.com/css?family=Fredoka One' rel='stylesheet'></link>
      
      {(currentPage === 'Home') && <Menu setCurrentPage={setCurrentPage} audioRef={audioRef} backgroundMusic={backgroundMusic}
                                                buttonColor={buttonColor}
                                                setButtonColor={setButtonColor}
                                                buttonTextOutlineColor={buttonTextOutlineColor}
                                                buttonTextOutlineThick={buttonTextOutlineThick}
                                                customFont={customFont}
                                                buttonTextColor={buttonTextColor} >
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
                                                setButtonColor={setButtonColor}
                                                buttonTextColor={buttonTextColor}
                                                buttonTextOutlineColor={buttonTextOutlineColor}
                                                setButtonTextColor={setButtonTextColor}
                                                setButtonTextOutlineColor={setButtonTextOutlineColor}
                                                setButtonTextOutlineThick={setButtonTextOutlineThick}
                                                buttonTextOutlineThick={buttonTextOutlineThick}
                                                setCustomFont={setCustomFont}
                                                customFont={customFont}
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
                                        buttonTextColor={buttonTextColor}
                                        buttonTextOutlineColor={buttonTextOutlineColor}
                                        buttonTextOutlineThick={buttonTextOutlineThick}
                                        customFont={customFont}
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
                                                          setButtonColor={setButtonColor}
                                                          buttonTextOutlineColor={buttonTextOutlineColor}
                                                          buttonTextOutlineThick={buttonTextOutlineThick}
                                                          customFont={customFont}
                                                          buttonTextColor={buttonTextColor} >
                                            </Customization>}
      <audio ref={audioRef} loop autoplay>
        <source src={BackgroundMusicAudio} type="audio/mp3" />
      </audio>
      
      
    </div>
  
  );
}

export default App;
