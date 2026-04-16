import { motion } from "framer-motion";
import { Play, Volume2 } from "lucide-react";
import AudioPlayer from "./AudioPlayer";
import { useTTS } from "../hooks/useTTS";

interface Section {
  heading: string;
  content: string;
}

const audioMap = {
  module1: ["/audio/module1-1.mp3", "/audio/module1-2.mp3", "/audio/module1-3.mp3"],
  module2: ["/audio/module2-1.mp3"],
  module3: ["/audio/module3-1.mp3", "/audio/module3-2.mp3"],
};

/* ---------------------------------------
   Helper: Convert **bold** into JSX nodes
---------------------------------------- */
function formatText(text: string) {
  const parts = text.split(/(\*\*.*?\*\*)/g);

  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="text-foreground font-semibold">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

function getSpeechText(section: Section) {
  return `${section.heading}. ${section.content}`
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/•/g, "")
    .replace(/\n+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/* ---------------------------------------
   Component
---------------------------------------- */
const ReadingSection = ({
  sections,
  module,
}: {
  sections: Section[];
  module: keyof typeof audioMap;
}) => {
  const { speak } = useTTS();

  return (
    <div className="space-y-8">
      {sections.map((section, i) => {
        const audioSrc = audioMap[module]?.[i];

        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            {/* Heading + optional audio */}
            <div className="flex items-center gap-4">
              <h3 className="font-display font-semibold text-xl text-foreground">
                {section.heading}
              </h3>

              {audioSrc ? (
                <AudioPlayer src={audioSrc} />
              ) : (
                <button
                  type="button"
                  onClick={() => speak(getSpeechText(section))}
                  className="inline-flex items-center gap-2 p-2 rounded-md bg-muted hover:bg-muted/70 transition border text-foreground"
                  aria-label="Read section aloud"
                >
                  <Play size={14} />
                  
                </button>
              )}
            </div>

            {/* Content */}
            <div className="prose prose-sm max-w-none text-foreground/80 leading-relaxed">
              {section.content.split("\n").map((paragraph, j) => {
                const trimmed = paragraph.trim();
                if (!trimmed) return null;

                // Bullet point
                if (trimmed.startsWith("•")) {
                  return (
                    <div key={j} className="flex gap-2 ml-2 my-1">
                      <span>{formatText(trimmed)}</span>
                    </div>
                  );
                }

                // Normal paragraph
                return (
                  <p key={j}>
                    {formatText(paragraph)}
                  </p>
                );
              })}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ReadingSection;
