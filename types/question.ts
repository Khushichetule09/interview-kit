export type QuestionDifficulty = "Easy" | "Medium" | "Hard";
export type QuestionType = "Behavioral" | "Technical" | "Coding";

export interface Question {
  id: string;
  question: string;
  answer: string;
  difficulty: QuestionDifficulty;
  type: QuestionType;
  companyTags: string[];
  roleTags: string[];
  topicTags: string[];
  subjectTags: string[];
}
