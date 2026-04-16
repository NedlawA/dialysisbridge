let currentAudio: HTMLAudioElement | null = null;

export function playExclusive(audio: HTMLAudioElement) {
  if (window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }

  if (currentAudio && currentAudio !== audio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
  currentAudio = audio;
}

export function stopExclusiveAudio() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
  }
}
