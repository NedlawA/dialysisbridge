import { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Puzzle, Library, ClipboardCheck, ChevronRight, Album } from "lucide-react";
import Header from "@/components/Header";
import ReadingSection from "@/components/ReadingSection";
import FillInTheBlank from "@/components/FillInTheBlank";
import VocabMatching from "@/components/VocabMatching";
import ComprehensionQuiz from "@/components/ComprehensionQuiz";
import Resources from "@/components/Resources";
import { modules } from "@/data/modules";

import {
  readingContent,
  fillInTheBlanks,
  vocabularyPairs,
  comprehensionQuestions,
  moduleResources
} from "@/data/module1Content";

import {
  module2ReadingContent,
  module2FillInTheBlanks,
  module2VocabularyPairs,
  module2ComprehensionQuestions
} from "@/data/module2Content";

import {
  module3ReadingContent,
  module3FillInTheBlanks,
  module3VocabularyPairs,
  module3ComprehensionQuestions,
  module3Resources,
} from "@/data/module3Content";

import {
  module4readingContent,
  module4FillInTheBlanks,
  module4VocabularyPairs,
  module4ComprehensionQuestions,
  module4Resources,
} from "@/data/module4Content";

import {
  module5ReadingContent,
  module5FillInTheBlanks,
  module5VocabularyPairs,
  module5ComprehensionQuestions,
  module5Resources
} from "@/data/module5Content";

import {
  module6readingContent,
  module6FillInTheBlanks,
  module6VocabularyPairs,
  module6ComprehensionQuestions,
  module6Resources
} from "@/data/module6Content";

import {
  module9readingContent,
  module9fillInTheBlanks,
  module9vocabularyPairs,
  module9comprehensionQuestions,
  module9Resources,
} from "@/data/module9Content";

import {
  module10readingContent,
  module10fillInTheBlanks,
  module10vocabularyPairs,
  module10comprehensionQuestions,
  module10Resources,
} from "@/data/module10Content";

const moduleData: Record<number, {
  reading: { module: string; sections: { heading: string; content: string }[] };
  fillBlanks: any[];
  vocab: any[];
  quiz: any[];
  resources?: any[];
}> = {
  1: {
    reading: readingContent,
    fillBlanks: fillInTheBlanks,
    vocab: vocabularyPairs,
    quiz: comprehensionQuestions,
    resources: moduleResources[1]
  },
  2: {
    reading: module2ReadingContent,
    fillBlanks: module2FillInTheBlanks,
    vocab: module2VocabularyPairs,
    quiz: module2ComprehensionQuestions
  },
  3: {
    reading: module3ReadingContent,
    fillBlanks: module3FillInTheBlanks,
    vocab: module3VocabularyPairs,
    quiz: module3ComprehensionQuestions,
    resources: module3Resources[1]
  },
  4: {
    reading: module4readingContent,
    fillBlanks: module4FillInTheBlanks,
    vocab: module4VocabularyPairs,
    quiz: module4ComprehensionQuestions,
    resources: module4Resources[1]
  },
    5: {
    reading: module5ReadingContent,
    fillBlanks: module5FillInTheBlanks,
    vocab: module5VocabularyPairs,
    quiz: module5ComprehensionQuestions,
    resources: module5Resources[1]
  },
  6: {
    reading: module6readingContent,
    fillBlanks: module6FillInTheBlanks,
    vocab: module6VocabularyPairs,
    quiz: module6ComprehensionQuestions,
    resources: module6Resources[1]
  },
  9: {
    reading: module9readingContent,
    fillBlanks: module9fillInTheBlanks,
    vocab: module9vocabularyPairs,
    quiz: module9comprehensionQuestions,
    resources: module9Resources[1]
  },
  10: {
    reading: module10readingContent,
    fillBlanks: module10fillInTheBlanks,
    vocab: module10vocabularyPairs,
    quiz: module10comprehensionQuestions,
    resources: module10Resources[1]
  }
};

const tabs = [
  { id: "vocab", label: "Vocab Matching", icon: Library },
  { id: "reading", label: "Reading", icon: BookOpen },
  { id: "fill", label: "Fill-in-the-Blank", icon: Puzzle },
  { id: "quiz", label: "Comprehension Quiz", icon: ClipboardCheck },
  { id: "resources", label: "Resources", icon: Album },
];

const ModuleLesson = () => {
  const { id } = useParams();
  const moduleId = Number(id);
  const [activeTab, setActiveTab] = useState("vocab");
  const currentIdx = tabs.findIndex((t) => t.id === activeTab);

  const module = modules.find((m) => m.id === moduleId);
  const data = moduleData[moduleId];

  if (!module || !data || module.status !== "available") {
    return <Navigate to="/modules" replace />;
  }

  const nextTab = () => {
    if (currentIdx < tabs.length - 1) {
      setActiveTab(tabs[currentIdx + 1].id);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container py-8 md:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-2 block">
            Module {moduleId}
          </span>
          <h1 className="font-display text-2xl md:text-3xl font-bold mb-2">
            {module.title}
          </h1>
          <p className="text-muted-foreground text-sm max-w-2xl">
            {module.description}
          </p>
        </motion.div>

        <div className="flex gap-1 p-1 bg-muted rounded-xl mb-8 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="glass-card p-6 md:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${moduleId}-${activeTab}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {activeTab === "vocab" && <VocabMatching pairs={data.vocab} />}
              {activeTab === "reading" && (
                <ReadingSection
                  sections={data.reading.sections}
                  module={data.reading.module}
                />
              )}
              {activeTab === "fill" && (
                <FillInTheBlank questions={data.fillBlanks} />
              )}
              {activeTab === "quiz" && (
                <ComprehensionQuiz questions={data.quiz} />
              )}
              {activeTab === "resources" && (
                <Resources resources={data.resources ?? []} />
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {currentIdx < tabs.length - 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 flex justify-end"
          >
            <button
              onClick={nextTab}
              className="gradient-primary text-primary-foreground px-5 py-2.5 rounded-xl font-semibold text-sm inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
            >
              Continue to {tabs[currentIdx + 1].label}
              <ChevronRight className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ModuleLesson;
