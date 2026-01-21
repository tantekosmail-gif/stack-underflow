import { Link } from "react-router-dom";
import { useQuestion } from "../../hooks/useQuestion";
import type { Question } from "../../types";
import QuestionItem from "./QuestionItem";

export const ListQuestion = ({ questions }: { questions: Question[] }) =>
  questions.map((question: Question) => (
    <QuestionItem key={question.id} question={question} />
  ));

const QuestionList = () => {
  const { questions } = useQuestion();

  return (
    <section className="space-y-6 p-6">
      <h1 className="text-4xl font-medium">Question List</h1>
      <ListQuestion questions={questions} />
      <Link to="/" className="underline">Back to Home</Link>
    </section>
  );
};

export default QuestionList;
