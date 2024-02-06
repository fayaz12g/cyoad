import '../css/Settings.css';
import BackButton from './BackButton';

function Settings({ setCurrentPage, gameSounds, setGameSounds, audioRef, backgroundMusic, setBackgroundMusic }) {
  return(
    <div className="Settings">
      <div className="settingsTitle">Audio Settings</div>
      <div className="options">
        <div className="option">
          <input type="checkbox" checked={gameSounds} onClick={(e) => {setGameSounds(!gameSounds)}} />
          Game Sounds
        </div>

        <div className="option">
          <input type="checkbox" checked={backgroundMusic} onClick={(e) => {setBackgroundMusic(!backgroundMusic); backgroundMusic ? audioRef.current.pause() : audioRef.current.play()}} />
          Background Music
        </div>
      </div>
      <BackButton navigateBack={() => setCurrentPage("Home")} />
    </div>
  );
}

export default Settings;