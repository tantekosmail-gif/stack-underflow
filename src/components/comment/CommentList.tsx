import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import type { Comment } from "../../types";
import Button from "../common/Button";
import { CommentItem } from "./CommentItem";

export const CommentList = ({
  comments,
  onChange,
}: {
  comments: Comment[];
  onChange: (c: Comment[]) => void;
}) => {
  const { user } = useAuth();
  const [text, setText] = useState("");

  const addComment = () => {
    if (!user) return;
    onChange([
      ...comments,
      {
        id: crypto.randomUUID(),
        author: user.username,
        content: text,
        createdAt: new Date().toISOString(),
      },
    ]);
    setText("");
  };

  return (
    <div className="space-y-4">
      <h4 className="text-2xl font-medium">Comments</h4>
      <div className="space-y-4">
        {comments.map((c) => (
          <CommentItem
            key={c.id}
            comment={c}
            onUpdate={(updated) =>
              onChange(comments.map((x) => (x.id === updated.id ? updated : x)))
            }
          />
        ))}
      </div>

      <div className="group relative flex items-center gap-2 w-full p-1 bg-white border border-slate-200 rounded-lg shadow-sm focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-50 transition-all duration-200">
        <div className="relative flex-1">
          <input
            className="w-full px-3 py-2 text-slate-700 bg-transparent border-none rounded-md focus:outline-none placeholder:text-slate-400"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Write a comment..."
            aria-label="Add comment"
          />
        </div>

        <Button onClick={addComment} disabled={!text.trim()}>
          Add
        </Button>
      </div>
    </div>
  );
};
