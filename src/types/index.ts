export type User = {
  id: string;
  username: string;
  password: string;
};

export type Comment = {
  id: string;
  author: string;
  content: string;
  createdAt: string;
};

export type QuestionStatus = "open" | "answered" | "closed";

export type Question = {
  id: string;
  title: string;
  description: string;
  status: QuestionStatus;
  author?: string;
  comments?: Comment[];
  createdAt: string;
};
