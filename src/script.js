const playBtn = document.getElementById("play-button");
const pauseBtn = document.getElementById("pause-button");
const stopBtn = document.getElementById("stopButton");

const setStyleForButton = ({ isPlay, isPause, isStop }) => {
  playBtn.style.display = isPlay ? "none" : "unset";
  pauseBtn.style.display = isPause ? "none" : "unset";
  stopBtn.style.display = isStop ? "none" : "unset";
};

const speaker = window.speechSynthesis;

playBtn.addEventListener("click", () => {
  if (speaker.paused) {
    setStyleForButton({ isPause: false, isStop: false, isPlay: true });
    speaker.resume();
    return;
  }
  const text =
    document.getElementById("text").value || ' "Please type some text"';

  const speakText = new SpeechSynthesisUtterance(text);
  speakText.lang = "hi-IN";
  speakText.volume = 10;
  speaker.speak(speakText);
  setStyleForButton({ isPause: false, isStop: false, isPlay: true });
});

pauseBtn.addEventListener("click", () => {
  speaker.pause();
  setStyleForButton({ isPause: true, isStop: false, isPlay: false });
});

stopBtn.addEventListener("click", () => {
  if (typeof speaker.cancel === "function") {
    speaker.cancel();
  }
  setStyleForButton({ isPause: true, isStop: true, isPlay: false });
});
