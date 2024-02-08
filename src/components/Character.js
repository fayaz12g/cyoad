import '../css/Character.css';

import BirdBlue from '../images/Characters/Bird/Colors/Bird_Blue.png';
import BirdGreen from '../images/Characters/Bird/Colors/Bird_Green.png';
import BirdRed from '../images/Characters/Bird/Colors/Bird_Red.png';
import BirdWhite from '../images/Characters/Bird/Colors/Bird_White.png';
import BirdYellow from '../images/Characters/Bird/Colors/Bird_Yellow.png';
import BirdOrange from '../images/Characters/Bird/Colors/Bird_Orange.png';
import BirdJuly from '../images/Characters/Bird/Colors/Bird_July.png';
import BirdStencilColored from '../images/Characters/Bird/Bird_Stencil_colored.png';

import BirdIdle from '../images/Characters/Bird/Faces/Bird_Idle.png';
import BirdHappy from '../images/Characters/Bird/Faces/Bird_Happy.png';
import BirdSad from '../images/Characters/Bird/Faces/Bird_Sad.png';
import BirdFear from '../images/Characters/Bird/Faces/Bird_Fear.png';
import BirdMad from '../images/Characters/Bird/Faces/Bird_Mad.png';

import CatBlue from '../images/Characters/Cat/Colors/Cat_Blue.png';
import CatGreen from '../images/Characters/Cat/Colors/Cat_Green.png';
import CatRed from '../images/Characters/Cat/Colors/Cat_Red.png';
import CatWhite from '../images/Characters/Cat/Colors/Cat_White.png';
import CatYellow from '../images/Characters/Cat/Colors/Cat_Yellow.png';
import CatOrange from '../images/Characters/Cat/Colors/Cat_Orange.png';
import CatJuly from '../images/Characters/Cat/Colors/Cat_July.png';
import CatStencilColored from '../images/Characters/Cat/Cat_Stencil_colored.png';

import CatIdle from '../images/Characters/Cat/Faces/Cat_Idle.png';
import CatHappy from '../images/Characters/Cat/Faces/Cat_Happy.png';
import CatSad from '../images/Characters/Cat/Faces/Cat_Sad.png';
import CatFear from '../images/Characters/Cat/Faces/Cat_Fear.png';
import CatMad from '../images/Characters/Cat/Faces/Cat_Mad.png';

import PenguinBlue from '../images/Characters/Penguin/Colors/Penguin_Blue.png';
import PenguinGreen from '../images/Characters/Penguin/Colors/Penguin_Green.png';
import PenguinRed from '../images/Characters/Penguin/Colors/Penguin_Red.png';
import PenguinWhite from '../images/Characters/Penguin/Colors/Penguin_White.png';
import PenguinYellow from '../images/Characters/Penguin/Colors/Penguin_Yellow.png';
import PenguinOrange from '../images/Characters/Penguin/Colors/Penguin_Orange.png';
import PenguinJuly from '../images/Characters/Penguin/Colors/Penguin_July.png';
import PenguinStencilColored from '../images/Characters/Penguin/Penguin_Stencil_colored.png';

import PenguinIdle from '../images/Characters/Penguin/Faces/Penguin_Idle.png';
import PenguinHappy from '../images/Characters/Penguin/Faces/Penguin_Happy.png';
import PenguinSad from '../images/Characters/Penguin/Faces/Penguin_Sad.png';
import PenguinFear from '../images/Characters/Penguin/Faces/Penguin_Fear.png';
import PenguinMad from '../images/Characters/Penguin/Faces/Penguin_Mad.png';

function Character({ type, color, emotion }) {
  let characterImage;

  // Determine which character image to use based on type and color
  switch (type) {
    case "Bird":
      switch (color) {
        case "Blue":
          characterImage = BirdBlue;
          break;
        case "Green":
          characterImage = BirdGreen;
          break;
        case "Red":
          characterImage = BirdRed;
          break;
        case "White":
          characterImage = BirdWhite;
          break;
        case "Yellow":
          characterImage = BirdYellow;
          break;
        case "Orange":
          characterImage = BirdOrange;
          break;
        case "July":
          characterImage = BirdJuly;
          break;
        default:
          characterImage = BirdStencilColored;
          break;
      }
      break;
    case "Cat":
      switch (color) {
        case "Blue":
          characterImage = CatBlue;
          break;
        case "Green":
          characterImage = CatGreen;
          break;
        case "Red":
          characterImage = CatRed;
          break;
        case "White":
          characterImage = CatWhite;
          break;
        case "Yellow":
          characterImage = CatYellow;
          break;
        case "Orange":
          characterImage = CatOrange;
          break;
        case "July":
          characterImage = CatJuly;
          break;
        default:
          characterImage = CatStencilColored;
          break;
      }
      break;
    case "Penguin":
      switch (color) {
        case "Blue":
          characterImage = PenguinBlue;
          break;
        case "Green":
          characterImage = PenguinGreen;
          break;
        case "Red":
          characterImage = PenguinRed;
          break;
        case "White":
          characterImage = PenguinWhite;
          break;
        case "Yellow":
          characterImage = PenguinYellow;
          break;
        case "Orange":
          characterImage = PenguinOrange;
          break;
        case "July":
          characterImage = PenguinJuly;
          break;
        default:
          characterImage = PenguinStencilColored;
          break;
      }
      break;
    default:
      break;
  }

  // Determine which emotion face to overlay on the character image
  let emotionImage;
  switch (emotion) {
    case "Idle":
      emotionImage = emotion === "Idle" && (type === "Bird" ? BirdIdle : type === "Cat" ? CatIdle : PenguinIdle);
      break;
    case "Happy":
      emotionImage = emotion === "Happy" && (type === "Bird" ? BirdHappy : type === "Cat" ? CatHappy : PenguinHappy);
      break;
    case "Sad":
      emotionImage = emotion === "Sad" && (type === "Bird" ? BirdSad : type === "Cat" ? CatSad : PenguinSad);
      break;
    case "Fear":
      emotionImage = emotion === "Fear" && (type === "Bird" ? BirdFear : type === "Cat" ? CatFear : PenguinFear);
      break;
    case "Mad":
      emotionImage = emotion === "Mad" && (type === "Bird" ? BirdMad : type === "Cat" ? CatMad : PenguinMad);
      break;
    default:
      break;
  }

  return (
    <div className="Character">
      <img src={characterImage} alt="Character" className="currentPlayer" 
       style={{ filter: `brightness(200%) sepia(100%) hue-rotate(${color})` }} />
      {emotionImage && <img src={emotionImage} alt="Emotion" className="emotionOverlay" />}
    </div>
  );
}
// b0e02a 
export default Character;