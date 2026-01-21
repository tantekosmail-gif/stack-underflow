import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import type { Comment } from "../../types";

export const CommentItem = ({
  comment,
  onUpdate,
}: {
  comment: Comment;
  onUpdate: (c: Comment) => void;
}) => {
  const { user } = useAuth();
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(comment.content);
  const isOwner = user?.username === comment.author;
  const handleSave = () => {
    onUpdate({ ...comment, content: text });
    setEditing(false);
  };
  return (
    <div className="space-y-2 border border-slate-100 rounded-lg p-4 bg-white">
      <p className="text-2xl">{comment.author}</p>
      {editing ? (
        <div className="flex flex-col gap-2 w-full animate-in fade-in duration-200">
          <input
            className="w-full px-3 py-2 border border-blue-500 rounded-md shadow-sm focus:ring-2 focus:ring-blue-200 focus:outline-none text-slate-700 bg-white"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Update your comment..."
          />
          <div className="flex items-center gap-2">
            <div onClick={handleSave} className="font-bold uppercase text-xs">
              Save
            </div>
            <div
              onClick={() => setEditing(false)}
              className="font-bold uppercase text-xs"
            >
              Cancel
            </div>
          </div>
        </div>
      ) : (
        <p>{comment.content}</p>
      )}
      {isOwner && !editing && (
        <div
          onClick={() => setEditing(true)}
          className="font-bold uppercase text-xs"
        >
          Edit
        </div>
      )}
    </div>
  );
};
