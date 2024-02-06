import '../css/Selection.css';
import Bird from '../images/Characters/Bird/Bird_Stencil.png';
import Cat from '../images/Characters/Cat/Cat_Stencil.png';
import Penguin from '../images/Characters/Penguin/Penguin_Stencil.png';
import BackButton from './BackButton';

function Selection({ setCurrentPage, updateAnimalAttribute }) {
  return(
    <div className="Selection">
      <div className="characterContainer">
        <div className="characterLabel">Select a Character</div>
        <div className="characters">
          <img className="animal" src={Bird} alt="Bird Selection" onClick={() => {setCurrentPage("Customization"); updateAnimalAttribute("type", "Bird")}} draggable={false}></img>
          <img className="animal" src={Cat} alt="Cat Selection" onClick={() => {setCurrentPage("Customization"); updateAnimalAttribute("type", "Cat")}} draggable={false}></img>
          <img className="animal" src={Penguin} alt="Penguin Selection" onClick={() => {setCurrentPage("Customization"); updateAnimalAttribute("type", "Penguin")}} draggable={false}></img>
        </div>
      </div>
      <BackButton navigateBack={() => setCurrentPage("Home")}/>
    </div>
  );
}

export default Selection;