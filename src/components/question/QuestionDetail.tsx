import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useQuestion } from "../../hooks/useQuestion";
import type { Question } from "../../types";
import { CommentList } from "../comment/CommentList";
import Button from "../common/Button";
import QuestionForm from "./QuestionForm";
import QuestionItem from "./QuestionItem";

const QuestionDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { questions, updateQuestion } = useQuestion();
  const { user } = useAuth();

  const [showQuestionForm, setShowQuestionForm] = useState(false);

  const question: Question = questions.find((q: any) => q.id === id);
  if (!question) return <p>Not found</p>;

  const { author } = question;

  const isOwner = author === user?.username;

  const handleToggleQuestionForm = () => {
    setShowQuestionForm((prev) => !prev);
  };

  const handleUpdateQuestion = (updatedQuestion: Question) => {
    updateQuestion({ ...question, ...updatedQuestion });
    setShowQuestionForm(false);
  };

  return (
    <main className="p-6 space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
          {isOwner ? "Manage Your Question" : "Question Details"}
        </h1>
      </header>
      {isOwner && (
        <Button onClick={handleToggleQuestionForm}>
          {showQuestionForm ? "Cancel Edit" : "Edit Question"}
        </Button>
      )}
      <section>
        {showQuestionForm ? (
          <QuestionForm
            editMode
            initial={question}
            onSubmit={handleUpdateQuestion}
          />
        ) : (
          <QuestionItem question={question} />
        )}
      </section>
      <CommentList
        comments={question.comments ?? []}
        onChange={(comments) => updateQuestion({ ...question, comments })}
      />
      <div>
        <Link to="/" className="underline">
          Back to Home
        </Link>
      </div>
    </main>
  );
};

export default QuestionDetail;
