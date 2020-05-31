var synth = window.speechSynthesis;
//var textToSpeak = []


function speak() {  
  if (synth.speaking) {
        console.error('speechSynthesis.speaking');
        return;
    }
    if ([rightHere] !== '') {
    var voices = synth.getVoices();
    var utterThis = new SpeechSynthesisUtterance([rightHere]) 
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