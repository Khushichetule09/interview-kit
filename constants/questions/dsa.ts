import { Question } from "@/types/question";

export const DSA_QUESTIONS: Question[] = [
  {
    id: "dsa-1",
    question: "What is the time complexity of searching for an element in a balanced Binary Search Tree, and why?",
    answer: "O(log n) because at each step we eliminate half of the remaining nodes by comparing with the current node and moving left or right. This binary elimination results in logarithmic time complexity, similar to binary search in a sorted array.",
    difficulty: "Easy",
    roleTags: ["Software Engineer", "Backend Developer"],
    subjectTags: ["DSA", "Trees"]
  },
  {
    id: "dsa-2",
    question: "Explain the difference between a Stack and a Queue. When would you use each?",
    answer: "Stack follows LIFO (Last In First Out) - useful for undo operations, function call stacks, and expression evaluation. Queue follows FIFO (First In First Out) - ideal for task scheduling, breadth-first search, and handling requests in order of arrival.",
    difficulty: "Easy",
    roleTags: ["Software Engineer", "Full Stack Developer"],
    subjectTags: ["DSA", "Data Structures"]
  },
  {
    id: "dsa-3",
    question: "How would you detect a cycle in a linked list? Explain the algorithm and its complexity.",
    answer: "Use Floyd's Cycle Detection (slow and fast pointers). Move slow pointer one step and fast pointer two steps. If they meet, a cycle exists. Time: O(n), Space: O(1). This works because the fast pointer will eventually lap the slow pointer if there's a cycle.",
    difficulty: "Medium",
    roleTags: ["Software Engineer", "Backend Developer"],
    subjectTags: ["DSA", "Algorithms", "Linked Lists"]
  },
  {
    id: "dsa-4",
    question: "What is the difference between Merge Sort and Quick Sort? Which is more efficient in which scenarios?",
    answer: "Merge Sort: O(n log n) guaranteed, stable, requires O(n) extra space. Quick Sort: O(n log n) average, O(n²) worst case, in-place. Use Merge Sort for linked lists or when stability matters. Use Quick Sort for arrays when average case performance and space efficiency are priorities.",
    difficulty: "Medium",
    roleTags: ["Software Engineer", "Algorithm Engineer"],
    subjectTags: ["DSA", "Sorting Algorithms"]
  },
  {
    id: "dsa-5",
    question: "What is memoization and how does it improve performance? Give an example use case.",
    answer: "Memoization caches function results based on inputs to avoid redundant calculations. Example: Fibonacci with memoization reduces O(2^n) to O(n) by storing computed values. In React, useMemo and React.memo prevent unnecessary re-renders and recalculations when dependencies haven't changed.",
    difficulty: "Medium",
    roleTags: ["Software Engineer", "Frontend Developer"],
    subjectTags: ["DSA", "Algorithms", "Optimization"]
  }
];
