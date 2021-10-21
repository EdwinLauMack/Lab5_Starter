// explore.js



window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO

  var synth = window.speechSynthesis;

  var voiceSelect = document.getElementById("voice-select");

  var voices = [];

  var timer = setInterval(function() {
    var voices = synth.getVoices();
    if (voices.length !== 0) {

  for(var i = 0; i < voices.length ; i++) {
    var option = document.createElement('option');
    option.textContent = voices[i].name + ' (' + voices[i].lang + ')';

    if(voices[i].default) {
      option.textContent += ' -- DEFAULT';
    }

    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    voiceSelect.appendChild(option);
      clearInterval(timer);
    }
  
    document.querySelector('#explore button').onclick = function(event) {
      event.preventDefault();
    
      var utterThis = new SpeechSynthesisUtterance(document.getElementById("text-to-speak").value);
      var selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    
    
      for(var i = 0; i < voices.length ; i++) {
        if(voices[i].name === selectedOption) {
          utterThis.voice = voices[i];
        }
        
      }
      synth.speak(utterThis);
      document.querySelector('#explore img').setAttribute("src", "assets/images/smiling-open.png");
      utterThis.onend = function(event) {
        document.querySelector('#explore img').setAttribute("src", "assets/images/smiling.png");
      }

    
      document.getElementById("text-to-speak").blur();
    }
  }
}, 200);

}

