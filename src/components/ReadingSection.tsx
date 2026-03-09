import { motion } from "framer-motion";
import { Keyword } from "@/components/Keyword";

interface Section {
  heading: string;
  content: string;
}

interface ReadingSectionProps {
  sections: Section[];
  keywords?: string[]; // pass your keyword list
}

const ReadingSection = ({ sections, keywords = [] }: ReadingSectionProps) => {
  // Converts **word** into <Keyword /> ONLY if it's in the keywords list
  const renderWithKeywords = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);

    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        const word = part.replace(/\*\*/g, "").trim();

        // Only convert to TTS if it's in the keyword list
        if (keywords.includes(word.toLowerCase())) {
          return <Keyword key={i} word={word} />;
        }

        // Otherwise render as normal bold text
        return <strong key={i}>{word}</strong>;
      }

      return <span key={i}>{part}</span>;
    });
  };

  return (
    <div className="space-y-8">
      {sections.map((section, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          viewport={{ once: true }}
          className="space-y-3"
        >
          <h3 className="font-display font-semibold text-xl text-foreground">
            {section.heading}
          </h3>

          <div className="prose prose-sm max-w-none text-foreground/80 leading-relaxed">
            {section.content.split("\n").map((paragraph, j) => {
              if (!paragraph.trim()) return null;

              const isBullet = paragraph.trim().startsWith("•");

              return (
                <div
                  key={j}
                  className={isBullet ? "flex gap-2 ml-2 my-1" : ""}
                >
                  {isBullet && <span>•</span>}
                  <p className="inline-block">
                    {renderWithKeywords(paragraph.replace(/^•\s*/, ""))}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ReadingSection;
