import '../css/Menu.css';
import LycleLogo from '../images/Lycle_Logo.png';

function Menu({ setCurrentPage, audioRef, backgroundMusic, buttonColor }) {

  return(
    <div className="Menu">
      <img className="logo" src={LycleLogo} alt="Lycle Logo"></img>
      <div className="menuButtons">
        <button style={{ backgroundColor: buttonColor }} onClick={() => {setCurrentPage("Selection"); backgroundMusic ? audioRef.current.play() : audioRef.current++}}>Play</button>
        <button style={{ backgroundColor: buttonColor }} onClick={() => setCurrentPage("Settings")}>Settings</button>
      </div>
      <div className="credits">
        <div>Fayaz & Christopher</div>
        <div>Hack_NCState 2024</div>
      </div>
    </div>
  );
}

export default Menu;