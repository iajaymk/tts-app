console.log("hello World");

const voiceSelect = document.getElementById("voiceSelect");
const speakButton = document.getElementById("speakButton");
const textInput = document.getElementById("textInput");

let voices = [];
function loadVoices() {
  voices = speechSynthesis.getVoices();
  voiceSelect.innerHTML = voices
    .map(
      (voice, index) =>
        `<option value="${index}">${voice.name} (${voice.lang})</option>`
    )
    .join("");
}

speechSynthesis.onvoiceschanged = loadVoices;
loadVoices();

speakButton.addEventListener("click", () => {
  const utterance = new SpeechSynthesisUtterance(textInput.value);
  const selectedVoice = voices[voiceSelect.value];
  if (selectedVoice) utterance.voice = selectedVoice;
  speechSynthesis.speak(utterance);
});
