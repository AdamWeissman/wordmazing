//below code is for setting the speech
var synth = window.speechSynthesis;
//var inputTxt = "Hi there"
//var inputForm = document.querySelector('form');
let eventCounter = 0
var textToSpeak = []

function grabTheText() {
  textToSpeak = [] //clear textToSpeak
  const inputTxt = document.getElementById('swb05matchThis').innerHTML;
  if (eventCounter <= 500){
    textToSpeak[0] = "Hi I'm Wordmazing, what's your name?"
    return textToSpeak[0]}
  else {
    textToSpeak.push(inputTxt)
    return textToSpeak[0]
  }
}

function speak() {  
  if (synth.speaking) {
        console.error('speechSynthesis.speaking');
        return;
    }
    if (textToSpeak[0] !== '') {
    var voices = synth.getVoices();
    var utterThis = new SpeechSynthesisUtterance(textToSpeak[0]) 
    try {
      utterThis.pitch = 1.0;
      utterThis.rate = .9;
      utterThis.voice = voices[49]}
    catch {
      utterThis.pitch = 1.7;
      utterThis.rate = .7;
      utterThis.voice = voices[0]}
      //leaves voice as default
    }
    utterThis.onend = function (event) {
        console.log('SpeechSynthesisUtterance.onend');
    } 
    utterThis.onerror = function (event) {
        console.error('SpeechSynthesisUtterance.onerror');
        console.log(utterThis)
    }

    synth.speak(utterThis);
    console.log(utterThis)
  }


// inputForm.onsubmit = function(event) {
//   event.preventDefault();

//   speak();

//   //inputTxt.blur();
// }


// this is to set a trigger to activate everything
const main = document.querySelector('main')

function shit () {
 return "shit"
}
shit()

main.addEventListener('mousemove', e => {
eventCounter += 1;
grabTheText()
speak()});

// main.onmousemove = function (event) {
//   event.preventDefault();

//   if (enterEventCount === 100) {
//     if (console.log("yo")){
//     speak();}
//   }
// }



// pitch.onchange = function() {
//   pitchValue.textContent = pitch.value;
// }

// rate.onchange = function() {
//   rateValue.textContent = rate.value;
// }

// voiceSelect.onchange = function(){
//   speak();
// }






// var pitch = document.querySelector('#pitch');
// var pitchValue = document.querySelector('.pitch-value');
// var rate = document.querySelector('#rate');
// var rateValue = document.querySelector('.rate-value');

// var voices = [];

// function theVoice() {

// }

// function populateVoiceList() {
//   voices = synth.getVoices().sort(function (a, b) {
//       const aname = a.name.toUpperCase(), bname = b.name.toUpperCase();
//       if ( aname < bname ) return -1;
//       else if ( aname == bname ) return 0;
//       else return +1;
//   });
//   var selectedIndex = voiceSelect.selectedIndex < 0 ? 0 : voiceSelect.selectedIndex;
//   voiceSelect.innerHTML = '';
//   for(i = 0; i < voices.length ; i++) {
//     var option = document.createElement('option');
//     option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
    
//     if(voices[i].default) {
//       option.textContent += ' -- DEFAULT';
//     }

//     option.setAttribute('data-lang', voices[i].lang);
//     option.setAttribute('data-name', voices[i].name);
//     voiceSelect.appendChild(option);
//   }
//   voiceSelect.selectedIndex = selectedIndex;
// }

// populateVoiceList();
// if (speechSynthesis.onvoiceschanged !== undefined) {
//   speechSynthesis.onvoiceschanged = populateVoiceList;
// }
