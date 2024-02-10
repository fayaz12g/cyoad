import React, { useEffect, useRef, useState } from 'react';
import '../css/Character.css';
import CatStencilColored from '../images/Characters/Cat/Cat_Stencil_colored.png'; // Import the base stencil image
import BirdIdle from '../images/Characters/Bird/Faces/Bird_Idle.png';
import BirdHappy from '../images/Characters/Bird/Faces/Bird_Happy.png';
import BirdSad from '../images/Characters/Bird/Faces/Bird_Sad.png';
import BirdFear from '../images/Characters/Bird/Faces/Bird_Fear.png';
import BirdMad from '../images/Characters/Bird/Faces/Bird_Mad.png';
import CatIdle from '../images/Characters/Cat/Faces/Cat_Idle.png';
import CatHappy from '../images/Characters/Cat/Faces/Cat_Happy.png';
import CatSad from '../images/Characters/Cat/Faces/Cat_Sad.png';
import CatFear from '../images/Characters/Cat/Faces/Cat_Fear.png';
import CatMad from '../images/Characters/Cat/Faces/Cat_Mad.png';
import PenguinIdle from '../images/Characters/Penguin/Faces/Penguin_Idle.png';
import PenguinHappy from '../images/Characters/Penguin/Faces/Penguin_Happy.png';
import PenguinSad from '../images/Characters/Penguin/Faces/Penguin_Sad.png';
import PenguinFear from '../images/Characters/Penguin/Faces/Penguin_Fear.png';
import PenguinMad from '../images/Characters/Penguin/Faces/Penguin_Mad.png';

function Character({ type, color, emotion, orientation }) {
  const canvasRef = useRef(null);
  const [characterImage, setCharacterImage] = useState(null);

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      const img = new Image();
      const modifiedSrc = `${CatStencilColored}?t=${Date.now()}`; // Append timestamp to the image source URL
      img.src = modifiedSrc;
      img.onload = () => {
        ctx.drawImage(img, 0, 0, canvasRef.current.width, canvasRef.current.height);
        const imageData = ctx.getImageData(0, 0, canvasRef.current.width, canvasRef.current.height);
        const data = imageData.data;
        // console.log("current color is " + color)
        const hexColor = color.startsWith('#') ? color : `#FF0000`; // Ensure color is in hex format
        const rgbColor = hexToRgb(hexColor);
        
        // Replace all pixels with the color b0e02a (hex color for "green") with the provided color
        for (let i = 0; i < data.length; i += 4) {
          if (data[i] === 176 && data[i + 1] === 224 && data[i + 2] === 42) { // Check if pixel is green
            data[i] = rgbColor.r; // Set red component
            data[i + 1] = rgbColor.g; // Set green component
            data[i + 2] = rgbColor.b; // Set blue component
          }
        }
        ctx.putImageData(imageData, 0, 0);

        // Convert the canvas to data URL and set it to characterImage state
        setCharacterImage(canvasRef.current.toDataURL());
      };
    }
  }, [color]);

  // Function to convert hex color to RGB
  function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16)
        }
      : null;
  }

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
      <img src={characterImage} alt="Character" className="currentPlayer" />
      {emotionImage && <img src={emotionImage} alt="Emotion" className="currentPlayer" />}
      <canvas ref={canvasRef} width={2300} height={2000} style={{ display: 'none' }} />
    </div>
  );
}

export default Character;
