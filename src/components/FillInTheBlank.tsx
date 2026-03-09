import { useState, useCallback } from "react";
import { DndContext, DragEndEvent, DragStartEvent, DragOverlay, useDraggable, useDroppable } from "@dnd-kit/core";
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

const DraggableWord = ({ word, isUsed }: { word: string; isUsed: boolean }) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: word,
    disabled: isUsed,
  });
  const style = transform ? { transform: `translate(${transform.x}px, ${transform.y}px)` } : undefined;

  return (
    <div ref={setNodeRef} {...listeners} {...attributes} style={style}
      className={`drag-item ${isUsed ? "opacity-30 cursor-not-allowed" : ""} ${isDragging ? "opacity-50 scale-105 z-50" : ""}`}>
      {word}
    </div>
  );
};

const DroppableBlank = ({ id, answer }: { id: string; answer?: { value: string; correct: boolean | null } }) => {
  const { setNodeRef, isOver } = useDroppable({ id });
  let className = "drop-zone";
  if (isOver) className += " drop-zone-active";
  if (answer?.correct === true) className = "drop-zone drop-zone-correct";
  if (answer?.correct === false) className = "drop-zone drop-zone-incorrect";

  return (
    <span ref={setNodeRef} className={className}>
      {answer ? (
        <span className="flex items-center gap-1.5 text-sm font-medium">
          {answer.value}
          {answer.correct === true && <CheckCircle2 className="w-4 h-4 text-success" />}
          {answer.correct === false && <XCircle className="w-4 h-4 text-destructive" />}
        </span>
      ) : (
        <span className="text-sm text-muted-foreground">drop here</span>
      )}
    </span>
  );
};

const FillInTheBlank = ({ questions }: { questions: FIBQuestion[] }) => {
  const [answers, setAnswers] = useState<Answer>({});
  const [checked, setChecked] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

  const allOptions = questions.flatMap((q) => q.options);
  const uniqueOptions = [...new Set(allOptions)].sort(() => Math.random() - 0.5);
  const usedWords = Object.values(answers).map((a) => a.value);

  const handleDragStart = (event: DragStartEvent) => setActiveId(event.active.id as string);

  const handleDragEnd = useCallback((event: DragEndEvent) => {
    setActiveId(null);
    const { over, active } = event;
    if (!over) return;
    setAnswers((prev) => ({ ...prev, [over.id as string]: { value: active.id as string, correct: null } }));
  }, []);

  const checkAnswers = () => {
    setChecked(true);
    const updated: Answer = {};
    questions.forEach((q) => {
      const a = answers[q.id];
      if (a) updated[q.id] = { value: a.value, correct: a.value === q.blank };
    });
    setAnswers(updated);
  };

  const reset = () => { setAnswers({}); setChecked(false); };
  const score = checked ? Object.values(answers).filter((a) => a.correct).length : null;

  return (
    <div className="space-y-6">
      <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <div className="flex flex-wrap gap-2 p-4 bg-muted/50 rounded-xl mb-6">
          {uniqueOptions.map((word) => (
            <DraggableWord key={word} word={word} isUsed={usedWords.includes(word)} />
          ))}
        </div>
        <div className="space-y-4">
          {questions.map((q, i) => {
            const parts = q.sentence.split("___");
            return (
              <motion.div key={q.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }} className="p-4 bg-card rounded-xl border border-border">
                <span className="text-sm leading-relaxed">
                  <span className="font-semibold text-muted-foreground mr-2">{i + 1}.</span>
                  {parts[0]}<DroppableBlank id={q.id} answer={answers[q.id]} />{parts[1]}
                </span>
              </motion.div>
            );
          })}
        </div>
        <DragOverlay>{activeId ? <div className="drag-item shadow-lg scale-105">{activeId}</div> : null}</DragOverlay>
      </DndContext>
      <div className="flex items-center gap-3 pt-2">
        {!checked ? (
          <button onClick={checkAnswers} disabled={Object.keys(answers).length < questions.length}
            className="gradient-primary text-primary-foreground px-6 py-2.5 rounded-lg font-semibold text-sm disabled:opacity-40 transition-opacity">
            Check Answers
          </button>
        ) : (
          <>
            <div className="text-sm font-semibold">Score: {score}/{questions.length}</div>
            <button onClick={reset}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium hover:bg-secondary/80 transition-colors">
              <RotateCcw className="w-4 h-4" /> Try Again
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default FillInTheBlank;
