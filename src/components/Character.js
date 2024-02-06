import '../css/Character.css';

import BirdBlue from '../images/Characters/Bird/Colors/Bird_Blue.png';
import BirdGreen from '../images/Characters/Bird/Colors/Bird_Green.png';
import BirdRed from '../images/Characters/Bird/Colors/Bird_Red.png';
import BirdWhite from '../images/Characters/Bird/Colors/Bird_White.png';
import BirdYellow from '../images/Characters/Bird/Colors/Bird_Yellow.png';
import BirdOrange from '../images/Characters/Bird/Colors/Bird_Orange.png';
import BirdJuly from '../images/Characters/Bird/Colors/Bird_July.png';

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

import PenguinIdle from '../images/Characters/Penguin/Faces/Penguin_Idle.png';
import PenguinHappy from '../images/Characters/Penguin/Faces/Penguin_Happy.png';
import PenguinSad from '../images/Characters/Penguin/Faces/Penguin_Sad.png';
import PenguinFear from '../images/Characters/Penguin/Faces/Penguin_Fear.png';
import PenguinMad from '../images/Characters/Penguin/Faces/Penguin_Mad.png';

function Character({ type, color, emotion, species, updateAnimalAttribute }) {

  return(
    <div className="Character">
      {type === "Bird" && <div>
        {color === "Blue" && <div>
          <img src={BirdBlue} alt="Character" className="currentPlayer"></img>
        </div>}
        {color === "Green" && <div>
          <img src={BirdGreen} alt="Character" className="currentPlayer"></img>
        </div>}
        {color === "Red" && <div>
          <img src={BirdRed} alt="Character" className="currentPlayer"></img>
        </div>}
        {color === "White" && <div>
          <img src={BirdWhite} alt="Character" className="currentPlayer"></img>
        </div>}
        {color === "Yellow" && <div>
          <img src={BirdYellow} alt="Character" className="currentPlayer"></img>
        </div>}
        {color === "Orange" && <div>
          <img src={BirdOrange} alt="Character" className="currentPlayer"></img>
        </div>}
        {color === "July" && <div>
          <img src={BirdJuly} alt="Character" className="currentPlayer"></img>
        </div>}

        {emotion === "Idle" && <div>
          <img src={BirdIdle} alt="Character" className="currentPlayer"></img>
        </div>}
        {emotion === "Happy" && <div>
          <img src={BirdHappy} alt="Character" className="currentPlayer"></img>
        </div>}
        {emotion === "Sad" && <div>
          <img src={BirdSad} alt="Character" className="currentPlayer"></img>
        </div>}
        {emotion === "Fear" && <div>
          <img src={BirdFear} alt="Character" className="currentPlayer"></img>
        </div>}
        {emotion === "Mad" && <div>
          <img src={BirdMad} alt="Character" className="currentPlayer"></img>
        </div>}
      </div>}

      {type === "Cat" && <div>
        {color === "Blue" && <div>
          <img src={CatBlue} alt="Character" className="currentPlayer"></img>
        </div>}
        {color === "Green" && <div>
          <img src={CatGreen} alt="Character" className="currentPlayer"></img>
        </div>}
        {color === "Red" && <div>
          <img src={CatRed} alt="Character" className="currentPlayer"></img>
        </div>}
        {color === "White" && <div>
          <img src={CatWhite} alt="Character" className="currentPlayer"></img>
        </div>}
        {color === "Yellow" && <div>
          <img src={CatYellow} alt="Character" className="currentPlayer"></img>
        </div>}
        {color === "Orange" && <div>
          <img src={CatOrange} alt="Character" className="currentPlayer"></img>
        </div>}
        {color === "July" && <div>
          <img src={CatJuly} alt="Character" className="currentPlayer"></img>
        </div>}

        {emotion === "Idle" && <div>
          <img src={CatIdle} alt="Character" className="currentPlayer"></img>
        </div>}
        {emotion === "Happy" && <div>
          <img src={CatHappy} alt="Character" className="currentPlayer"></img>
        </div>}
        {emotion === "Sad" && <div>
          <img src={CatSad} alt="Character" className="currentPlayer"></img>
        </div>}
        {emotion === "Fear" && <div>
          <img src={CatFear} alt="Character" className="currentPlayer"></img>
        </div>}
        {emotion === "Mad" && <div>
          <img src={CatMad} alt="Character" className="currentPlayer"></img>
        </div>}
      </div>}

      {type === "Penguin" && <div>
        {color === "Blue" && <div>
          <img src={PenguinBlue} alt="Character" className="currentPlayer"></img>
        </div>}
        {color === "Green" && <div>
          <img src={PenguinGreen} alt="Character" className="currentPlayer"></img>
        </div>}
        {color === "Red" && <div>
          <img src={PenguinRed} alt="Character" className="currentPlayer"></img>
        </div>}
        {color === "White" && <div>
          <img src={PenguinWhite} alt="Character" className="currentPlayer"></img>
        </div>}
        {color === "Yellow" && <div>
          <img src={PenguinYellow} alt="Character" className="currentPlayer"></img>
        </div>}
        {color === "Orange" && <div>
          <img src={PenguinOrange} alt="Character" className="currentPlayer"></img>
        </div>}
        {color === "July" && <div>
          <img src={PenguinJuly} alt="Character" className="currentPlayer"></img>
        </div>}

        {emotion === "Idle" && <div>
          <img src={PenguinIdle} alt="Character" className="currentPlayer"></img>
        </div>}
        {emotion === "Happy" && <div>
          <img src={PenguinHappy} alt="Character" className="currentPlayer"></img>
        </div>}
        {emotion === "Sad" && <div>
          <img src={PenguinSad} alt="Character" className="currentPlayer"></img>
        </div>}
        {emotion === "Fear" && <div>
          <img src={PenguinFear} alt="Character" className="currentPlayer"></img>
        </div>}
        {emotion === "Mad" && <div>
          <img src={PenguinMad} alt="Character" className="currentPlayer"></img>
        </div>}
      </div>}
    </div>
  );
}

export default Character;