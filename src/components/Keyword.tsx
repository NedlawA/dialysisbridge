import React from "react";
import { useTTS } from "../hooks/useTTS";

interface KeywordProps {
  word: string;
}

export const Keyword: React.FC<KeywordProps> = ({ word }) => {
  const { speak } = useTTS();

  return (
    <span
      onClick={() => speak(word)}
      style={{
        cursor: "pointer",
        color: "#0070f3",
        textDecoration: "underline",
      }}
    >
      {word}
    </span>
  );
};
