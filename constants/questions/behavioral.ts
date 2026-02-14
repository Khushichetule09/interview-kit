import { Question } from "@/types/question";

export const BEHAVIORAL_QUESTIONS: Question[] = [
  {
    id: "behavioral-1",
    question: "Describe a time when you had to handle a conflict within your team. How did you resolve it?",
    answer: "I'd discuss a specific situation using STAR method (Situation, Task, Action, Result): identifying the core issue, listening to all perspectives without bias, facilitating open communication, finding common ground, proposing data-driven solutions, and ensuring team alignment. Focus on collaboration, empathy, and achieving positive outcomes.",
    difficulty: "Medium",
    roleTags: ["Software Engineer", "Team Lead", "Engineering Manager"],
    subjectTags: ["Behavioral", "Leadership"]
  },
  {
    id: "behavioral-2",
    question: "Tell me about a time you had to learn a new technology quickly for a project. How did you approach it?",
    answer: "I'd outline my learning strategy: reading official documentation first, building small proof-of-concepts, studying real-world examples, joining community forums, pair programming with experienced developers, and applying knowledge incrementally to the project. Emphasize time management, resourcefulness, and delivering results despite the learning curve.",
    difficulty: "Easy",
    roleTags: ["Software Engineer", "Full Stack Developer", "React Developer"],
    subjectTags: ["Behavioral"]
  },
  {
    id: "behavioral-3",
    question: "Describe a situation where you disagreed with a technical decision. How did you handle it?",
    answer: "Using STAR format: prepared data/benchmarks supporting my view, scheduled respectful one-on-one discussion, presented technical tradeoffs objectively, listened to counterarguments, sought common ground or compromise, and committed to final decision once made. Shows professionalism, technical depth, and team-first mindset regardless of outcome.",
    difficulty: "Medium",
    roleTags: ["Senior Developer", "Software Engineer", "Tech Lead"],
    subjectTags: ["Behavioral", "Leadership"]
  }
];
