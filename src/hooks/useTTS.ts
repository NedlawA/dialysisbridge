import { useCallback } from "react";

export function useTTS() {
  const speak = useCallback((text: string, onEnd?: () => void) => {
    if (!window.speechSynthesis) return;

    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "en-US";
    utter.rate = 1;
    utter.pitch = 1;
    utter.onend = () => onEnd?.();

    window.speechSynthesis.cancel(); // prevents overlap
    window.speechSynthesis.speak(utter);
  }, []);

  const pause = useCallback(() => {
    if (!window.speechSynthesis || !window.speechSynthesis.speaking || window.speechSynthesis.paused) return;
    window.speechSynthesis.pause();
  }, []);

  const resume = useCallback(() => {
    if (!window.speechSynthesis || !window.speechSynthesis.paused) return;
    window.speechSynthesis.resume();
  }, []);

  const cancel = useCallback(() => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
  }, []);

  return { speak, pause, resume, cancel };
}
