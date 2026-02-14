import { Question } from "@/types/question";
import { REACT_QUESTIONS } from "./react";
import { DSA_QUESTIONS } from "./dsa";
import { OS_QUESTIONS } from "./os";
import { DBMS_QUESTIONS } from "./dbms";
import { OOP_QUESTIONS } from "./oop";
import { BEHAVIORAL_QUESTIONS } from "./behavioral";

// Combined questions array
export const ALL_QUESTIONS: Question[] = [
  ...REACT_QUESTIONS,
  ...DSA_QUESTIONS,
  ...OS_QUESTIONS,
  ...DBMS_QUESTIONS,
  ...OOP_QUESTIONS,
  ...BEHAVIORAL_QUESTIONS,
];

// For backward compatibility - export as QUESTIONS
export const QUESTIONS = ALL_QUESTIONS;

// Export individual question sets for specific use cases
export {
  REACT_QUESTIONS,
  DSA_QUESTIONS,
  OS_QUESTIONS,
  DBMS_QUESTIONS,
  OOP_QUESTIONS,
  BEHAVIORAL_QUESTIONS,
};
