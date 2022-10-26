// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  
  // Dropdown meny select part
  let hornType = document.getElementById("horn-select");
  let hornImage = document.querySelector("[alt='No image selected']");
  let hornSound = document.querySelector("[class='hidden']");

  hornType.addEventListener("change", (event) => {

    switch (event.target.value) {
      case "air-horn": 
        hornImage.src = "assets/images/air-horn.svg";
        hornSound.src = "assets/audio/air-horn.mp3";
        break;
      
      case "car-horn":
        hornImage.src = "assets/images/car-horn.svg";
        hornSound.src = "assets/audio/car-horn.mp3";
        break;
      
      case "party-horn":
        hornImage.src = "assets/images/party-horn.svg";
        hornSound.src = "assets/audio/party-horn.mp3";
        break;

      default:
        hornImage.src = "assets/images/no-image.png";
        hornSound.src = "";
        break;
    }
  })

  // Volume adjustment icon
  // TODO: implement volume adjustment functions
  let voluemAdjust = document.getElementById("volume");
  let volumeImg = document.querySelector("[alt='Volume level 2']");

  voluemAdjust.addEventListener("input", (event) => {
    
    if(event.target.value == 0) {
      volumeImg.src = "assets/icons/volume-level-0.svg";
    }
    else if(event.target.value < 33) {
      volumeImg.src = "assets/icons/volume-level-1.svg";
    }
    else if(event.target.value < 67) {
      volumeImg.src = "assets/icons/volume-level-2.svg";
    }
    else {
      volumeImg.src = "assets/icons/volume-level-3.svg";
    }
  })

  // Play sound
  // TODO

}