console.log("hello World");

const voiceSelect = document.getElementById("voiceSelect");
const speakButton = document.getElementById("speakButton");
const textInput = document.getElementById("textInput");
const languageSelect = document.getElementById("langSelect");

const languages = [
  { code: "en-US", name: "English (United States)" },
  { code: "es-ES", name: "Spanish (Spain)" },
  { code: "fr-FR", name: "French (France)" },
  { code: "de-DE", name: "German (Germany)" },
  { code: "it-IT", name: "Italian (Italy)" },
  { code: "ja-JP", name: "Japanese (Japan)" },
  { code: "zh-CN", name: "Chinese (China)" },
  { code: "hi-IN", name: "Hindi (India)" },
];

// languages.forEach(({ code, name }) => {
//   const option = document.createElement("option");
//   option.value = code;
//   option.textContent = name;
//   languageSelect.appendChild(option);
// });

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
