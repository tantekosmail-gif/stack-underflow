import { useNavigate } from "react-router-dom";
import { formatDate } from "../../helper";
import type { Question } from "../../types";
import Badge from "../common/Badge";

const QuestionItem = ({ question }: { question: Question }) => {
  const { id, title, description, status, createdAt, comments } = question;
  const navigate = useNavigate();
  const handleClickItem = () => {
    navigate(`/questions/${id}`);
  };
  return (
    <div
      onClick={handleClickItem}
      className="group relative bg-white border border-slate-200 p-5 mb-4 cursor-pointer rounded-xl shadow-sm hover:shadow-md hover:border-indigo-200 hover:-translate-y-0.5 transition-all duration-200  w-full"
    >
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-1">
          {title}
        </h3>
        <Badge title={status} variant={status} />
      </div>

      <p className="text-sm text-slate-500 font-normal leading-relaxed mb-4 line-clamp-2">
        {description}
      </p>

      <div className="flex items-center justify-between pt-4 border-t border-slate-50">
        <div className="flex items-center gap-4 text-slate-400">
          <div className="flex items-center gap-1.5 text-xs">
            <span>{`Created: ${formatDate(createdAt)}`}</span> |{" "}
            <span>
              {comments && comments.length > 0
                ? `${comments.length} comment`
                : "No comments"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionItem;
