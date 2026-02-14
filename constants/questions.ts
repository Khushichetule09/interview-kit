// This file is kept for backward compatibility
// All questions are now organized in the ./questions/ directory
// Please import from "@/constants/questions/index" or individual files directly

import type { Question } from "@/types/question";
import { REACT_QUESTIONS } from "./questions/react";
import { DSA_QUESTIONS } from "./questions/dsa";
import { OS_QUESTIONS } from "./questions/os";
import { DBMS_QUESTIONS } from "./questions/dbms";
import { OOP_QUESTIONS } from "./questions/oop";
import { BEHAVIORAL_QUESTIONS } from "./questions/behavioral";

// Combined questions array
const ALL_QUESTIONS: Question[] = [
  ...REACT_QUESTIONS,
  ...DSA_QUESTIONS,
  ...OS_QUESTIONS,
  ...DBMS_QUESTIONS,
  ...OOP_QUESTIONS,
  ...BEHAVIORAL_QUESTIONS,
];

// Main export for backward compatibility
export const QUESTIONS = ALL_QUESTIONS;

// Re-export individual categories
export {
  ALL_QUESTIONS,
  REACT_QUESTIONS,
  DSA_QUESTIONS,
  OS_QUESTIONS,
  DBMS_QUESTIONS,
  OOP_QUESTIONS,
  BEHAVIORAL_QUESTIONS,
};
