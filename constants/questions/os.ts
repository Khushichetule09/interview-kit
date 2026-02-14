import { Question } from "@/types/question";

export const OS_QUESTIONS: Question[] = [
  {
    id: "os-1",
    question: "What is the difference between a Process and a Thread?",
    answer: "A process is an independent program with its own memory space, while threads are lightweight units within a process that share the same memory space. Processes have higher overhead for creation and context switching. Threads enable concurrent execution within a process with lower overhead.",
    difficulty: "Easy",
    roleTags: ["Software Engineer", "Backend Developer", "System Engineer"],
    subjectTags: ["OS", "Processes", "Threads"]
  },
  {
    id: "os-2",
    question: "Explain Deadlock and the four necessary conditions for it to occur.",
    answer: "Deadlock occurs when processes wait indefinitely for resources. Four conditions: (1) Mutual Exclusion - resources can't be shared, (2) Hold and Wait - holding resources while waiting for more, (3) No Preemption - resources can't be forcibly taken, (4) Circular Wait - circular chain of processes waiting for resources.",
    difficulty: "Medium",
    roleTags: ["Software Engineer", "System Engineer"],
    subjectTags: ["OS", "Concurrency", "Deadlock"]
  },
  {
    id: "os-3",
    question: "What is the difference between Paging and Segmentation in memory management?",
    answer: "Paging divides memory into fixed-size blocks (pages), eliminating external fragmentation but may cause internal fragmentation. Segmentation divides memory into variable-size logical units (segments) matching program structure, avoiding internal fragmentation but may cause external fragmentation. Modern systems often use both.",
    difficulty: "Medium",
    roleTags: ["System Engineer", "Software Engineer"],
    subjectTags: ["OS", "Memory Management"]
  }
];
