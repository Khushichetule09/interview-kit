export type QuestionDifficulty = "Easy" | "Medium" | "Hard";

export interface Question {
  id: string;
  question: string;
  answer: string;
  difficulty: QuestionDifficulty;
  roleTags: string[];
  subjectTags: string[];
}
