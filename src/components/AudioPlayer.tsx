import { useRef, useState } from "react";
import { Play, Pause } from "lucide-react"; // optional icons
import { playExclusive } from "@/data/audioController";

export default function AudioPlayer({ src }: { src: string }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    // Ensure only one audio plays at a time
    playExclusive(audio);

    audio.play().then(() => {
      setIsPlaying(true);
    }).catch((err) => console.error("Audio play error:", err));
  };

  return (
    <div className="inline-flex items-center">
      <button
        onClick={togglePlay}
        className="p-2 rounded-md bg-muted hover:bg-muted/70 transition border text-foreground"
        aria-label={isPlaying ? "Pause audio" : "Play audio"}
      >
        {isPlaying ? <Pause size={18} /> : <Play size={18} />}
      </button>

      <audio
        ref={audioRef}
        src={src}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
      />
    </div>
  );
}
