import { useState } from "react";
import type { Question } from "../../types";
import Button from "../common/Button";

const QuestionForm = ({
  onSubmit,
  initial,
  editMode = false,
}: {
  onSubmit: (data: Question) => void;
  initial?: Question;
  editMode?: boolean;
}) => {
  const [title, setTitle] = useState(initial?.title || "");
  const [description, setDescription] = useState(initial?.description || "");
  const [status, setStatus] = useState(initial?.status || "");
  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const handleChangeDescription = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setDescription(e.target.value);
  };
  const handleChangeStatus = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(e.target.value);
  };
  const handleSubmit = () => {
    const validationPassed = title.trim() !== "" && description.trim() !== "";
    if (!validationPassed) return;
    onSubmit({
      ...(initial || ({} as Question)),
      title,
      description,
      status: status as Question["status"],
    });
  };
  return (
    <section className="w-full bg-white rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-100 overflow-hidden">
      <div className="px-8 pt-8 pb-6">
        <h2 className="text-xl font-bold text-slate-800">
          {editMode ? "Edit Question" : "Create New Entry"}
        </h2>
        <p className="text-slate-500 text-sm mt-1">
          {editMode
            ? "Update your question details."
            : "Fill in the details below to create your question."}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="px-8 pb-8 space-y-5">
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">
            Title
          </label>
          <div>
            <input
              type="text"
              value={title}
              onChange={handleChangeTitle}
              placeholder="Enter a title..."
              className="w-full pl-4 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none transition-all focus:bg-white focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 text-slate-700 placeholder:text-slate-400"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">
            Description
          </label>
          <div>
            <textarea
              value={description}
              onChange={handleChangeDescription}
              placeholder="What's is your question?"
              rows={4}
              className="w-full pl-4 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none transition-all focus:bg-white focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 text-slate-700 placeholder:text-slate-400 resize-none"
            />
          </div>
        </div>

        <div className="space-y-1.5 flex flex-col">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">
            Status
          </label>
          <select
            className="border border-slate-200 p-2 rounded-xl outline-none"
            onChange={handleChangeStatus}
          >
            <option value="open">Open</option>
            <option value="answered">Answered</option>
            <option value="closed">Closed</option>
          </select>
        </div>

        <div className="pt-2">
          <Button variant="primary" onClick={handleSubmit}>
            <span>{editMode ? "Update Question" : "Send Question"}</span>
          </Button>
        </div>
      </form>
    </section>
  );
};

export default QuestionForm;
