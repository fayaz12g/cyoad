import '../css/Game.css';
import Character from './Character';
import { useRef, useState } from 'react';

import Parakeet from '../data/Bird/parakeet.json';
import StrayCat from '../data/Cat/stray.json';
import Penguin from '../data/Penguin/normal.json';

import BirdFear from '../audio/emotions/bird/bird_fear.mp3';
import BirdHappy from '../audio/emotions/bird/bird_happy.mp3';
import BirdSad from '../audio/emotions/bird/bird_sad.mp3';
import BirdMad from '../audio/emotions/bird/bird_mad.mp3';

import CatFear from '../audio/emotions/cat/cat_fear.mp3';
import CatHappy from '../audio/emotions/cat/cat_happy.mp3';
import CatSad from '../audio/emotions/cat/cat_sad.mp3';
import CatMad from '../audio/emotions/cat/cat_mad.mp3';

import PenguinFear from '../audio/emotions/penguin/penguin_fear.mp3';
import PenguinHappy from '../audio/emotions/penguin/penguin_happy.mp3';
import PenguinSad from '../audio/emotions/penguin/penguin_sad.mp3';
import PenguinMad from '../audio/emotions/penguin/penguin_mad.mp3';

function Game({ setCurrentPage, type, color, emotion, species, updateAnimalAttribute, 
  gameSounds, buttonColor, buttonTextColor, buttonTextOutlineColor, buttonTextOutlineThick,
customFont, buttonHoverColor, showButtonPattern, setButtonTextSize,
buttonTextSize, gameTextSize }) {
 
    const BFRef = useRef(null);
  const BHRef = useRef(null);
  const BSRef = useRef(null);
  const BMRef = useRef(null);

  const CFRef = useRef(null);
  const CHRef = useRef(null);
  const CSRef = useRef(null);
  const CMRef = useRef(null);

  const PFRef = useRef(null);
  const PHRef = useRef(null);
  const PSRef = useRef(null);
  const PMRef = useRef(null);

  let prefix;
  if (type === "Bird") {
    prefix = "PB"
  } else if (type === "Cat") {
    prefix = "CS"
  } else if (type === "Penguin") {
    prefix = "NP"
  }

  const [ id, setId ] = useState(prefix + "_START");

  function getOptionById(animal, id) {
    let foundOption;
    switch(animal) {
      case("Bird"):
        Parakeet.forEach((option) => {
          if (option.id === id) {
            foundOption = option;
          }
        });
        break;
      case("Cat"):
        StrayCat.forEach((option) => {
          if (option.id === id) {
            foundOption = option;
          }
        });
        break;
      case("Penguin"):
        Penguin.forEach((option) => {
          if (option.id === id) {
            foundOption = option;
          }
        });
        break;
      default:
        break;
    }
    return foundOption;
  }

  function advanceChoice(nextId) {
    if (nextId === prefix + "_MENU")
      setCurrentPage("Home");
    setId(nextId);

    let emotion = getOptionById(type, nextId).emotion
    updateAnimalAttribute("emotion", emotion);

    if (gameSounds) {

      switch(emotion) {
        case("Fear"):
          if (type === "Bird")
            BFRef.current.play();
          if (type === "Cat")
            CFRef.current.play();
          if (type === "Penguin")
            PFRef.current.play();
          break;
        case("Happy"):
        if (type === "Bird")
          BHRef.current.play();
        if (type === "Cat")
          CHRef.current.play();
        if (type === "Penguin")
          PHRef.current.play();
          break;
        case("Sad"):
        if (type === "Bird")
          BSRef.current.play();
        if (type === "Cat")
          CSRef.current.play();
        if (type === "Penguin")
          PSRef.current.play();
          break;
        case("Mad"):
          if (type === "Bird")
            BMRef.current.play();
          if (type === "Cat")
            CMRef.current.play();
          if (type === "Penguin")
            PMRef.current.play();
          break;

          default:
            break;
      }
    }
  }

  const handleOP1MouseEnter = () => {
    setIsOP1Hovered(true);
  };

  const handleOP1MouseLeave = () => {
    setIsOP1Hovered(false);
  };

  const handleOP2MouseEnter = () => {
    setIsOP2Hovered(true);
  };

  const handleOP2MouseLeave = () => {
    setIsOP2Hovered(false);
  };


  const [isOP1Hovered, setIsOP1Hovered] = useState(false);
  const [isOP2Hovered, setIsOP2Hovered] = useState(false);

  const gameButtonStyle1 = {
    backgroundColor: isOP1Hovered ? buttonHoverColor : buttonColor,
    WebkitTextFillColor: buttonTextColor,
    fontFamily: customFont,
    fontSize: buttonTextSize +'vh',
    WebkitTextStroke: `${buttonTextOutlineThick}px ${buttonTextOutlineColor}`,
    backgroundImage: showButtonPattern ? undefined : 'none'
  };

  const gameButtonStyle2 = {
    backgroundColor: isOP2Hovered ? buttonHoverColor : buttonColor,
    WebkitTextFillColor: buttonTextColor,
    fontFamily: customFont,
    fontSize: buttonTextSize +'vh',
    WebkitTextStroke: `${buttonTextOutlineThick}px ${buttonTextOutlineColor}`,
    backgroundImage: showButtonPattern ? undefined : 'none'
  };
  return(
    <div className="Game">
      <Character type={type} color={color} emotion={emotion} species={species} updateAnimalAttribute={updateAnimalAttribute}
      orientation={window.innerHeight > window.innerWidth ? "portrait" : "landscape"}/>

      <div className="progression">
        <div className={`story ${color}`}style={{fontSize: gameTextSize +'vh'}}>{getOptionById(type, id).story}</div>

        <div className="storyOptions">
          <button 
          onMouseEnter={handleOP1MouseEnter}
          onMouseLeave={handleOP1MouseLeave}
          style={gameButtonStyle1} onClick={() => advanceChoice(getOptionById(type, id).optionA)}>{getOptionById(type, getOptionById(type, id).optionA).option}</button>
          <button 
          onMouseEnter={handleOP2MouseEnter}
          onMouseLeave={handleOP2MouseLeave}
          style={gameButtonStyle2} onClick={() => advanceChoice(getOptionById(type, id).optionB)}>{getOptionById(type, getOptionById(type, id).optionB).option}</button>
        </div>
      </div>

      <audio ref={BFRef}>
        <source src={BirdFear} type="audio/mp3" />
      </audio>
      <audio ref={BHRef}>
        <source src={BirdHappy} type="audio/mp3" />
      </audio>
      <audio ref={BMRef}>
        <source src={BirdMad} type="audio/mp3" />
      </audio>
      <audio ref={BSRef}>
        <source src={BirdSad} type="audio/mp3" />
      </audio>

      <audio ref={CFRef}>
        <source src={CatFear} type="audio/mp3" />
      </audio>
      <audio ref={CHRef}>
        <source src={CatHappy} type="audio/mp3" />
      </audio>
      <audio ref={CMRef}>
        <source src={CatMad} type="audio/mp3" />
      </audio>
      <audio ref={CSRef}>
        <source src={CatSad} type="audio/mp3" />
      </audio>

      <audio ref={PFRef}>
        <source src={PenguinFear} type="audio/mp3" />
      </audio>
      <audio ref={PHRef}>
        <source src={PenguinHappy} type="audio/mp3" />
      </audio>
      <audio ref={PMRef}>
        <source src={PenguinMad} type="audio/mp3" />
      </audio>
      <audio ref={PSRef}>
        <source src={PenguinSad} type="audio/mp3" />
      </audio>
    </div>
  );
}

export default Game;