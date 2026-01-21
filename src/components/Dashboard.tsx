import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useQuestion } from "../hooks/useQuestion";
import type { Question } from "../types";
import Button from "./common/Button";
import QuestionForm from "./question/QuestionForm";
import { ListQuestion } from "./question/QuestionList";

const Dashboard = () => {
  const { user } = useAuth();
  const { questions, addNewQuestion } = useQuestion();
  const [showQuestionForm, setShowQuestionForm] = useState(false);

  const handleAddNewQuestion = (newQuestion: Question) => {
    addNewQuestion({
      id: crypto.randomUUID(),
      title: newQuestion.title!,
      description: newQuestion.description!,
      status: "open",
      author: user?.username,
      createdAt: new Date().toISOString(),
      comments: [],
    });
    setShowQuestionForm(false);
  };

  const handleToggleQuestionForm = () => {
    setShowQuestionForm((prev) => !prev);
  };

  const listQuestions = questions
    .sort(
      (a: Question, b: Question) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    )
    .slice(0, 3);

  const renderGreeting = () => (
    <h1 className="text-4xl">{`Hi ${user?.username}! Welcome to the club`}</h1>
  );

  return (
    <section className="max-w-4xl mx-auto p-4 space-y-6">
      {renderGreeting()}
      <Button variant="primary" onClick={handleToggleQuestionForm}>
        {showQuestionForm ? "Close Form" : "Create New Question"}
      </Button>
      {showQuestionForm && <QuestionForm onSubmit={handleAddNewQuestion} />}
      <h2 className="text-2xl">Recent Questions</h2>
      <ListQuestion questions={listQuestions} />
      <Link to="/questions" className="underline">View All Questions</Link>
    </section>
  );
};

export default Dashboard;
