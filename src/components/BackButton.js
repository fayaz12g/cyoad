import '../css/BackButton.css';

import BackImage from '../images/back_button.png';

function BackButton({ navigateBack }) {
  return(
    <div className="BackButton">
      <img src={BackImage} draggable="false" alt="Back Button" onClick={navigateBack}></img>
    </div>
  );
}

export default BackButton;