import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle, RotateCcw } from "lucide-react";

export interface FIBQuestion {
  id: string;
  sentence: string;
  blank: string;
  options: string[];
}

interface Answer {
  [blankId: string]: { value: string; correct: boolean | null };
}

const FillInTheBlank = ({ questions }: { questions: FIBQuestion[] }) => {
  const [answers, setAnswers] = useState<Answer>({});
  const [checked, setChecked] = useState(false);
  const [selectedWord, setSelectedWord] = useState<string | null>(null);

  // ⭐ Unique storage key for THIS activity
  const storageKey = `fib-${questions[0].id}`;

  // ⭐ Load saved progress on mount
  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      const parsed = JSON.parse(saved);
      setAnswers(parsed.answers || {});
      setChecked(parsed.checked || false);
    }
  }, [storageKey]);

  // ⭐ Save progress whenever answers or checked state changes
  useEffect(() => {
    localStorage.setItem(
      storageKey,
      JSON.stringify({ answers, checked })
    );
  }, [answers, checked, storageKey]);

  const allOptions = questions.flatMap((q) => q.options);
  const uniqueOptions = [...new Set(allOptions)].sort(() => Math.random() - 0.5);
  const usedWords = Object.values(answers).map((a) => a.value);

  const handleWordClick = (word: string) => {
    if (usedWords.includes(word)) return;
    setSelectedWord(word);
  };

  const handleBlankClick = (blankId: string) => {
    if (!selectedWord) return;

    setAnswers((prev) => ({
      ...prev,
      [blankId]: { value: selectedWord, correct: null },
    }));

    setSelectedWord(null);
  };

  const clearBlank = (blankId: string) => {
    setAnswers((prev) => {
      const updated = { ...prev };
      delete updated[blankId];
      return updated;
    });
  };

  const checkAnswers = () => {
    setChecked(true);
    const updated: Answer = {};
    questions.forEach((q) => {
      const a = answers[q.id];
      if (a) updated[q.id] = { value: a.value, correct: a.value === q.blank };
    });
    setAnswers(updated);
  };

  const reset = () => {
    setAnswers({});
    setChecked(false);
    setSelectedWord(null);
  };

  const score = checked ? Object.values(answers).filter((a) => a.correct).length : null;

  return (
    <div className="space-y-6">
      <p className="text-sm text-muted-foreground">
        Click a term from the word bank, then click its matching blank.
      </p>
      {/* Word bank */}
      <div className="flex flex-wrap gap-2 p-4 bg-muted/50 rounded-xl mb-6">
        {uniqueOptions.map((word) => {
          const isUsed = usedWords.includes(word);
          const isSelected = selectedWord === word;

          return (
            <button
              key={word}
              onClick={() => handleWordClick(word)}
              disabled={isUsed}
              className={`drag-item px-3 py-1 rounded-md border text-sm transition
                ${isUsed ? "opacity-30 cursor-not-allowed" : ""}
                ${isSelected ? "ring-2 ring-primary scale-105" : ""}
              `}
            >
              {word}
            </button>
          );
        })}
      </div>

      {/* Questions */}
      <div className="space-y-4">
        {questions.map((q, i) => {
          const parts = q.sentence.split("___");
          const answer = answers[q.id];

          return (
              
            <motion.div
              key={q.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-4 bg-card rounded-xl border border-border"
            >
              <span className="text-sm leading-relaxed">
                <span className="font-semibold text-muted-foreground mr-2">{i + 1}.</span>

                {parts[0]}

                {/* Blank */}
                <button
                  onClick={() =>
                    answer ? clearBlank(q.id) : handleBlankClick(q.id)
                  }
                  className={`drop-zone inline-flex items-center gap-1.5 px-2 py-1 rounded-md border text-sm mx-1
                    ${answer?.correct === true ? "drop-zone-correct" : ""}
                    ${answer?.correct === false ? "drop-zone-incorrect" : ""}
                  `}
                >
                  {answer ? (
                    <>
                      {answer.value}
                      {answer.correct === true && (
                        <CheckCircle2 className="w-4 h-4 text-success" />
                      )}
                      {answer.correct === false && (
                        <XCircle className="w-4 h-4 text-destructive" />
                      )}
                    </>
                  ) : (
                    <span className="text-muted-foreground">blank</span>
                  )}
                </button>

                {parts[1]}
              </span>
            </motion.div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="flex items-center gap-3 pt-2">
        {!checked ? (
          <button
            onClick={checkAnswers}
            disabled={Object.keys(answers).length < questions.length}
            className="gradient-primary text-primary-foreground px-6 py-2.5 rounded-lg font-semibold text-sm disabled:opacity-40 transition-opacity"
          >
            Check Answers
          </button>
        ) : (
          <>
            <div className="text-sm font-semibold">
              Score: {score}/{questions.length}
            </div>
            <button
              onClick={reset}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium hover:bg-secondary/80 transition-colors"
            >
              <RotateCcw className="w-4 h-4" /> Try Again
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default FillInTheBlank;
