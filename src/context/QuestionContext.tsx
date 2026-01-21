import { createContext, useState } from "react";
import type { Question } from "../types";
import { questions as InitialQuestion } from "../data/questions";

export const QuestionContext = createContext<any>(null);

export const QuestionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [questions, setQuestions] = useState<Question[]>(InitialQuestion);

  const addNewQuestion = (q: Question) => setQuestions([...questions, q]);

  const updateQuestion = (updated: Question) =>
    setQuestions(questions.map((q) => (q.id === updated.id ? updated : q)));

  return (
    <QuestionContext.Provider
      value={{ questions, addNewQuestion, updateQuestion }}
    >
      {children}
    </QuestionContext.Provider>
  );
};
