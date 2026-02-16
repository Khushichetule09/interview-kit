import { Question } from "@/types/question";

export const JAVASCRIPT_QUESTIONS: Question[] = [
  {
    id: "js-1",
    question: "What is JavaScript?",
    answer: "JavaScript is a high-level, dynamic programming language used to create interactive and dynamic content on the web. It is a core technology of the web, along with HTML and CSS.",
    difficulty: "Easy",
    roleTags: ["Frontend Developer", "Full Stack Developer", "JavaScript Developer"],
    subjectTags: ["JavaScript", "Fundamentals"]
  },
  {
    id: "js-2",
    question: "Explain the difference between let, var, and const.",
    answer: "var is function-scoped, let and const are block-scoped. let allows variable reassignment, while const does not allow reassignment once the value is set.",
    difficulty: "Easy",
    roleTags: ["Frontend Developer", "JavaScript Developer", "MERN Developer"],
    subjectTags: ["JavaScript", "Variables", "Scope"]
  },
  {
    id: "js-3",
    question: "What are the data types in JavaScript?",
    answer: "The main data types are: String, Number, Boolean, Null, Undefined, Symbol, BigInt, and Object (which includes arrays, functions, etc.).",
    difficulty: "Easy",
    roleTags: ["Frontend Developer", "JavaScript Developer"],
    subjectTags: ["JavaScript", "Data Types", "Fundamentals"]
  },
  {
    id: "js-4",
    question: "How do you create a function in JavaScript?",
    answer: "A function can be created using the function keyword: function myFunction() { // code to be executed }. Functions can also be created using arrow function syntax: const myFunction = () => { // code }.",
    difficulty: "Easy",
    roleTags: ["Frontend Developer", "JavaScript Developer", "MERN Developer"],
    subjectTags: ["JavaScript", "Functions"]
  },
  {
    id: "js-5",
    question: "What is the difference between == and === in JavaScript?",
    answer: "== checks for value equality with type coercion, while === checks for both value and type equality without type coercion. Always use === for reliable comparisons.",
    difficulty: "Easy",
    roleTags: ["Frontend Developer", "JavaScript Developer"],
    subjectTags: ["JavaScript", "Operators", "Comparison"]
  },
  {
    id: "js-6",
    question: "What are template literals in JavaScript?",
    answer: "Template literals are a way to include variables and expressions within strings, using backticks (`) and ${} syntax: const name = 'John'; console.log(`Hello, ${name}!`); They allow multiline strings and expression interpolation.",
    difficulty: "Easy",
    roleTags: ["Frontend Developer", "JavaScript Developer"],
    subjectTags: ["JavaScript", "Strings"]
  },
  {
    id: "js-7",
    question: "Explain how to use Array.map() method.",
    answer: "Array.map() creates a new array by applying a function to each element of the original array: const numbers = [1, 2, 3]; const doubled = numbers.map(n => n * 2); Returns [2, 4, 6]. It doesn't modify the original array.",
    difficulty: "Easy",
    roleTags: ["Frontend Developer", "JavaScript Developer"],
    subjectTags: ["JavaScript", "Arrays", "Methods"]
  },
  {
    id: "js-8",
    question: "What is an anonymous function in JavaScript?",
    answer: "An anonymous function is a function without a name. It is often used as a callback function: setTimeout(function() { console.log('This is an anonymous function'); }, 1000); Common in event handlers and callbacks.",
    difficulty: "Easy",
    roleTags: ["Frontend Developer", "JavaScript Developer"],
    subjectTags: ["JavaScript", "Functions", "Callbacks"]
  },
  {
    id: "js-9",
    question: "What is the difference between null and undefined?",
    answer: "undefined means a variable has been declared but not assigned a value. null is an assignment value representing no value, explicitly set by the programmer. Both are falsy values.",
    difficulty: "Easy",
    roleTags: ["Frontend Developer", "JavaScript Developer"],
    subjectTags: ["JavaScript", "Variables", "Data Types"]
  },
  {
    id: "js-10",
    question: "What is the purpose of the this keyword?",
    answer: "this refers to the object it belongs to. In a method, this refers to the owner object. In the global context, this refers to the global object (window in browsers). Context depends on how the function is called.",
    difficulty: "Easy",
    roleTags: ["Frontend Developer", "JavaScript Developer"],
    subjectTags: ["JavaScript", "Keywords", "Context"]
  },
  {
    id: "js-11",
    question: "Explain closures in JavaScript.",
    answer: "A closure is a function that retains access to its outer scope even after the outer function has returned. This allows functions to maintain access to variables defined in their lexical scope. Used for data privacy, factory functions, and callbacks.",
    difficulty: "Medium",
    roleTags: ["Frontend Developer", "JavaScript Developer", "Senior Developer"],
    subjectTags: ["JavaScript", "Closures", "Scope"]
  },
  {
    id: "js-12",
    question: "What is event delegation in JavaScript?",
    answer: "Event delegation is a technique of handling events by using a single event listener to manage all events of a particular type within a parent element, instead of adding multiple event listeners to individual child elements. Improves performance.",
    difficulty: "Medium",
    roleTags: ["Frontend Developer", "JavaScript Developer"],
    subjectTags: ["JavaScript", "Events", "DOM"]
  },
  {
    id: "js-13",
    question: "How does the prototype chain work in JavaScript?",
    answer: "Every JavaScript object has a prototype. When trying to access a property or method on an object, JavaScript will first look on the object itself, then up the prototype chain until it finds the property or reaches the top of the chain (Object.prototype). This enables inheritance.",
    difficulty: "Medium",
    roleTags: ["Frontend Developer", "JavaScript Developer", "Senior Developer"],
    subjectTags: ["JavaScript", "Prototypes", "Inheritance"]
  },
  {
    id: "js-14",
    question: "What is the difference between call(), apply(), and bind()?",
    answer: "call() and apply() invoke a function with a specified this context, where call() accepts arguments individually, and apply() accepts them as an array. bind() returns a new function, where this is bound to the specified context, allowing delayed execution.",
    difficulty: "Medium",
    roleTags: ["Frontend Developer", "JavaScript Developer"],
    subjectTags: ["JavaScript", "Functions", "Context"]
  },
  {
    id: "js-15",
    question: "How does asynchronous JavaScript work? Explain promises.",
    answer: "Asynchronous JavaScript allows code to run without blocking the main thread. Promises are a way to handle asynchronous operations, representing a value that may be available now, in the future, or never. They have three states: pending, fulfilled, and rejected.",
    difficulty: "Medium",
    roleTags: ["Frontend Developer", "JavaScript Developer", "MERN Developer"],
    subjectTags: ["JavaScript", "Async", "Promises"]
  },
  {
    id: "js-16",
    question: "What is the event loop in JavaScript?",
    answer: "The event loop is a mechanism that handles the execution of code, collects and processes events, and executes queued sub-tasks (like callbacks). It continuously checks the call stack and the task queue to manage asynchronous operations. Essential for understanding async behavior.",
    difficulty: "Medium",
    roleTags: ["Frontend Developer", "JavaScript Developer", "Senior Developer"],
    subjectTags: ["JavaScript", "Async", "Event Loop"]
  },
  {
    id: "js-17",
    question: "Explain how async and await work in JavaScript.",
    answer: "async functions return a promise. await pauses the execution of an async function until the promise resolves. Example: async function fetchData() { const response = await fetch('url'); const data = await response.json(); return data; } Simplifies promise handling.",
    difficulty: "Medium",
    roleTags: ["Frontend Developer", "JavaScript Developer", "MERN Developer"],
    subjectTags: ["JavaScript", "Async", "Await"]
  },
  {
    id: "js-18",
    question: "What is the difference between forEach and map methods?",
    answer: "forEach() executes a function on each element of an array but does not return a new array. map() also executes a function on each element but returns a new array with the transformed elements. Use map when you need results, forEach for side effects.",
    difficulty: "Easy",
    roleTags: ["Frontend Developer", "JavaScript Developer"],
    subjectTags: ["JavaScript", "Arrays", "Methods"]
  },
  {
    id: "js-19",
    question: "How do you handle errors in JavaScript?",
    answer: "Errors in JavaScript can be handled using try, catch, and finally blocks. Example: try { // code that may throw an error } catch (error) { // code to handle the error } finally { // code to run regardless of outcome }",
    difficulty: "Easy",
    roleTags: ["Frontend Developer", "JavaScript Developer"],
    subjectTags: ["JavaScript", "Error Handling"]
  },
  {
    id: "js-20",
    question: "What is a higher-order function in JavaScript?",
    answer: "A higher-order function is a function that takes one or more functions as arguments or returns a function as its result. Example: function higherOrder(fn) { return function() { return fn() + 1; }; } Enables functional programming patterns.",
    difficulty: "Medium",
    roleTags: ["Frontend Developer", "JavaScript Developer"],
    subjectTags: ["JavaScript", "Functions", "Functional Programming"]
  },
  {
    id: "js-21",
    question: "What is the purpose of Object.create() method?",
    answer: "Object.create() creates a new object with the specified prototype object and properties. It allows for more precise control over the inheritance model. Example: const proto = { greet: function() { console.log('Hello'); } }; const obj = Object.create(proto);",
    difficulty: "Medium",
    roleTags: ["Frontend Developer", "JavaScript Developer", "Senior Developer"],
    subjectTags: ["JavaScript", "Objects", "Inheritance"]
  },
  {
    id: "js-22",
    question: "How does JavaScript's garbage collection work?",
    answer: "JavaScript uses automatic garbage collection to manage memory. It identifies and removes objects that are no longer reachable from the root (global object), typically using algorithms like mark-and-sweep. Developers generally don't need to manage memory manually.",
    difficulty: "Medium",
    roleTags: ["JavaScript Developer", "Senior Developer"],
    subjectTags: ["JavaScript", "Memory", "Optimization"]
  },
  {
    id: "js-23",
    question: "What are generators in JavaScript, and how do they work?",
    answer: "Generators are functions that can be paused and resumed. They are declared with an asterisk (*) and use the yield keyword to pause: function* generatorFunction() { yield 'First'; yield 'Second'; } Allow lazy evaluation and state management.",
    difficulty: "Hard",
    roleTags: ["JavaScript Developer", "Senior Developer"],
    subjectTags: ["JavaScript", "Generators", "Advanced"]
  },
  {
    id: "js-24",
    question: "Explain the concept of currying in JavaScript.",
    answer: "Currying is a technique where a function is transformed into a sequence of functions, each taking a single argument. Example: function curry(a) { return function(b) { return function(c) { return a + b + c; }; }; } Enables partial application and function composition.",
    difficulty: "Hard",
    roleTags: ["JavaScript Developer", "Senior Developer"],
    subjectTags: ["JavaScript", "Functions", "Advanced"]
  },
  {
    id: "js-25",
    question: "What is memoization, and how can it be implemented in JavaScript?",
    answer: "Memoization is an optimization technique where the results of expensive function calls are cached and returned when the same inputs occur again. Implementation: function memoize(fn) { const cache = {}; return function(...args) { const key = JSON.stringify(args); if (cache[key]) return cache[key]; const result = fn(...args); cache[key] = result; return result; }; }",
    difficulty: "Medium",
    roleTags: ["JavaScript Developer", "Frontend Developer", "Performance Engineer"],
    subjectTags: ["JavaScript", "Optimization", "Caching"]
  },
  {
    id: "js-26",
    question: "How do you optimize the performance of a JavaScript application?",
    answer: "Techniques include minimizing DOM access, using debounce and throttle for event handlers, optimizing loops, lazy loading, and using Web Workers for CPU-intensive tasks. Profile code, minimize reflows/repaints, use efficient algorithms.",
    difficulty: "Medium",
    roleTags: ["JavaScript Developer", "Frontend Developer", "Performance Engineer"],
    subjectTags: ["JavaScript", "Performance", "Optimization"]
  },
  {
    id: "js-27",
    question: "Explain the difference between deep and shallow copy.",
    answer: "A shallow copy duplicates an object's top-level properties, while a deep copy recursively copies all nested objects, ensuring complete duplication. Shallow: Object.assign({}, obj). Deep: JSON.parse(JSON.stringify(obj)). Choose based on nesting needs.",
    difficulty: "Medium",
    roleTags: ["JavaScript Developer", "Frontend Developer"],
    subjectTags: ["JavaScript", "Objects", "Copying"]
  },
  {
    id: "js-28",
    question: "What are WeakMap and WeakSet in JavaScript?",
    answer: "WeakMap and WeakSet are collections that hold weak references to their keys or elements, meaning they do not prevent garbage collection. They are useful for memory-sensitive applications. Keys must be objects. Not iterable.",
    difficulty: "Hard",
    roleTags: ["JavaScript Developer", "Senior Developer"],
    subjectTags: ["JavaScript", "Collections", "Memory"]
  },
  {
    id: "js-29",
    question: "How do modules work in JavaScript? Explain the difference between require and import.",
    answer: "Modules allow code to be divided into reusable pieces. require is used in CommonJS (Node.js), while import is used in ES6 modules. import is static and must be used at the top of the file, while require is dynamic and can be called conditionally.",
    difficulty: "Medium",
    roleTags: ["JavaScript Developer", "Full Stack Developer", "MERN Developer"],
    subjectTags: ["JavaScript", "Modules", "ES6"]
  },
  {
    id: "js-30",
    question: "What is the significance of the Symbol type in JavaScript?",
    answer: "Symbol is a primitive data type that creates a unique, immutable identifier, often used as keys in objects to avoid property name collisions. Each Symbol is unique, even if created with same description. Enables private object properties.",
    difficulty: "Hard",
    roleTags: ["JavaScript Developer", "Senior Developer"],
    subjectTags: ["JavaScript", "Symbols", "Data Types"]
  }
];
