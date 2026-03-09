import { useCallback } from "react";

export function useTTS() {
  const speak = useCallback((text: string) => {
    if (!window.speechSynthesis) return;

    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "en-US";
    utter.rate = 1;
    utter.pitch = 1;

    window.speechSynthesis.cancel(); // prevents overlap
    window.speechSynthesis.speak(utter);
  }, []);

  return { speak };
}
