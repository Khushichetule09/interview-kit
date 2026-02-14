import { Question } from "@/types/question";

export const OOP_QUESTIONS: Question[] = [
  {
    id: "oop-1",
    question: "Explain Polymorphism with a real-world example.",
    answer: "Polymorphism allows objects to take multiple forms. Example: A 'Shape' interface with draw() method implemented differently by Circle, Square, Rectangle classes. Same method call produces different behavior based on object type. Enables code reusability and flexibility through method overriding and interfaces.",
    difficulty: "Easy",
    roleTags: ["Software Engineer", "Full Stack Developer"],
    subjectTags: ["OOP", "Object-Oriented Programming"]
  },
  {
    id: "oop-2",
    question: "What are SOLID principles? Explain the Single Responsibility Principle with an example.",
    answer: "SOLID: Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion. SRP states a class should have one reason to change. Example: Separate User class (data) from UserRepository (database) and UserValidator (validation) rather than one class doing all three.",
    difficulty: "Medium",
    roleTags: ["Software Engineer", "Senior Developer"],
    subjectTags: ["OOP", "Software Design", "Design Principles"]
  }
];
