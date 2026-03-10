import { motion } from "framer-motion";
import AudioPlayer from "./AudioPlayer";

interface Section {
  heading: string;
  content: string;
}

const audioMap: Record<number, string> = {
  0: "/audio/module1-1.mp3",
  1: "/audio/module1-2.mp3",
  2: "/audio/module1-3.mp3",
};

const ReadingSection = ({ sections }: { sections: Section[] }) => {
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
          {/* Heading + Audio Button */}
          <div className="flex items-center
            gap-4">
            <h3 className="font-display font-semibold text-xl text-foreground">
              {section.heading}
            </h3>

            <AudioPlayer src={audioMap[i]} />
          </div>

          {/* Content */}
          <div className="prose prose-sm max-w-none text-foreground/80 leading-relaxed">
            {section.content.split("\n").map((paragraph, j) => {
              if (!paragraph.trim()) return null;

              const formatted = paragraph.replace(
                /\*\*(.*?)\*\*/g,
                '<strong class="text-foreground font-semibold">$1</strong>'
              );

              if (paragraph.trim().startsWith("•")) {
                return (
                  <div key={j} className="flex gap-2 ml-2 my-1">
                    <span dangerouslySetInnerHTML={{ __html: formatted }} />
                  </div>
                );
              }

              return (
                <p key={j} dangerouslySetInnerHTML={{ __html: formatted }} />
              );
            })}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ReadingSection;
