import { Question } from "@/types/question";

export const QUESTIONS: Question[] = [
  // DSA Questions
  {
    id: "q1",
    question: "What is the time complexity of searching for an element in a balanced Binary Search Tree, and why?",
    answer: "O(log n) because at each step we eliminate half of the remaining nodes by comparing with the current node and moving left or right. This binary elimination results in logarithmic time complexity, similar to binary search in a sorted array.",
    difficulty: "Easy",
    roleTags: ["Software Engineer", "Backend Developer"],
    subjectTags: ["DSA", "Trees"]
  },
  {
    id: "q2",
    question: "Explain the difference between a Stack and a Queue. When would you use each?",
    answer: "Stack follows LIFO (Last In First Out) - useful for undo operations, function call stacks, and expression evaluation. Queue follows FIFO (First In First Out) - ideal for task scheduling, breadth-first search, and handling requests in order of arrival.",
    difficulty: "Easy",
    roleTags: ["Software Engineer", "Full Stack Developer"],
    subjectTags: ["DSA"]
  },
  {
    id: "q3",
    question: "How would you detect a cycle in a linked list? Explain the algorithm and its complexity.",
    answer: "Use Floyd's Cycle Detection (slow and fast pointers). Move slow pointer one step and fast pointer two steps. If they meet, a cycle exists. Time: O(n), Space: O(1). This works because the fast pointer will eventually lap the slow pointer if there's a cycle.",
    difficulty: "Medium",
    roleTags: ["Software Engineer", "Backend Developer"],
    subjectTags: ["DSA", "Algorithms"]
  },
  {
    id: "q4",
    question: "What is the difference between Merge Sort and Quick Sort? Which is more efficient in which scenarios?",
    answer: "Merge Sort: O(n log n) guaranteed, stable, requires O(n) extra space. Quick Sort: O(n log n) average, O(n²) worst case, in-place. Use Merge Sort for linked lists or when stability matters. Use Quick Sort for arrays when average case performance and space efficiency are priorities.",
    difficulty: "Medium",
    roleTags: ["Software Engineer", "Algorithm Engineer"],
    subjectTags: ["DSA"]
  },
  
  // Operating Systems
  {
    id: "q5",
    question: "What is the difference between a Process and a Thread?",
    answer: "A process is an independent program with its own memory space, while threads are lightweight units within a process that share the same memory space. Processes have higher overhead for creation and context switching. Threads enable concurrent execution within a process with lower overhead.",
    difficulty: "Easy",
    roleTags: ["Software Engineer", "Backend Developer", "System Engineer"],
    subjectTags: ["OS"]
  },
  {
    id: "q6",
    question: "Explain Deadlock and the four necessary conditions for it to occur.",
    answer: "Deadlock occurs when processes wait indefinitely for resources. Four conditions: (1) Mutual Exclusion - resources can't be shared, (2) Hold and Wait - holding resources while waiting for more, (3) No Preemption - resources can't be forcibly taken, (4) Circular Wait - circular chain of processes waiting for resources.",
    difficulty: "Medium",
    roleTags: ["Software Engineer", "System Engineer"],
    subjectTags: ["OS", "Concurrency"]
  },
  {
    id: "q7",
    question: "What is the difference between Paging and Segmentation in memory management?",
    answer: "Paging divides memory into fixed-size blocks (pages), eliminating external fragmentation but may cause internal fragmentation. Segmentation divides memory into variable-size logical units (segments) matching program structure, avoiding internal fragmentation but may cause external fragmentation. Modern systems often use both.",
    difficulty: "Medium",
    roleTags: ["System Engineer", "Software Engineer"],
    subjectTags: ["OS"]
  },

  // Database Management
  {
    id: "q8",
    question: "What is Database Normalization and why is it important? Explain 1NF, 2NF, and 3NF.",
    answer: "Normalization reduces data redundancy and improves integrity. 1NF: Atomic values, no repeating groups. 2NF: 1NF + no partial dependencies (all non-key attributes depend on entire primary key). 3NF: 2NF + no transitive dependencies (non-key attributes don't depend on other non-key attributes).",
    difficulty: "Medium",
    roleTags: ["Backend Developer", "Database Engineer", "Software Engineer"],
    subjectTags: ["DBMS"]
  },
  {
    id: "q9",
    question: "Explain the ACID properties of database transactions.",
    answer: "Atomicity: Transaction is all-or-nothing. Consistency: Database moves from one valid state to another. Isolation: Concurrent transactions don't interfere. Durability: Committed changes persist even after system failure. These properties ensure reliable transaction processing in databases.",
    difficulty: "Easy",
    roleTags: ["Backend Developer", "Database Engineer"],
    subjectTags: ["DBMS"]
  },
  {
    id: "q10",
    question: "What is the difference between Clustered and Non-clustered indexes? When would you use each?",
    answer: "Clustered index determines physical order of data (one per table), faster for range queries. Non-clustered index has separate structure with pointers to data (multiple allowed), faster for specific lookups. Use clustered for frequently queried ranges on primary key, non-clustered for additional search columns.",
    difficulty: "Medium",
    roleTags: ["Database Engineer", "Backend Developer"],
    subjectTags: ["DBMS"]
  },

  // OOP
  {
    id: "q11",
    question: "Explain Polymorphism with a real-world example.",
    answer: "Polymorphism allows objects to take multiple forms. Example: A 'Shape' interface with draw() method implemented differently by Circle, Square, Rectangle classes. Same method call produces different behavior based on object type. Enables code reusability and flexibility through method overriding and interfaces.",
    difficulty: "Easy",
    roleTags: ["Software Engineer", "Full Stack Developer"],
    subjectTags: ["OOP"]
  },
  {
    id: "q12",
    question: "What are SOLID principles? Explain the Single Responsibility Principle with an example.",
    answer: "SOLID: Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion. SRP states a class should have one reason to change. Example: Separate User class (data) from UserRepository (database) and UserValidator (validation) rather than one class doing all three.",
    difficulty: "Medium",
    roleTags: ["Software Engineer", "Senior Developer"],
    subjectTags: ["OOP", "Software Design"]
  },

  // React / Frontend
  {
    id: "q13",
    question: "Explain the difference between useState and useEffect in React. When would you use each?",
    answer: "useState manages component state that triggers re-renders when updated. useEffect handles side effects (API calls, subscriptions, DOM manipulation) after render. Use useState for interactive data (form inputs, toggles). Use useEffect for syncing with external systems or responding to state changes.",
    difficulty: "Easy",
    roleTags: ["Frontend Developer", "Full Stack Developer"],
    subjectTags: ["React", "Frontend"]
  },
  {
    id: "q14",
    question: "What is the Virtual DOM and how does React use it to optimize performance?",
    answer: "Virtual DOM is a lightweight JavaScript representation of actual DOM. React updates Virtual DOM first, compares with previous version (diffing), calculates minimal changes needed, then updates real DOM in batch. This avoids expensive direct DOM manipulation and reduces reflows/repaints.",
    difficulty: "Medium",
    roleTags: ["Frontend Developer", "React Developer"],
    subjectTags: ["React", "Frontend"]
  },
  {
    id: "q15",
    question: "Explain the concept of prop drilling in React and how you would solve it.",
    answer: "Prop drilling is passing props through multiple intermediate components that don't need them to reach deeply nested components. Solutions: Context API for global state, component composition (children props), state management libraries (Redux, Zustand), or custom hooks for shared logic.",
    difficulty: "Medium",
    roleTags: ["Frontend Developer", "React Developer"],
    subjectTags: ["React", "Frontend"]
  },

  // Behavioral
  {
    id: "q16",
    question: "Describe a time when you had to handle a conflict within your team. How did you resolve it?",
    answer: "I'd discuss a specific situation using STAR method (Situation, Task, Action, Result): identifying the core issue, listening to all perspectives without bias, facilitating open communication, finding common ground, proposing data-driven solutions, and ensuring team alignment. Focus on collaboration, empathy, and achieving positive outcomes.",
    difficulty: "Medium",
    roleTags: ["Software Engineer", "Team Lead", "Engineering Manager"],
    subjectTags: ["Behavioral", "Leadership"]
  },
  {
    id: "q17",
    question: "Tell me about a time you had to learn a new technology quickly for a project. How did you approach it?",
    answer: "I'd outline my learning strategy: reading official documentation first, building small proof-of-concepts, studying real-world examples, joining community forums, pair programming with experienced developers, and applying knowledge incrementally to the project. Emphasize time management, resourcefulness, and delivering results despite the learning curve.",
    difficulty: "Easy",
    roleTags: ["Software Engineer", "Full Stack Developer"],
    subjectTags: ["Behavioral"]
  },
  {
    id: "q18",
    question: "Describe a situation where you disagreed with a technical decision. How did you handle it?",
    answer: "Using STAR format: prepared data/benchmarks supporting my view, scheduled respectful one-on-one discussion, presented technical tradeoffs objectively, listened to counterarguments, sought common ground or compromise, and committed to final decision once made. Shows professionalism, technical depth, and team-first mindset regardless of outcome.",
    difficulty: "Medium",
    roleTags: ["Senior Developer", "Software Engineer", "Tech Lead"],
    subjectTags: ["Behavioral", "Leadership"]
  },

  // Additional Technical Questions
  {
    id: "q19",
    question: "What is memoization and how does it improve performance? Give an example use case.",
    answer: "Memoization caches function results based on inputs to avoid redundant calculations. Example: Fibonacci with memoization reduces O(2^n) to O(n) by storing computed values. In React, useMemo and React.memo prevent unnecessary re-renders and recalculations when dependencies haven't changed.",
    difficulty: "Medium",
    roleTags: ["Software Engineer", "Frontend Developer"],
    subjectTags: ["DSA", "React"]
  },
  {
    id: "q20",
    question: "Explain the difference between SQL and NoSQL databases. When would you choose one over the other?",
    answer: "SQL: Structured schema, ACID transactions, complex joins, vertical scaling (PostgreSQL, MySQL). NoSQL: Flexible schema, horizontal scaling, denormalized data (MongoDB, Cassandra). Choose SQL for complex relationships and strong consistency. Choose NoSQL for high scalability, rapid development, and flexible data models.",
    difficulty: "Medium",
    roleTags: ["Backend Developer", "Full Stack Developer"],
    subjectTags: ["DBMS", "Backend"]
  }
];
