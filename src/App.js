import './App.css';
import { useRef, useState } from 'react';

import Menu from './components/Menu.js';
import Settings from './components/Settings.js';
import Game from './components/Game.js';
import Selection from './components/Selection.js';
import Customization from './components/Customization.js';

import BackgroundMusicAudio from './audio/menu.wav';

function App() {

  const [ currentPage, setCurrentPage ] = useState('Home');

  const [ gameSounds, setGameSounds ] = useState(true);
  const [ backgroundMusic, setBackgroundMusic ] = useState(true);

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
      <div class="sliding-background"></div>
      <link href='https://fonts.googleapis.com/css?family=Fredoka One' rel='stylesheet'></link>
      
      {(currentPage === 'Home') && <Menu setCurrentPage={setCurrentPage} audioRef={audioRef} backgroundMusic={backgroundMusic}></Menu>}
      {(currentPage === 'Settings') && <Settings setCurrentPage={setCurrentPage}
                                                gameSounds={gameSounds}
                                                setGameSounds={setGameSounds}
                                                audioRef={audioRef}
                                                backgroundMusic={backgroundMusic}
                                                setBackgroundMusic={setBackgroundMusic}>
                                        </Settings>}
      {(currentPage === 'Game') && <Game setCurrentPage={setCurrentPage}
                                        type={animalType}
                                        color={animalColor}
                                        emotion={animalEmotion}
                                        species={animalSpecies}
                                        updateAnimalAttribute={updateAnimalAttribute}
                                        gameSounds={gameSounds}>
                                   </Game>}
      {(currentPage === 'Selection') && <Selection setCurrentPage={setCurrentPage}
                                                  updateAnimalAttribute={updateAnimalAttribute}>
                                        </Selection>}
      {(currentPage === 'Customization') && <Customization setCurrentPage={setCurrentPage}
                                                          type={animalType}
                                                          color={animalColor}
                                                          emotion={animalEmotion}
                                                          species={animalSpecies}
                                                          updateAnimalAttribute={updateAnimalAttribute}>
                                            </Customization>}
      <audio ref={audioRef} loop autoplay>
        <source src={BackgroundMusicAudio} type="audio/wav" />
      </audio>
      
      
    </div>
  );
}

export default App;
