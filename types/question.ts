export type QuestionDifficulty = "Easy" | "Medium" | "Hard";
export type QuestionStatus = "drafted" | "approved" | "rejected";

export interface Question {
  id: string;
  question: string;
  answer: string;
  difficulty: QuestionDifficulty;
  roleTags: string[];
  subjectTags: string[];
  email?: string;
  status?: QuestionStatus;
  created_at?: string;
  updated_at?: string;
}
