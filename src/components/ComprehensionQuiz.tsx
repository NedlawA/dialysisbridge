import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, ChevronRight, RotateCcw, Trophy } from "lucide-react";

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

const ComprehensionQuiz = ({ questions }: { questions: QuizQuestion[] }) => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const q = questions[current];

  const handleSelect = (i: number) => {
    if (showResult) return;
    setSelected(i);
    setShowResult(true);
    if (i === q.correctIndex) setScore((s) => s + 1);
  };

  const next = () => {
    if (current < questions.length - 1) { setCurrent((c) => c + 1); setSelected(null); setShowResult(false); }
    else setFinished(true);
  };

  const reset = () => { setCurrent(0); setSelected(null); setShowResult(false); setScore(0); setFinished(false); };

  if (finished) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8 space-y-4">
        <Trophy className="w-16 h-16 mx-auto text-warning" />
        <h3 className="font-display text-2xl font-bold">Quiz Complete!</h3>
        <p className="text-lg">You scored <span className="font-bold text-primary">{score}/{questions.length}</span> ({pct}%)</p>
        <p className="text-sm text-muted-foreground">
          {pct >= 80 ? "Excellent work!" : pct >= 60 ? "Good effort! Review the reading." : "Keep studying and try again."}
        </p>
        <button onClick={reset} className="gradient-primary text-primary-foreground px-6 py-2.5 rounded-lg font-semibold text-sm mt-4 inline-flex items-center gap-2">
          <RotateCcw className="w-4 h-4" /> Retake Quiz
        </button>
      </motion.div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Question {current + 1} of {questions.length}</span>
        <div className="flex gap-1">
          {questions.map((_, i) => (
            <div key={i} className={`w-2 h-2 rounded-full transition-colors ${i === current ? "bg-primary" : i < current ? "bg-success" : "bg-border"}`} />
          ))}
        </div>
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={current} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
          <h4 className="font-display font-semibold text-lg">{q.question}</h4>
          <div className="space-y-2">
            {q.options.map((opt, i) => {
              let cls = "w-full text-left p-4 rounded-xl border-2 transition-all text-sm ";
              if (!showResult) cls += selected === i ? "border-primary bg-primary/5" : "border-border hover:border-primary/30 bg-card";
              else if (i === q.correctIndex) cls += "border-success bg-success/5";
              else if (i === selected) cls += "border-destructive bg-destructive/5";
              else cls += "border-border bg-card opacity-50";
              return (
                <button key={i} onClick={() => handleSelect(i)} className={cls}>
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full border-2 border-current flex items-center justify-center text-xs font-bold shrink-0">{String.fromCharCode(65 + i)}</span>
                    <span>{opt}</span>
                    {showResult && i === q.correctIndex && <CheckCircle2 className="w-5 h-5 text-success ml-auto shrink-0" />}
                    {showResult && i === selected && i !== q.correctIndex && <XCircle className="w-5 h-5 text-destructive ml-auto shrink-0" />}
                  </div>
                </button>
              );
            })}
          </div>
          {showResult && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 rounded-xl bg-muted text-sm">
              <span className="font-semibold">Explanation: </span>{q.explanation}
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
      {showResult && (
        <button onClick={next} className="gradient-primary text-primary-foreground px-6 py-2.5 rounded-lg font-semibold text-sm inline-flex items-center gap-2">
          {current < questions.length - 1 ? (<>Next Question <ChevronRight className="w-4 h-4" /></>) : "See Results"}
        </button>
      )}
    </div>
  );
};

export default ComprehensionQuiz;
