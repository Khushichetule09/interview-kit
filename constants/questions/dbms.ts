import { Question } from "@/types/question";

export const DBMS_QUESTIONS: Question[] = [
  {
    id: "dbms-1",
    question: "What is Database Normalization and why is it important? Explain 1NF, 2NF, and 3NF.",
    answer: "Normalization reduces data redundancy and improves integrity. 1NF: Atomic values, no repeating groups. 2NF: 1NF + no partial dependencies (all non-key attributes depend on entire primary key). 3NF: 2NF + no transitive dependencies (non-key attributes don't depend on other non-key attributes).",
    difficulty: "Medium",
    roleTags: ["Backend Developer", "Database Engineer", "Software Engineer", "MERN Developer"],
    subjectTags: ["DBMS", "Database Design"]
  },
  {
    id: "dbms-2",
    question: "Explain the ACID properties of database transactions.",
    answer: "Atomicity: Transaction is all-or-nothing. Consistency: Database moves from one valid state to another. Isolation: Concurrent transactions don't interfere. Durability: Committed changes persist even after system failure. These properties ensure reliable transaction processing in databases.",
    difficulty: "Easy",
    roleTags: ["Backend Developer", "Database Engineer", "MERN Developer"],
    subjectTags: ["DBMS", "Transactions"]
  },
  {
    id: "dbms-3",
    question: "What is the difference between Clustered and Non-clustered indexes? When would you use each?",
    answer: "Clustered index determines physical order of data (one per table), faster for range queries. Non-clustered index has separate structure with pointers to data (multiple allowed), faster for specific lookups. Use clustered for frequently queried ranges on primary key, non-clustered for additional search columns.",
    difficulty: "Medium",
    roleTags: ["Database Engineer", "Backend Developer", "MERN Developer"],
    subjectTags: ["DBMS", "Indexing"]
  },
  {
    id: "dbms-4",
    question: "Explain the difference between SQL and NoSQL databases. When would you choose one over the other?",
    answer: "SQL: Structured schema, ACID transactions, complex joins, vertical scaling (PostgreSQL, MySQL). NoSQL: Flexible schema, horizontal scaling, denormalized data (MongoDB, Cassandra). Choose SQL for complex relationships and strong consistency. Choose NoSQL for high scalability, rapid development, and flexible data models.",
    difficulty: "Medium",
    roleTags: ["Backend Developer", "Full Stack Developer", "MERN Developer"],
    subjectTags: ["DBMS", "Backend", "Database Design"]
  }
];
