// expose.js

const jsConfetti = new JSConfetti();

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO


//store the element of horn-select in var and the sound it makes in changeSound
var e = document.getElementById("horn-select");
var changeSound = document.getElementsByClassName("hidden");

//if the horn is changed, then get the selected value, change the src attribute of the image to be displayed and change the sound to be made
e.addEventListener('change', (event) => {
  var result = e.options[e.selectedIndex].value;
  var changeImage = document.querySelector("#expose img");
  changeImage.setAttribute("src", "assets/images/" + result + ".svg");
  changeImage.setAttribute("alt", result + " image is being displayed");
  changeSound[0].setAttribute("src", "assets/audio/" + result + ".mp3");
  changeSound[0].setAttribute("alt", result + " sound will be played");
}); 

var playButton = document.querySelector('button');

//if the play button is pressed, play the sound
playButton.addEventListener('click', event => {
  changeSound[0].play();
  if (changeSound[0].src.includes("party-horn")) //if the current sound src has "party-horn" in its source then we throw confetti
  {
    jsConfetti.addConfetti({
      emojis: ['🦄','🌈', '⚡️', '💥', '✨', '💫', '🌸'],
      emojiSize: 100,
      confettiNumber: 100,
    })
  }
});

//get the voluem element
var changeVolume = document.getElementById("volume");


//stores the element for the volume image
var volumeImage = document.querySelector("#volume-controls img");
//if the input of the volume is changed
changeVolume.addEventListener('input', updateVolume);

function updateVolume(e) {
  var newVolumeValue = document.getElementById("volume").value; //get the vlaue of the current volume
  document.getElementById("volume").value = newVolumeValue; //change the objects volume to the new volume
  changeSound[0].volume = newVolumeValue / 100; //change the current svolume being played

  if (newVolumeValue <= 0) //checks to change the icon 
  {
    volumeImage.setAttribute("src", "/assets/icons/volume-level-0.svg");
  }
  else if(newVolumeValue >= 1 && newVolumeValue < 33)
  {
    volumeImage.setAttribute("src", "/assets/icons/volume-level-1.svg");
  }
  else if(newVolumeValue >= 33 && newVolumeValue < 67){
    volumeImage.setAttribute("src", "/assets/icons/volume-level-2.svg");
  }
  else if (newVolume >= 67) {
    volumeImage.setAttribute("src", "/assets/icons/volume-level-3.svg");
  }
}

}