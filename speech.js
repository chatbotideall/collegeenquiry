// Text to Speech

const synth = window.speechSynthesis;

const textToSpeech = (string) => {
  let voice = new SpeechSynthesisUtterance(string);
  voice.text = string;
  voice.lang = "en-US";
  voice.volume = 100;
  voice.rate = 0.7;
  voice.pitch = 0.5; // Can be 0, 1, or 2
  synth.speak(voice);
}
