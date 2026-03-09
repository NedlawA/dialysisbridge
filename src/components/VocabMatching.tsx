import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, RotateCcw, Sparkles } from "lucide-react";

export interface VocabPair {
  term: string;
  definition: string;
}

const VocabMatching = ({ pairs }: { pairs: VocabPair[] }) => {
  const [selectedTerm, setSelectedTerm] = useState<number | null>(null);
  const [selectedDef, setSelectedDef] = useState<number | null>(null);
  const [matched, setMatched] = useState<Set<number>>(new Set());
  const [wrongPair, setWrongPair] = useState<{ term: number; def: number } | null>(null);

  const shuffledDefs = useMemo(() => [...pairs].sort(() => Math.random() - 0.5), [pairs]);

  const handleTermClick = (i: number) => {
    if (matched.has(i)) return;
    setSelectedTerm(i);
    setWrongPair(null);
    if (selectedDef !== null) tryMatch(i, selectedDef);
  };

  const handleDefClick = (defIdx: number) => {
    const origIdx = pairs.indexOf(shuffledDefs[defIdx]);
    if (matched.has(origIdx)) return;
    setSelectedDef(defIdx);
    setWrongPair(null);
    if (selectedTerm !== null) tryMatch(selectedTerm, defIdx);
  };

  const tryMatch = (termIdx: number, defIdx: number) => {
    const term = pairs[termIdx];
    const def = shuffledDefs[defIdx];
    if (term.definition === def.definition) {
      setMatched((prev) => new Set([...prev, termIdx]));
      setSelectedTerm(null);
      setSelectedDef(null);
    } else {
      setWrongPair({ term: termIdx, def: defIdx });
      setTimeout(() => { setSelectedTerm(null); setSelectedDef(null); setWrongPair(null); }, 800);
    }
  };

  const reset = () => { setMatched(new Set()); setSelectedTerm(null); setSelectedDef(null); setWrongPair(null); };
  const allMatched = matched.size === pairs.length;

  return (
    <div className="space-y-6">
      <p className="text-sm text-muted-foreground">Click a term on the left, then click its matching definition on the right.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Terms</h4>
          {pairs.map((pair, i) => {
            const isMatched = matched.has(i);
            const isSelected = selectedTerm === i;
            const isWrong = wrongPair?.term === i;
            let cardClass = "vocab-card";
            if (isMatched) cardClass = "vocab-card vocab-card-matched";
            else if (isWrong) cardClass = "vocab-card border-destructive bg-destructive/5";
            else if (isSelected) cardClass = "vocab-card vocab-card-selected";
            return (
              <motion.div key={`term-${i}`} onClick={() => handleTermClick(i)} className={cardClass} whileTap={{ scale: 0.97 }}>
                <span className="font-semibold text-sm">{pair.term}</span>
                {isMatched && <CheckCircle2 className="w-4 h-4 text-success inline ml-2" />}
              </motion.div>
            );
          })}
        </div>
        <div className="space-y-2">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Definitions</h4>
          {shuffledDefs.map((pair, i) => {
            const origIdx = pairs.indexOf(pair);
            const isMatched = matched.has(origIdx);
            const isSelected = selectedDef === i;
            const isWrong = wrongPair?.def === i;
            let cardClass = "vocab-card";
            if (isMatched) cardClass = "vocab-card vocab-card-matched";
            else if (isWrong) cardClass = "vocab-card border-destructive bg-destructive/5";
            else if (isSelected) cardClass = "vocab-card vocab-card-selected";
            return (
              <motion.div key={`def-${i}`} onClick={() => handleDefClick(i)} className={cardClass} whileTap={{ scale: 0.97 }}>
                <span className="text-sm">{pair.definition}</span>
                {isMatched && <CheckCircle2 className="w-4 h-4 text-success inline ml-2" />}
              </motion.div>
            );
          })}
        </div>
      </div>
      {allMatched && (
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
          className="flex items-center gap-2 p-4 rounded-xl bg-success/10 text-success font-semibold text-sm">
          <Sparkles className="w-5 h-5" /> All terms matched! Great work!
        </motion.div>
      )}
      <button onClick={reset}
        className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium hover:bg-secondary/80 transition-colors">
        <RotateCcw className="w-4 h-4" /> Reset
      </button>
    </div>
  );
};

export default VocabMatching;
