// expose.js
window.addEventListener('DOMContentLoaded', init);

function init() {
  // jsConfetti constant
  const jsConfetti = new JSConfetti();
  
  // Dropdown menu select part
  let hornType = document.getElementById("horn-select");
  let hornImage = document.querySelector("[alt='No image selected']");
  let hornSound = document.querySelector("[class='hidden']");

  // An event listener to track the action of drop-down menu
  hornType.addEventListener("change", (event) => {
    
    // Display image and load sound files base on drop-down selection
    switch (event.target.value) {
      case "air-horn": 
        hornImage.src = "assets/images/air-horn.svg"; // Display image
        hornSound.src = "assets/audio/air-horn.mp3";  // Load sound files
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
  let voluemAdjust = document.getElementById("volume");
  let volumeImg = document.querySelector("[alt='Volume level 2']");

  // An event listener to track volume level input
  voluemAdjust.addEventListener("input", (event) => {
    var volume = event.target.value;

    // Display different volume icons base on value
    if(volume == 0) {
      volumeImg.src = "assets/icons/volume-level-0.svg";
    }
    else if(volume < 33) {
      volumeImg.src = "assets/icons/volume-level-1.svg";
    }
    else if(volume < 67) {
      volumeImg.src = "assets/icons/volume-level-2.svg";
    }
    else {
      volumeImg.src = "assets/icons/volume-level-3.svg";
    }

    // Adjust the actual volume (0 to 1)
    // https://www.w3schools.com/tags/av_prop_volume.asp
    hornSound.volume = volume / 100;
  })

  // Play sound
  let playButton = document.querySelector("button");  // Play button

  // Eventlistener to track the "click" of play button
  playButton.addEventListener("click", (event) => {
    // Call jsConfetti if the horn chosen is a party horn
    if(hornType.value == "party-horn") {
      jsConfetti.addConfetti();
    }

    // Play the horn sound
    hornSound.play();
  })
  
}