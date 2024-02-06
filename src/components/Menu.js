import '../css/Menu.css';
import LycleLogo from '../images/Lycle_Logo.png';

function Menu({ setCurrentPage, audioRef, backgroundMusic }) {

  return(
    <div className="Menu">
      <img className="logo" src={LycleLogo} alt="Lycle Logo"></img>
      <div className="menuButtons">
        <button onClick={() => {setCurrentPage("Selection"); backgroundMusic ? audioRef.current.play() : audioRef.current++}}>Play</button>
        <button onClick={() => setCurrentPage("Settings")}>Audio</button>
      </div>
      <div className="credits">
        <div>Fayaz & Christopher</div>
        <div>Hack_NCState 2024</div>
      </div>
    </div>
  );
}

export default Menu;