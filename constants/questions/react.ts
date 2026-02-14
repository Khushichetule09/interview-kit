import { Question } from "@/types/question";

export const REACT_QUESTIONS: Question[] = [
  {
    id: "react-1",
    question: "Explain the difference between useState and useEffect in React. When would you use each?",
    answer: "useState manages component state that triggers re-renders when updated. useEffect handles side effects (API calls, subscriptions, DOM manipulation) after render. Use useState for interactive data (form inputs, toggles). Use useEffect for syncing with external systems or responding to state changes.",
    difficulty: "Easy",
    roleTags: ["Frontend Developer", "Full Stack Developer", "React Developer"],
    subjectTags: ["React", "Frontend", "Hooks"]
  },
  {
    id: "react-2",
    question: "What is the Virtual DOM and how does React use it to optimize performance?",
    answer: "Virtual DOM is a lightweight JavaScript representation of actual DOM. React updates Virtual DOM first, compares with previous version (diffing), calculates minimal changes needed, then updates real DOM in batch. This avoids expensive direct DOM manipulation and reduces reflows/repaints.",
    difficulty: "Medium",
    roleTags: ["Frontend Developer", "React Developer"],
    subjectTags: ["React", "Frontend", "Performance"]
  },
  {
    id: "react-3",
    question: "Explain the concept of prop drilling in React and how you would solve it.",
    answer: "Prop drilling is passing props through multiple intermediate components that don't need them to reach deeply nested components. Solutions: Context API for global state, component composition (children props), state management libraries (Redux, Zustand), or custom hooks for shared logic.",
    difficulty: "Medium",
    roleTags: ["Frontend Developer", "React Developer"],
    subjectTags: ["React", "Frontend", "State Management"]
  },
  {
    id: "react-4",
    question: "What are React Hooks and why were they introduced? Name at least 5 built-in hooks.",
    answer: "Hooks allow using state and lifecycle features in functional components without classes. Introduced to simplify code, improve reusability, and avoid wrapper hell. Built-in hooks: useState (state), useEffect (side effects), useContext (context), useReducer (complex state), useMemo (memoization), useCallback (memoized callbacks), useRef (mutable refs), useLayoutEffect (synchronous effects).",
    difficulty: "Medium",
    roleTags: ["React Developer", "Frontend Developer", "MERN Developer"],
    subjectTags: ["React", "Hooks"]
  },
  {
    id: "react-5",
    question: "What is the difference between useMemo and useCallback? When should you use each?",
    answer: "useMemo memoizes computed values and returns the cached result when dependencies don't change. useCallback memoizes function references to prevent recreation on every render. Use useMemo for expensive calculations. Use useCallback when passing callbacks to optimized child components that rely on reference equality (React.memo).",
    difficulty: "Medium",
    roleTags: ["React Developer", "Frontend Developer"],
    subjectTags: ["React", "Hooks", "Performance"]
  },
  {
    id: "react-6",
    question: "Explain the component lifecycle in React. How has it changed with hooks?",
    answer: "Class components: Mounting (constructor, render, componentDidMount), Updating (render, componentDidUpdate), Unmounting (componentWillUnmount). With hooks: useEffect handles all phases - runs after render (DidMount/DidUpdate), cleanup function (WillUnmount). Dependencies array controls when effect runs. This simplifies lifecycle logic and reduces code duplication.",
    difficulty: "Medium",
    roleTags: ["React Developer", "Frontend Developer", "Full Stack Developer"],
    subjectTags: ["React", "Lifecycle", "Hooks"]
  },
  {
    id: "react-7",
    question: "What is React Context and when should you use it? What are its limitations?",
    answer: "Context provides a way to pass data through component tree without prop drilling. Use for: theme, auth, locale, rarely changing global state. Limitations: Any context change re-renders all consumers (even if they don't use changed values), not optimized for frequent updates, can make component reuse harder. For complex/frequent state changes, consider state management libraries.",
    difficulty: "Medium",
    roleTags: ["React Developer", "Frontend Developer", "MERN Developer"],
    subjectTags: ["React", "State Management", "Context"]
  },
  {
    id: "react-8",
    question: "What is React.memo and how does it help with performance? How is it different from useMemo?",
    answer: "React.memo is a HOC that memoizes component rendering - prevents re-render if props haven't changed (shallow comparison). useMemo memoizes values inside components. React.memo wraps entire component, useMemo wraps specific computations. Use React.memo for expensive components that receive same props frequently. Both are optimization tools - use only when needed.",
    difficulty: "Medium",
    roleTags: ["React Developer", "Frontend Developer"],
    subjectTags: ["React", "Performance", "Optimization"]
  },
  {
    id: "react-9",
    question: "Explain the difference between controlled and uncontrolled components in React forms.",
    answer: "Controlled: React state is single source of truth, value controlled via props and onChange. Provides validation, conditional disabling, dynamic inputs. Uncontrolled: DOM handles state, accessed via refs. Simpler for basic forms, integrating with non-React code. Controlled components are recommended for most cases as they provide better control and testing.",
    difficulty: "Easy",
    roleTags: ["React Developer", "Frontend Developer", "MERN Developer"],
    subjectTags: ["React", "Forms"]
  },
  {
    id: "react-10",
    question: "What is the useReducer hook and when would you use it instead of useState?",
    answer: "useReducer manages complex state logic with multiple sub-values or when next state depends on previous. Takes reducer function (state, action) => newState and initial state. Use when: state updates involve complex logic, multiple related state variables, next state depends on previous, or need predictable state updates. Similar to Redux but component-level.",
    difficulty: "Medium",
    roleTags: ["React Developer", "Frontend Developer", "MERN Developer"],
    subjectTags: ["React", "Hooks", "State Management"]
  },
  {
    id: "react-11",
    question: "What are React keys and why are they important? What happens if you use index as key?",
    answer: "Keys help React identify which items changed/added/removed in lists. Must be stable, unique among siblings. React uses keys to optimize reconciliation. Using index as key causes issues: wrong items may be updated/deleted when list reorders, state may get mixed up, performance degradation. Use unique IDs from data instead.",
    difficulty: "Easy",
    roleTags: ["React Developer", "Frontend Developer"],
    subjectTags: ["React", "Lists", "Performance"]
  },
  {
    id: "react-12",
    question: "Explain React's reconciliation algorithm and how Fiber improves it.",
    answer: "Reconciliation is how React updates DOM by comparing Virtual DOM trees. Old algorithm was synchronous and could block main thread. Fiber (React 16+) makes it asynchronous and interruptible - assigns priority to updates, can pause/resume work, splits work into chunks. This enables features like Suspense, Concurrent Mode, and smoother user experience.",
    difficulty: "Hard",
    roleTags: ["React Developer", "Senior Frontend Developer"],
    subjectTags: ["React", "Performance", "Internals"]
  },
  {
    id: "react-13",
    question: "What is lazy loading in React and how do you implement it?",
    answer: "Lazy loading delays loading components until needed, reducing initial bundle size. Implementation: React.lazy() for dynamic imports + Suspense for fallback UI. Example: const MyComponent = React.lazy(() => import('./MyComponent')); wrapped in <Suspense fallback={<Loading />}>. Also applies to images, routes (code splitting), and data.",
    difficulty: "Medium",
    roleTags: ["React Developer", "Frontend Developer", "MERN Developer"],
    subjectTags: ["React", "Performance", "Code Splitting"]
  },
  {
    id: "react-14",
    question: "What is the difference between useEffect and useLayoutEffect?",
    answer: "useEffect runs asynchronously after paint - won't block browser from updating screen. useLayoutEffect runs synchronously after DOM mutations but before paint - blocks visual updates. Use useLayoutEffect for: DOM measurements, preventing visual flicker, synchronous DOM updates. Use useEffect for most cases (API calls, subscriptions) to avoid blocking rendering.",
    difficulty: "Medium",
    roleTags: ["React Developer", "Frontend Developer"],
    subjectTags: ["React", "Hooks", "Performance"]
  },
  {
    id: "react-15",
    question: "How does React handle events? What is event pooling (in React 16 and earlier)?",
    answer: "React uses synthetic events (cross-browser wrapper around native events) for consistency. Event delegation - attaches single listener at root. Event pooling (removed in React 17): SyntheticEvent objects were reused for performance, properties nullified after callback. React 17+ doesn't pool events. Always access event properties synchronously or call event.persist() in older versions.",
    difficulty: "Medium",
    roleTags: ["React Developer", "Frontend Developer"],
    subjectTags: ["React", "Events"]
  },
  {
    id: "react-16",
    question: "What are Error Boundaries in React? How do you implement them?",
    answer: "Error Boundaries catch JavaScript errors in child component tree, log errors, and display fallback UI instead of crashing. Implement using class component with componentDidCatch() and static getDerivedStateFromError(). Don't catch: event handlers, async code, SSR, errors in boundary itself. Wrap components that might error. Note: No hook equivalent yet.",
    difficulty: "Medium",
    roleTags: ["React Developer", "Frontend Developer", "Senior Developer"],
    subjectTags: ["React", "Error Handling"]
  },
  {
    id: "react-17",
    question: "What is React Suspense and what problems does it solve?",
    answer: "Suspense lets components 'wait' for something before rendering, showing fallback during wait. Solves: code splitting (with React.lazy), async data fetching coordination, loading state management. Enables declarative loading states, avoids loading waterfalls, coordinates multiple async operations. Works with React.lazy now, data fetching in concurrent features.",
    difficulty: "Medium",
    roleTags: ["React Developer", "Frontend Developer", "MERN Developer"],
    subjectTags: ["React", "Suspense", "Async"]
  },
  {
    id: "react-18",
    question: "Explain Higher-Order Components (HOC). Give an example use case.",
    answer: "HOC is a function that takes a component and returns enhanced component. Used for: code reuse, logic abstraction, prop manipulation. Example: withAuth HOC that wraps components to check authentication before rendering. Pattern: const EnhancedComponent = higherOrderComponent(WrappedComponent). Modern alternative: custom hooks often cleaner for logic reuse.",
    difficulty: "Medium",
    roleTags: ["React Developer", "Senior Frontend Developer"],
    subjectTags: ["React", "Patterns"]
  },
  {
    id: "react-19",
    question: "What is the useRef hook used for? Give 3 different use cases.",
    answer: "useRef creates mutable reference that persists across renders without causing re-renders. Use cases: (1) Accessing DOM elements directly (focus, scroll), (2) Storing mutable values that don't trigger re-render (timers, previous values), (3) Keeping reference to latest callback in effects. Unlike state, changing .current doesn't trigger re-render.",
    difficulty: "Easy",
    roleTags: ["React Developer", "Frontend Developer"],
    subjectTags: ["React", "Hooks"]
  },
  {
    id: "react-20",
    question: "What are React Portals and when would you use them?",
    answer: "Portals render children into DOM node outside parent component hierarchy using ReactDOM.createPortal(child, domNode). Use for: modals, tooltips, dropdowns, notifications that need to break out of parent's overflow/z-index. Events still bubble through React tree despite different DOM location. Maintains React context and event handling.",
    difficulty: "Medium",
    roleTags: ["React Developer", "Frontend Developer"],
    subjectTags: ["React", "DOM"]
  },
  {
    id: "react-21",
    question: "What is the difference between state and props in React?",
    answer: "Props: passed from parent, immutable by child, used for component configuration. State: managed within component, mutable via setState/useState, triggers re-render on change. Props flow down (unidirectional data flow), state is local. Props make components reusable, state makes them interactive. Both trigger re-render when changed.",
    difficulty: "Easy",
    roleTags: ["React Developer", "Frontend Developer", "MERN Developer"],
    subjectTags: ["React", "Fundamentals"]
  },
  {
    id: "react-22",
    question: "How do you optimize performance in a React application? List at least 5 techniques.",
    answer: "1) React.memo for component memoization 2) useMemo/useCallback for expensive calculations 3) Code splitting with React.lazy 4) Virtualization for long lists (react-window) 5) Debouncing/throttling event handlers 6) Proper key usage 7) Avoid inline functions/objects in render 8) Production builds 9) Chrome DevTools Profiler for bottlenecks 10) Concurrent features in React 18.",
    difficulty: "Hard",
    roleTags: ["React Developer", "Senior Frontend Developer", "Performance Engineer"],
    subjectTags: ["React", "Performance", "Optimization"]
  },
  {
    id: "react-23",
    question: "What is the difference between React Server Components and Client Components?",
    answer: "Server Components: Render on server, zero bundle size, direct backend access, no state/effects/browser APIs, can't use hooks. Client Components: Render on client, included in bundle, interactive, can use hooks and browser APIs, marked with 'use client'. Server Components are default in Next.js App Router, reduce JavaScript sent to client, good for data fetching.",
    difficulty: "Hard",
    roleTags: ["React Developer", "Full Stack Developer", "MERN Developer"],
    subjectTags: ["React", "Next.js", "Server Components"]
  },
  {
    id: "react-24",
    question: "Explain the useImperativeHandle hook and when you would use it.",
    answer: "useImperativeHandle customizes instance value exposed when using ref with forwardRef. Lets parent component call imperative methods on child. Example: exposing focus() or reset() methods. Use rarely - contradicts React's declarative nature. Useful for: custom input components, integration with imperative libraries, form controls that need external control.",
    difficulty: "Hard",
    roleTags: ["React Developer", "Senior Frontend Developer"],
    subjectTags: ["React", "Hooks", "Advanced"]
  },
  {
    id: "react-25",
    question: "What are custom hooks? How do you create one and what are best practices?",
    answer: "Custom hooks extract reusable stateful logic into functions. Start with 'use' prefix, can call other hooks. Example: useLocalStorage, useFetch. Best practices: (1) Name with 'use' prefix (2) Return values/functions needed by components (3) Keep focused on single purpose (4) Document dependencies (5) Handle cleanup (6) Make composable. Don't call conditionally.",
    difficulty: "Medium",
    roleTags: ["React Developer", "Frontend Developer", "MERN Developer"],
    subjectTags: ["React", "Hooks", "Custom Hooks"]
  },
  {
    id: "react-26",
    question: "What is StrictMode in React and what does it do?",
    answer: "StrictMode is a development tool that highlights potential problems. Activates checks/warnings for: unsafe lifecycles, legacy APIs (string refs, findDOMNode), unexpected side effects (double-invokes functions to detect issues), deprecated features. Only in development, doesn't render visible UI, doesn't impact production. Helps write future-proof React code.",
    difficulty: "Easy",
    roleTags: ["React Developer", "Frontend Developer"],
    subjectTags: ["React", "Development"]
  },
  {
    id: "react-27",
    question: "How does React 18's automatic batching work and how is it different from React 17?",
    answer: "React 18 automatically batches multiple state updates into single re-render even in promises, setTimeout, native events. React 17 only batched in React event handlers. Benefits: fewer renders, better performance. Can opt-out using flushSync() for synchronous updates. Concurrent features enabled by new root API (createRoot). Major performance improvement with no code changes needed.",
    difficulty: "Medium",
    roleTags: ["React Developer", "Frontend Developer", "Senior Developer"],
    subjectTags: ["React", "React 18", "Performance"]
  },
  {
    id: "react-28",
    question: "What is the Context API pattern for avoiding unnecessary re-renders?",
    answer: "Split context into multiple smaller contexts to prevent all consumers re-rendering. Patterns: (1) Separate state and dispatch contexts (2) useMemo on context value (3) Component composition - pass children (4) Use context selectors (third-party) (5) Combine with React.memo for consumers. Don't put everything in one context. Only wrap tree that needs access.",
    difficulty: "Hard",
    roleTags: ["React Developer", "Senior Frontend Developer"],
    subjectTags: ["React", "Performance", "Context"]
  },
  {
    id: "react-29",
    question: "What is memoization in React and how does it improve performance?",
    answer: "Memoization caches function results based on inputs to avoid redundant calculations. In React: useMemo caches computed values, useCallback caches function references, React.memo caches component renders. Prevents expensive recalculations when dependencies haven't changed. Trade-off: memory for CPU. Only use when profiling shows actual performance benefit - premature optimization can harm readability.",
    difficulty: "Medium",
    roleTags: ["React Developer", "Frontend Developer"],
    subjectTags: ["React", "Performance", "Optimization"]
  },
  {
    id: "react-30",
    question: "How do you handle side effects in React? What are some common pitfalls?",
    answer: "Use useEffect for side effects (API calls, subscriptions, timers). Pitfalls: (1) Missing dependencies causes stale closures (2) Infinite loops from missing dependency array (3) Race conditions in async effects (4) Not cleaning up (memory leaks) (5) Using async directly in useEffect (wrap in function). Solutions: ESLint plugin, cleanup functions, AbortController, proper dependency tracking.",
    difficulty: "Medium",
    roleTags: ["React Developer", "Frontend Developer", "MERN Developer"],
    subjectTags: ["React", "Hooks", "Side Effects"]
  },
  {
    id: "react-31",
    question: "What is JSX?",
    answer: "JSX stands for JavaScript XML. It is a syntax extension for JavaScript that allows you to write HTML directly within JavaScript. React uses JSX to describe what the UI should look like. JSX gets compiled to React.createElement() calls, which create React elements. It makes code more readable and allows using JavaScript expressions within curly braces.",
    difficulty: "Easy",
    roleTags: ["React Developer", "Frontend Developer", "MERN Developer"],
    subjectTags: ["React", "JSX", "Fundamentals"]
  },
  {
    id: "react-32",
    question: "What are React Fragments and why are they useful?",
    answer: "React Fragments let you group multiple elements without adding an extra node to the DOM. You can use <React.Fragment> or the shorthand syntax <>...</>. They're useful when a component needs to return multiple elements but you don't want to add unnecessary wrapper divs that can affect styling or DOM structure. Fragments can also have keys when mapping over lists.",
    difficulty: "Easy",
    roleTags: ["React Developer", "Frontend Developer"],
    subjectTags: ["React", "Fragments", "DOM"]
  },
  {
    id: "react-33",
    question: "How do you conditionally render components in React?",
    answer: "You can conditionally render components using: (1) Logical AND operator (&&) for simple conditions: {isLoggedIn && <Dashboard />}, (2) Ternary operators for if-else: {isLoggedIn ? <Dashboard /> : <Login />}, (3) If statements outside JSX, (4) Switch statements for multiple conditions, (5) Immediately Invoked Function Expressions (IIFE) for complex logic. Choose based on complexity and readability.",
    difficulty: "Easy",
    roleTags: ["React Developer", "Frontend Developer", "MERN Developer"],
    subjectTags: ["React", "Conditional Rendering"]
  },
  {
    id: "react-34",
    question: "How do you fetch data from an API in React?",
    answer: "Fetch data using the fetch API or libraries like Axios within useEffect hook. Pattern: useEffect(() => { async function fetchData() { try { const response = await fetch(url); const data = await response.json(); setState(data); } catch (error) { setError(error); } } fetchData(); }, []). Use empty dependency array to fetch once on mount. Consider loading states, error handling, and cleanup with AbortController to prevent memory leaks.",
    difficulty: "Easy",
    roleTags: ["React Developer", "Frontend Developer", "MERN Developer"],
    subjectTags: ["React", "API", "Hooks"]
  },
  {
    id: "react-35",
    question: "What is the useContext hook and how do you use it?",
    answer: "useContext hook allows you to access context values directly in functional components without using Consumer component. Usage: const value = useContext(MyContext). It accepts a context object created by React.createContext() and returns the current context value. When provider updates, component re-renders with new value. More concise than Context.Consumer pattern.",
    difficulty: "Easy",
    roleTags: ["React Developer", "Frontend Developer", "MERN Developer"],
    subjectTags: ["React", "Hooks", "Context"]
  },
  {
    id: "react-36",
    question: "What is server-side rendering (SSR) in React and what are its benefits?",
    answer: "SSR renders React components on the server and sends fully rendered HTML to client. Benefits: (1) Improved SEO - search engines can crawl content, (2) Faster initial page load - users see content immediately, (3) Better performance on low-powered devices, (4) Social media previews work correctly. Trade-offs: increased server load, more complex setup. Next.js and Remix are popular SSR frameworks for React.",
    difficulty: "Medium",
    roleTags: ["React Developer", "Full Stack Developer", "MERN Developer"],
    subjectTags: ["React", "SSR", "Performance"]
  },
  {
    id: "react-37",
    question: "Explain React Router and its use cases.",
    answer: "React Router is a routing library for React applications that enables navigation between different views/pages in single-page applications. Key components: BrowserRouter (wrapper), Route (defines paths), Link (navigation), useNavigate (programmatic navigation), useParams (access URL params). Use cases: multi-page apps, nested routes, protected routes, dynamic routing, URL parameter handling. Maintains browser history and enables back/forward navigation.",
    difficulty: "Medium",
    roleTags: ["React Developer", "Frontend Developer", "MERN Developer"],
    subjectTags: ["React", "React Router", "Navigation"]
  },
  {
    id: "react-38",
    question: "What is React Fiber and why was it introduced?",
    answer: "React Fiber is the new reconciliation engine introduced in React 16. It's a complete rewrite of React's core algorithm. Key features: (1) Incremental rendering - splits work into chunks, (2) Ability to pause/abort/resume work, (3) Assigns priority to different updates, (4) Enables concurrent features. Benefits: smoother animations, better responsiveness, can handle high-priority updates (user input) before low-priority ones (data fetching). Foundation for Concurrent Mode and Suspense.",
    difficulty: "Hard",
    roleTags: ["React Developer", "Senior Frontend Developer"],
    subjectTags: ["React", "Fiber", "Internals"]
  },
  {
    id: "react-39",
    question: "How does concurrent rendering work in React?",
    answer: "Concurrent rendering enables React to work on multiple state updates simultaneously and interrupt rendering work to handle high-priority updates. React can prepare multiple versions of UI in memory before committing to DOM. Features: useTransition for non-urgent updates, useDeferredValue for deferring expensive re-renders, Suspense for async boundaries. Benefits: UI stays responsive during heavy renders, prevents blocking, smoother user experience. Opt-in with React 18's createRoot.",
    difficulty: "Hard",
    roleTags: ["React Developer", "Senior Frontend Developer"],
    subjectTags: ["React", "Concurrent Mode", "React 18"]
  },
  {
    id: "react-40",
    question: "Explain the difference between static and dynamic routing in React.",
    answer: "Static routing: Routes are defined at build time and don't change. All routes declared upfront in configuration. Example: traditional React Router setup with fixed paths. Dynamic routing: Routes generated at runtime based on application state, user permissions, or data. Routes can be added/removed programmatically. Example: admin routes that only appear for authenticated admins. Dynamic routing provides flexibility but adds complexity. Use static for predictable navigation, dynamic for conditional/data-driven routes.",
    difficulty: "Medium",
    roleTags: ["React Developer", "Frontend Developer"],
    subjectTags: ["React", "Routing", "React Router"]
  },
  {
    id: "react-41",
    question: "How do you implement authentication in a React application?",
    answer: "Authentication strategies: (1) JWT tokens - store in httpOnly cookies or localStorage, send with API requests, (2) OAuth - integrate with providers like Google/GitHub, (3) Session-based - server manages sessions. Implementation: Create auth context for global state, protected route components, login/logout functions, token refresh logic, redirect unauthenticated users. Use libraries like Auth0, Firebase Auth, or implement custom solution. Secure token storage, handle token expiration, implement refresh tokens for security.",
    difficulty: "Medium",
    roleTags: ["React Developer", "Full Stack Developer", "MERN Developer"],
    subjectTags: ["React", "Authentication", "Security"]
  },
  {
    id: "react-42",
    question: "What is code splitting and how do you implement it in React?",
    answer: "Code splitting divides application bundle into smaller chunks loaded on demand, improving initial load time. Implementation: (1) React.lazy() + Suspense for component-based splitting, (2) Dynamic import() for module splitting, (3) Route-based splitting - load components per route, (4) Webpack's magic comments for chunk naming. Benefits: reduced initial bundle size, faster page loads, better performance on slow networks. Tools like Webpack, Vite handle bundling automatically. Monitor bundle size with tools like webpack-bundle-analyzer.",
    difficulty: "Medium",
    roleTags: ["React Developer", "Frontend Developer", "MERN Developer"],
    subjectTags: ["React", "Code Splitting", "Performance"]
  },
  {
    id: "react-43",
    question: "What are render props and how do they differ from Higher-Order Components?",
    answer: "Render props is a pattern where a component's prop is a function that returns React elements, enabling code reuse. Example: <DataProvider render={(data) => <Component data={data} />} />. Differences from HOCs: Render props don't create wrapper components, more explicit data flow, easier to trace, avoid naming collisions. HOCs wrap components and enhance them. Both solve code reuse. Modern approach: custom hooks often cleaner than both patterns.",
    difficulty: "Medium",
    roleTags: ["React Developer", "Senior Frontend Developer"],
    subjectTags: ["React", "Patterns", "Render Props"]
  },
  {
    id: "react-44",
    question: "How do you handle side effects in Redux? Explain Redux Thunk and Redux Saga.",
    answer: "Redux middleware handles side effects (async operations, API calls). Redux Thunk: simplest approach, allows action creators to return functions instead of actions. Good for simple async logic. Redux Saga: uses generator functions for complex async flows, better error handling, easier testing, cancellable operations. Saga is powerful for complex scenarios (debouncing, race conditions, sequential async). Thunk is simpler for basic async needs. Modern alternative: Redux Toolkit's createAsyncThunk.",
    difficulty: "Hard",
    roleTags: ["React Developer", "Frontend Developer", "MERN Developer"],
    subjectTags: ["React", "Redux", "State Management"]
  },
  {
    id: "react-45",
    question: "How does React's Context API differ from Redux?",
    answer: "Context API: Built into React, simpler setup, good for rarely-changing global state (theme, auth), can cause performance issues with frequent updates, less structured. Redux: External library, more boilerplate, excellent DevTools, middleware support, optimized for frequent updates, time-travel debugging, strict unidirectional flow. Use Context for simple global state (<5 values). Use Redux for complex state management, multiple reducers, middleware needs, large applications. Can use both together.",
    difficulty: "Medium",
    roleTags: ["React Developer", "Frontend Developer", "MERN Developer"],
    subjectTags: ["React", "Redux", "State Management", "Context"]
  },
  {
    id: "react-46",
    question: "How do you implement real-time features like WebSockets in React?",
    answer: "Implement WebSockets in useEffect: useEffect(() => { const ws = new WebSocket('ws://url'); ws.onmessage = (event) => setState(JSON.parse(event.data)); ws.onerror = handleError; return () => ws.close(); }, []). Libraries: Socket.IO for reliability, reconnection, fallbacks. Patterns: (1) Create custom hook (useWebSocket) for reusability, (2) Context for sharing connection, (3) Handle reconnection logic, (4) Manage connection state. Use for: chat, notifications, live updates, collaborative editing.",
    difficulty: "Medium",
    roleTags: ["React Developer", "Full Stack Developer", "MERN Developer"],
    subjectTags: ["React", "WebSockets", "Real-time"]
  },
  {
    id: "react-47",
    question: "What is the difference between shallow rendering and deep rendering in React testing?",
    answer: "Shallow rendering: Tests component in isolation by rendering only the component itself, not children. Fast, focused unit tests, prevents child component bugs from affecting tests. Use Enzyme's shallow() or React Testing Library with mocking. Deep rendering: Renders component with all children (full tree). Integration testing approach, tests component interactions, slower. Use mount() in Enzyme or render() in RTL. Shallow for unit tests, deep for integration tests. Modern approach: React Testing Library promotes deep rendering with user-centric testing.",
    difficulty: "Medium",
    roleTags: ["React Developer", "Frontend Developer", "QA Engineer"],
    subjectTags: ["React", "Testing", "Unit Testing"]
  },
  {
    id: "react-48",
    question: "How do you handle performance bottlenecks in large React applications?",
    answer: "Identify bottlenecks: (1) React DevTools Profiler to find slow components, (2) Chrome Performance tab for runtime analysis. Solutions: (1) Memoization (React.memo, useMemo, useCallback), (2) Virtualization for long lists (react-window, react-virtualized), (3) Code splitting and lazy loading, (4) Debounce/throttle expensive operations, (5) Optimize re-renders - proper keys, avoid inline functions, (6) Web workers for heavy computations, (7) Concurrent features for non-blocking updates. Profile before optimizing.",
    difficulty: "Hard",
    roleTags: ["React Developer", "Senior Frontend Developer", "Performance Engineer"],
    subjectTags: ["React", "Performance", "Optimization"]
  },
  {
    id: "react-49",
    question: "What are the potential downsides of using React's Context API extensively?",
    answer: "Downsides: (1) Performance - any context change re-renders ALL consumers, even if they only use part of context, (2) No built-in optimization like Redux selectors, (3) Debugging harder - less visible state flow, (4) Components become less reusable - tightly coupled to context, (5) No middleware support for logging/async, (6) Can lead to 'prop drilling through context' with nested contexts. Solutions: Split into smaller contexts, use composition, consider Redux for complex state, combine with useMemo/React.memo.",
    difficulty: "Medium",
    roleTags: ["React Developer", "Senior Frontend Developer"],
    subjectTags: ["React", "Context", "Performance"]
  },
  {
    id: "react-50",
    question: "How do you implement a theme switcher in a React application?",
    answer: "Implementation: (1) Create ThemeContext with createContext(), (2) ThemeProvider component holds current theme state (useState), (3) Provide theme and toggleTheme function via context value, (4) Wrap app with ThemeProvider, (5) Components consume theme using useContext(ThemeContext), (6) Apply theme styles via className or CSS variables. Enhancements: Persist theme to localStorage, support system preference (prefers-color-scheme), smooth transitions with CSS. Libraries: styled-components with ThemeProvider, CSS modules, or Tailwind's dark mode.",
    difficulty: "Easy",
    roleTags: ["React Developer", "Frontend Developer", "MERN Developer"],
    subjectTags: ["React", "Context", "Theming"]
  },
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
  },
  {
    id: "mongodb-1",
    question: "Explain the aggregation pipeline and its stages.",
    answer: "The MongoDB aggregation pipeline is a framework for data aggregation modeled on the concept of data processing pipelines. Documents enter a pipeline consisting of stages like $match, $group, $sort, $project, $lookup, $unwind, and $facet. Each stage transforms documents into the next stage. $match filters documents, $group groups by field, $sort orders results, $project selects fields, $lookup joins collections, $unwind deconstructs arrays, and $facet returns multiple pipelines.",
    difficulty: "Medium",
    roleTags: ["Full Stack Developer", "MERN Developer", "Backend Developer"],
    subjectTags: ["MongoDB", "Database", "Aggregation"]
  },
  {
    id: "mongodb-2",
    question: "How does indexing work in MongoDB, and what are compound indexes?",
    answer: "Indexes in MongoDB are data structures that allow efficient queries by creating sorted references to documents. Indexes speed up query performance and sort operations. Compound indexes contain references to multiple fields, allowing queries on combinations of fields. Example: db.users.createIndex({firstName: 1, lastName: 1}). The 1 or -1 indicates ascending or descending order. Compound indexes are useful for queries filtering or sorting on multiple fields.",
    difficulty: "Medium",
    roleTags: ["Full Stack Developer", "MERN Developer", "Database Administrator"],
    subjectTags: ["MongoDB", "Database", "Performance"]
  },
  {
    id: "mongodb-3",
    question: "What's the difference between find(), findOne(), and aggregate()?",
    answer: "find() returns a cursor of all documents matching the query. findOne() returns the first document matching the query or null. aggregate() processes documents through an aggregation pipeline and returns results. find/findOne are simpler for basic queries. aggregate() is more powerful for complex data transformations, grouping, and joins. Use find for straightforward queries, aggregate for complex analytics and data processing.",
    difficulty: "Easy",
    roleTags: ["Full Stack Developer", "MERN Developer"],
    subjectTags: ["MongoDB", "Database", "Queries"]
  },
  {
    id: "mongodb-4",
    question: "How do you optimize MongoDB queries for performance?",
    answer: "Optimization techniques: (1) Create appropriate indexes on frequently queried fields, (2) Use explain() to analyze query performance, (3) Avoid $lookup in large collections, (4) Use $match early in pipelines to filter documents, (5) Limit returned fields with projections, (6) Use compound indexes for multi-field queries, (7) Monitor slow queries with profiler, (8) Denormalize data when reads significantly outnumber writes, (9) Use bulk operations for multiple inserts/updates.",
    difficulty: "Medium",
    roleTags: ["Full Stack Developer", "MERN Developer", "Performance Engineer"],
    subjectTags: ["MongoDB", "Database", "Optimization"]
  },
  {
    id: "mongodb-5",
    question: "What is schema design and how do you model relationships in MongoDB (1:1, 1:N, N:N)?",
    answer: "MongoDB schema design differs from relational databases. 1:1 relationships: embed related document in same collection or reference. 1:N relationships: embed many documents in array (if small) or use references (if large). N:N relationships: use references in both collections. Embedding is denormalization - faster reads but requires updates if nested data changes. References require joins ($lookup) but reduce duplication. Choose embedding for small, frequently accessed nested data, references for large or frequently updated relationships.",
    difficulty: "Medium",
    roleTags: ["Full Stack Developer", "MERN Developer", "Database Architect"],
    subjectTags: ["MongoDB", "Database", "Schema Design"]
  },
  {
    id: "mongodb-6",
    question: "Explain data validation and how to enforce it in MongoDB.",
    answer: "MongoDB provides schema validation at database level using JSON Schema. Create validation with db.createCollection() or collMod() command specifying validationLevel and validationAction. validationLevel: 'strict' validates all inserts/updates, 'moderate' only validates updates to existing documents. validationAction: 'error' rejects invalid documents, 'warn' logs warnings. Define required fields, types, patterns. Example: {bsonType: 'object', required: ['email'], properties: {email: {bsonType: 'string', pattern: '^[a-z0-9]+@'}}}. Server-side validation ensures data integrity.",
    difficulty: "Medium",
    roleTags: ["Full Stack Developer", "MERN Developer", "Database Administrator"],
    subjectTags: ["MongoDB", "Database", "Validation"]
  },
  {
    id: "mongodb-7",
    question: "What are transactions in MongoDB and when would you use them?",
    answer: "Transactions in MongoDB (4.0+) allow ACID-compliant multi-document operations. Ensure atomicity - all operations succeed or all fail. Require a replica set or sharded cluster. Used when: multiple documents must update consistently, preventing partial updates if operation fails, maintaining data integrity across related collections. Example: session.startTransaction(), perform operations, session.commitTransaction(). Avoid using frequently as they're slower than single-document operations. Use for critical operations like payments or inventory updates.",
    difficulty: "Hard",
    roleTags: ["Full Stack Developer", "MERN Developer", "Senior Developer"],
    subjectTags: ["MongoDB", "Database", "Transactions"]
  },
  {
    id: "mongodb-8",
    question: "What is a capped collection?",
    answer: "Capped collections are fixed-size collections that automatically remove oldest entries when size limit is reached. Maintain insertion order. Efficient for logging, caching, and time-series data. Create with db.createCollection('log', {capped: true, size: 100000}). Cannot delete individual documents. Cannot add fields to indexes. Cannot update documents that increase their size. Cannot use drop indexes. Useful for temporary data, circular buffers, and audit logs.",
    difficulty: "Easy",
    roleTags: ["Full Stack Developer", "MERN Developer"],
    subjectTags: ["MongoDB", "Database", "Collections"]
  },
  {
    id: "mongodb-9",
    question: "How does MongoDB handle concurrency?",
    answer: "MongoDB uses document-level concurrency control and locking. Multiple clients can access different documents simultaneously. Read operations don't block write operations. Uses optimistic concurrency - reads proceed without locks, writes obtain locks on documents. Readers don't block readers. Writers don't block readers. But writers block writers. Transactions (4.0+) provide snapshot isolation for multi-document consistency. WiredTiger storage engine handles concurrency efficiently with document-level locks.",
    difficulty: "Hard",
    roleTags: ["Full Stack Developer", "MERN Developer", "Senior Developer"],
    subjectTags: ["MongoDB", "Database", "Concurrency"]
  },
  {
    id: "mongodb-10",
    question: "Explain change streams in MongoDB.",
    answer: "Change streams provide real-time notifications when data changes. Clients can listen to changes in collections, databases, or clusters. Return a stream of change events (insert, update, delete, replace). Used for real-time data synchronization, triggering actions on data changes, maintaining caches. Example: db.collection.watch(). Events include operationType, documentKey, fullDocument, updateDescription. Requires replica set or sharded cluster. Enables reactive applications that respond to database changes.",
    difficulty: "Medium",
    roleTags: ["Full Stack Developer", "MERN Developer"],
    subjectTags: ["MongoDB", "Database", "Real-time"]
  },
  {
    id: "mongodb-11",
    question: "What's the difference between populate() and $lookup?",
    answer: "Both join data from different collections. populate() is a Mongoose method (ODM) that replaces references with actual documents. Automatic and convenient with schemas. $lookup is MongoDB aggregation stage (database-level) that performs left outer join. More control over joined data. populate() is simpler for basic references, $lookup is more powerful for complex joins. populate() requires Mongoose, $lookup is native MongoDB. Choose populate() for Mongoose projects, $lookup for complex aggregations or native driver usage.",
    difficulty: "Medium",
    roleTags: ["Full Stack Developer", "MERN Developer"],
    subjectTags: ["MongoDB", "Database", "Joins"]
  },
  {
    id: "mongodb-12",
    question: "How do you perform pagination in MongoDB efficiently?",
    answer: "Pagination techniques: (1) Skip/Limit: skip(pageNumber * pageSize).limit(pageSize) - simple but slow for large datasets. (2) Keyset-based pagination: Sort by ID, remember last document's ID, query where ID > lastID - faster for large sets. (3) Range queries: Filter by ranges instead of offsets. (4) Aggregation with $skip and $limit. For large datasets, prefer keyset-based pagination or range queries. Include metadata like hasNextPage, totalCount. Sort consistently for reliable results.",
    difficulty: "Medium",
    roleTags: ["Full Stack Developer", "MERN Developer"],
    subjectTags: ["MongoDB", "Database", "Pagination"]
  },
  {
    id: "mongodb-13",
    question: "What is the use of the $facet stage?",
    answer: "$facet allows running multiple aggregation pipelines within a single aggregation stage on the same set of input documents. Returns results from all pipelines in a single response. Useful for faceted search - getting multiple aggregations simultaneously (categories, price ranges, ratings). Example: {$facet: {categories: [{$group: {_id: '$category'}}], priceRanges: [{$bucket: {groupBy: '$price'}}]}}. More efficient than multiple separate queries. Common in e-commerce search interfaces.",
    difficulty: "Hard",
    roleTags: ["Full Stack Developer", "MERN Developer"],
    subjectTags: ["MongoDB", "Database", "Aggregation"]
  },
  {
    id: "mongodb-14",
    question: "How does MongoDB handle horizontal scaling?",
    answer: "MongoDB uses sharding for horizontal scaling. Sharding distributes data across multiple servers/clusters based on a shard key. Data is partitioned into chunks distributed across shards. Config servers maintain shard metadata. Mongos routers direct queries to appropriate shards. Choose shard key wisely - must be indexed, have good cardinality, enable even distribution. Bad choices: sequential IDs, low cardinality fields. Sharding enables handling large datasets and high throughput. Requires careful planning and monitoring.",
    difficulty: "Hard",
    roleTags: ["Full Stack Developer", "MERN Developer", "Senior Developer"],
    subjectTags: ["MongoDB", "Database", "Scaling"]
  },
  {
    id: "mongodb-15",
    question: "Difference between embedded documents vs. referenced documents.",
    answer: "Embedded documents: Store related data within parent document. Pros: single query, atomicity, good performance for reads. Cons: data duplication if referenced elsewhere, large document size, harder updates. Referenced documents: Store relationships using IDs. Pros: avoid duplication, smaller documents, easier updates. Cons: requires multiple queries (join), no atomicity across documents. Embedded good for: 1:1 relationships, small related data, frequent together queries. Referenced good for: 1:N relationships, large data, frequently updated relationships.",
    difficulty: "Medium",
    roleTags: ["Full Stack Developer", "MERN Developer"],
    subjectTags: ["MongoDB", "Database", "Design"]
  },
  {
    id: "mongodb-16",
    question: "How do you back up and restore a MongoDB database?",
    answer: "Backup methods: (1) mongodump - creates binary backup, mongorestore restores. (2) MongoDB Ops Manager/Cloud Manager - automated backups. (3) File system snapshots if using LVM. (4) Amazon AWS backups if using Atlas. Backup entire server: mongodump --out /backup/location. Backup specific database: mongodump --db dbname. Restore: mongorestore /backup/location. For production, use automated solutions. Regular backups essential for disaster recovery.",
    difficulty: "Easy",
    roleTags: ["Full Stack Developer", "Database Administrator"],
    subjectTags: ["MongoDB", "Database", "Backup"]
  },
  {
    id: "mongodb-17",
    question: "How can you enforce uniqueness on a field?",
    answer: "Create unique index on the field: db.collection.createIndex({email: 1}, {unique: true}). MongoDB prevents duplicate values in indexed field. Sparse indexes allow multiple null values: db.collection.createIndex({phone: 1}, {unique: true, sparse: true}). Handle duplicates before creating unique index or use background: true option. Can create compound unique indexes on multiple fields. Violations throw E11000 duplicate key error.",
    difficulty: "Easy",
    roleTags: ["Full Stack Developer", "MERN Developer"],
    subjectTags: ["MongoDB", "Database", "Indexing"]
  },
  {
    id: "mongodb-18",
    question: "What are MongoDB Atlas Triggers?",
    answer: "Triggers in MongoDB Atlas are functions that execute in response to database changes (inserts, updates, deletes). Automatically trigger on matching events in collections. Execute server-side functions without polling. Used for: syncing data with external services, sending notifications, enforcing business rules. Configure event source (collection and operation types), filter, and function handler. Enable real-time reactive workflows. Part of MongoDB Realm services.",
    difficulty: "Hard",
    roleTags: ["Full Stack Developer", "MERN Developer", "Backend Developer"],
    subjectTags: ["MongoDB", "Database", "Automation"]
  },
  {
    id: "mongodb-19",
    question: "What is TTL indexing and when would you use it?",
    answer: "TTL (Time To Live) indexes automatically delete documents after a specified time period. Create with: db.collection.createIndex({createdAt: 1}, {expireAfterSeconds: 3600}). Documents with createdAt older than specified seconds get deleted. Used for: session storage, temporary data, logs, cache expiration, OTP/verification tokens. MongoDB checks expiration every 60 seconds. Good for automatic cleanup without manual deletion. Reduces storage requirements for temporary data.",
    difficulty: "Medium",
    roleTags: ["Full Stack Developer", "MERN Developer"],
    subjectTags: ["MongoDB", "Database", "Indexing"]
  },
  {
    id: "mongodb-20",
    question: "How do you monitor and profile MongoDB queries?",
    answer: "Monitoring tools: (1) db.setProfilingLevel(1) - logs slow queries. (2) db.system.profile collection - contains profile data. (3) MongoDB Atlas Dashboard - visual monitoring. (4) mongotop - shows collection activity. (5) mongostat - shows server statistics. (6) explain() method - analyzes query performance. (7) Prometheus/Grafana integration. Monitor: query execution time, indexes used, scanned/returned documents. Identify slow queries and optimize with indexes. Use profiler in development and staging.",
    difficulty: "Medium",
    roleTags: ["Full Stack Developer", "MERN Developer", "Database Administrator"],
    subjectTags: ["MongoDB", "Database", "Monitoring"]
  },
  {
    id: "express-1",
    question: "Explain middleware and the types of middleware in Express.",
    answer: "Middleware functions process requests/responses. Types: (1) Application middleware - app.use(middleware), (2) Router middleware - router.use(middleware), (3) Error handling middleware - has 4 parameters (err, req, res, next), (4) Built-in middleware - express.json(), express.static(), (5) Third-party middleware - cors, helmet, morgan. Middleware executes in order. Call next() to pass to next middleware. Can modify req/res objects.",
    difficulty: "Easy",
    roleTags: ["Backend Developer", "Full Stack Developer", "MERN Developer"],
    subjectTags: ["Express", "Backend", "Middleware"]
  },
  {
    id: "express-2",
    question: "How does request and response flow in Express?",
    answer: "Request flow: Client sends HTTP request → Express server receives → Routers match request → Middleware executes in order → Route handler executes → Response sends back. Response flow: Route handler processes request → Creates response object → Sends with res.send()/res.json()/res.redirect() → Express sends to client. Middleware can modify request/response. Call res.send() only once per request. If not sent, request hangs.",
    difficulty: "Easy",
    roleTags: ["Backend Developer", "Full Stack Developer", "MERN Developer"],
    subjectTags: ["Express", "Backend", "Request/Response"]
  },
  {
    id: "express-3",
    question: "What is the use of next() in Express?",
    answer: "next() is a function that passes control to the next middleware function. Call next() to continue execution. If not called, request gets stuck. Used in all middleware except final route handlers. Error middleware: next(err) passes errors to error handler. Skip middleware: call next() to continue. next() enables middleware chaining and modular code organization.",
    difficulty: "Easy",
    roleTags: ["Backend Developer", "Full Stack Developer", "MERN Developer"],
    subjectTags: ["Express", "Backend", "Middleware"]
  },
  {
    id: "express-4",
    question: "How do you implement global error handling?",
    answer: "Create error middleware with 4 parameters: app.use((err, req, res, next) => {}). Place after all other middleware and routes. Can log errors, format error responses, distinguish between error types. Example: if (err instanceof ValidationError) res.status(400).json(err). Catch async errors with try-catch or async error wrapper. Send consistent error responses with status code and message. Enable centralized error management.",
    difficulty: "Medium",
    roleTags: ["Backend Developer", "Full Stack Developer", "MERN Developer"],
    subjectTags: ["Express", "Backend", "Error Handling"]
  },
  {
    id: "express-5",
    question: "How do you structure a scalable Express application?",
    answer: "Structure: (1) Separate routes, controllers, models, middleware, (2) Use services for business logic, (3) Use config for environment variables, (4) Use utils for helpers, (5) Use constants for fixed values, (6) Use validators for input validation, (7) Use error middleware, (8) Use logging middleware, (9) Use API versioning (/api/v1, /api/v2), (10) Use dependency injection. Benefits: maintainability, testability, reusability. Example structure: /routes, /controllers, /services, /models, /middleware, /config, /utils.",
    difficulty: "Medium",
    roleTags: ["Backend Developer", "Full Stack Developer", "Senior Developer"],
    subjectTags: ["Express", "Backend", "Architecture"]
  },
  {
    id: "express-6",
    question: "How do you secure an Express API (rate limiting, headers)?",
    answer: "Security measures: (1) Use helmet middleware for headers, (2) Rate limiting with express-rate-limit, (3) Input validation, (4) CORS configuration, (5) HTTPS/TLS encryption, (6) JWT authentication, (7) Sanitize inputs (xss-clean), (8) NoSQL injection prevention, (9) CSRF tokens, (10) Environment variables for secrets. Example: npm install helmet cors express-rate-limit. Apply helmet(), cors(), rate limiter as middleware.",
    difficulty: "Medium",
    roleTags: ["Backend Developer", "Full Stack Developer", "Security Engineer"],
    subjectTags: ["Express", "Backend", "Security"]
  },
  {
    id: "express-7",
    question: "Explain route parameter vs. query parameter.",
    answer: "Route parameters: Part of URL path, required, example: /users/:id. Access with req.params.id. Used for resource identification. Query parameters: Appended after ?, optional, example: /users?page=1&limit=10. Access with req.query. Used for filtering, sorting, pagination. Route params identify resource, query params filter/modify results. Both commonly used in REST APIs.",
    difficulty: "Easy",
    roleTags: ["Backend Developer", "Full Stack Developer", "MERN Developer"],
    subjectTags: ["Express", "Backend", "Routing"]
  },
  {
    id: "express-8",
    question: "What's the role of CORS in Express and how to configure it?",
    answer: "CORS (Cross-Origin Resource Sharing) allows requests from different domains. Without CORS, browsers block requests from different origins (security). Configure with npm install cors and app.use(cors()). Allow specific origins: cors({origin: 'http://localhost:3000'}). Allow specific methods: cors({methods: ['GET', 'POST']}). Allow credentials: cors({credentials: true}). Essential for frontend-backend communication on different domains.",
    difficulty: "Easy",
    roleTags: ["Backend Developer", "Full Stack Developer", "MERN Developer"],
    subjectTags: ["Express", "Backend", "CORS"]
  },
  {
    id: "express-9",
    question: "How do you handle file uploads?",
    answer: "Use multer middleware: npm install multer. Configure: const multer = require('multer'); const upload = multer({dest: 'uploads/'}). Handle uploads: app.post('/upload', upload.single('file'), (req, res) => {}). req.file contains filename, size, mimetype. Handle multiple: upload.array('files'). Validate file types, size limits. Store on disk or cloud storage (S3, Firebase). Delete files when needed.",
    difficulty: "Easy",
    roleTags: ["Backend Developer", "Full Stack Developer", "MERN Developer"],
    subjectTags: ["Express", "Backend", "File Upload"]
  },
  {
    id: "express-10",
    question: "How would you implement logging in Express?",
    answer: "Use morgan for HTTP logging: npm install morgan. app.use(morgan('combined')). Logs request method, URL, status, response time. Use winston for application logging: npm install winston. Configure logger for different levels: info, error, warn, debug. Log to files and console. Example: logger.info('User logged in'). Good practice: log requests, errors, database operations, important events. Helps debugging and monitoring.",
    difficulty: "Easy",
    roleTags: ["Backend Developer", "Full Stack Developer"],
    subjectTags: ["Express", "Backend", "Logging"]
  },
  {
    id: "express-11",
    question: "What is the use of express-validator?",
    answer: "express-validator validates and sanitizes request data. npm install express-validator. Validate: body('email').isEmail(). Sanitize: body('email').trim().normalizeEmail(). Combine: body('email').trim().isEmail(). Chain validators: body('password').isLength({min: 8}). Access errors: validationResult(req). Middleware pattern: app.post('/register', body('email').isEmail(), (req, res) => {}). Centralize validation logic. Prevent invalid data reaching database.",
    difficulty: "Easy",
    roleTags: ["Backend Developer", "Full Stack Developer", "MERN Developer"],
    subjectTags: ["Express", "Backend", "Validation"]
  },
  {
    id: "express-12",
    question: "How do you prevent SQL/NoSQL injection in Express?",
    answer: "Prevention: (1) Use parameterized queries (mongoose automatically does this), (2) Input validation with express-validator, (3) Sanitize inputs, (4) Use ORMs/ODMs, (5) Never concatenate user input in queries, (6) Use environment variables for database credentials. Example wrong: User.find({name: userInput}). Right: body('name').trim().escape(). For MongoDB: always validate types, use schema validation. Regular expressions can also prevent injection when properly formed.",
    difficulty: "Medium",
    roleTags: ["Backend Developer", "Full Stack Developer", "Security Engineer"],
    subjectTags: ["Express", "Backend", "Security"]
  },
  {
    id: "express-13",
    question: "What is Helmet and how does it help with security?",
    answer: "Helmet sets various HTTP headers for security. npm install helmet. app.use(helmet()). Protects against: XSS attacks, clickjacking, MIME type sniffing, content security policy violations. Sets headers: X-Frame-Options, X-Content-Type-Options, Content-Security-Policy, etc. Configurable: helmet({frameguard: {action: 'deny'}}). Recommended for all Express apps. Zero configuration protection against common vulnerabilities.",
    difficulty: "Easy",
    roleTags: ["Backend Developer", "Full Stack Developer", "Security Engineer"],
    subjectTags: ["Express", "Backend", "Security"]
  },
  {
    id: "express-14",
    question: "How do you handle role-based authorization in Express?",
    answer: "Implement middleware that checks user roles: const authorize = (roles) => (req, res, next) => { if (roles.includes(req.user.role)) next(); else res.status(403).json({error: 'Unauthorized'}) }. Use with routes: app.delete('/users/:id', authorize(['admin']), deleteUser). Store roles in JWT or database. Verify authentication first, then authorization. Can have multiple roles per user. Centralize permission logic.",
    difficulty: "Medium",
    roleTags: ["Backend Developer", "Full Stack Developer", "Senior Developer"],
    subjectTags: ["Express", "Backend", "Authorization"]
  },
  {
    id: "express-15",
    question: "What are virtual routes and when are they useful?",
    answer: "Virtual routes are not real routes but aliases mapped to real routes. Define virtual routes in middleware. Useful for: backwards compatibility when changing route paths, creating friendly URLs while keeping old ones working, SEO aliases. Example: app.get('/old-path', (req, res) => res.redirect('/new-path')). Can redirect permanently (301) or temporarily (302). Maintain multiple access points to same resource.",
    difficulty: "Medium",
    roleTags: ["Backend Developer", "Full Stack Developer"],
    subjectTags: ["Express", "Backend", "Routing"]
  },
  {
    id: "express-16",
    question: "Difference between synchronous and asynchronous middleware.",
    answer: "Synchronous middleware: Completes immediately, synchronously calls next(). Example: checking headers. Asynchronous middleware: Contains async operations (database, API calls). Use async/await or promises. Example: const middleware = async (req, res, next) => { const user = await findUser(req.id); req.user = user; next(); }. Express handles both automatically. Important: Always handle errors in async middleware with try-catch.",
    difficulty: "Medium",
    roleTags: ["Backend Developer", "Full Stack Developer", "MERN Developer"],
    subjectTags: ["Express", "Backend", "Async"]
  },
  {
    id: "express-17",
    question: "How do you optimize performance in Express apps?",
    answer: "Optimization: (1) Use caching (Redis, in-memory), (2) Implement compression middleware, (3) Use CDN for static files, (4) Database query optimization, (5) Connection pooling, (6) Load balancing, (7) Pagination for large results, (8) Use clustering for multiple cores, (9) Optimize middleware order, (10) Monitor with APM tools. npm install compression. Measure before optimizing with profiling tools.",
    difficulty: "Medium",
    roleTags: ["Backend Developer", "Full Stack Developer", "Performance Engineer"],
    subjectTags: ["Express", "Backend", "Performance"]
  },
  {
    id: "express-18",
    question: "What is a proxy in Express and how to set it?",
    answer: "Proxy forwards requests from Express to another server. Use http-proxy-middleware: npm install http-proxy-middleware. Create proxy: const {createProxyMiddleware} = require('http-proxy-middleware'); app.use('/api', createProxyMiddleware({target: 'http://backend.com', changeOrigin: true})). Routes /api/* to backend server. Useful for: connecting multiple services, microservices communication, development environments. Preserve request headers with changeOrigin: true.",
    difficulty: "Medium",
    roleTags: ["Backend Developer", "Full Stack Developer"],
    subjectTags: ["Express", "Backend", "Proxy"]
  },
  {
    id: "express-19",
    question: "What is the use of app.locals and res.locals?",
    answer: "app.locals: Global variables accessible in all templates and middleware. Used for app-wide configuration. Example: app.locals.title = 'My App'. res.locals: Request-specific variables for templates. Scoped to single request. Example: res.locals.user = req.user. Used for template rendering with data. Persist for request lifetime. Clean separation between request and app data.",
    difficulty: "Easy",
    roleTags: ["Backend Developer", "Full Stack Developer"],
    subjectTags: ["Express", "Backend", "Locals"]
  },
  {
    id: "express-20",
    question: "How can you implement request tracing in Express?",
    answer: "Request tracing tracks requests across systems for debugging. Generate unique request ID: app.use((req, res, next) => { req.id = uuid.v4(); next(); }). Add to logs: logger.info({requestId: req.id, message: 'Request received'}). Send in responses: res.set('X-Request-ID', req.id). Pass to downstream services. Aggregate logs by request ID. Tools: OpenTelemetry, Jaeger, Zipkin. Enables end-to-end request tracking.",
    difficulty: "Hard",
    roleTags: ["Backend Developer", "Full Stack Developer", "Senior Developer"],
    subjectTags: ["Express", "Backend", "Monitoring"]
  },
  {
    id: "node-1",
    question: "What is the event loop in Node.js and how does it work?",
    answer: "Event loop is Node's mechanism for handling async operations. Single-threaded but appears concurrent through callbacks. Phases: (1) timers - execute setTimeout/setInterval callbacks, (2) pending callbacks - deferred I/O callbacks, (3) idle, prepare, (4) poll - wait for I/O, (5) check - setImmediate callbacks, (6) close callbacks. Loop continuously checks for pending work. When one phase completes, moves to next. Essential for understanding Node's async behavior.",
    difficulty: "Hard",
    roleTags: ["Backend Developer", "Full Stack Developer", "Node.js Developer"],
    subjectTags: ["Node.js", "Event Loop", "Async"]
  },
  {
    id: "node-2",
    question: "Explain the difference between process.nextTick() and setImmediate().",
    answer: "process.nextTick(): Executes callback in current phase before moving to next phase. Higher priority. Executes before I/O operations. setImmediate(): Executes callback in check phase (after poll phase). Lower priority. Executes after I/O. Order: process.nextTick() callbacks → regular code → setImmediate() callbacks. Use nextTick for critical operations, setImmediate for less critical work.",
    difficulty: "Hard",
    roleTags: ["Backend Developer", "Full Stack Developer", "Node.js Developer"],
    subjectTags: ["Node.js", "Event Loop", "Async"]
  },
  {
    id: "node-3",
    question: "How does Node.js handle asynchronous I/O?",
    answer: "Node.js uses libuv library for async I/O. Non-blocking I/O: requests don't block execution. Single thread processes requests. Callbacks executed when I/O completes. Libuv thread pool (default 4 threads) handles blocking operations. Event loop coordinates everything. Example: fs.readFile() returns immediately, callback executes when file read. Enables handling thousands of concurrent connections.",
    difficulty: "Medium",
    roleTags: ["Backend Developer", "Full Stack Developer", "Node.js Developer"],
    subjectTags: ["Node.js", "Async I/O"]
  },
  {
    id: "node-4",
    question: "What are streams and how do you use them?",
    answer: "Streams process large data in chunks instead of loading all into memory. Types: Readable, Writable, Duplex (both), Transform. Example: fs.createReadStream('file.txt'). Pipe data: readStream.pipe(writeStream). Chunks processed sequentially. Good for: large files, real-time data, memory efficiency. Events: 'data', 'end', 'error'. Enables processing multi-GB files efficiently.",
    difficulty: "Medium",
    roleTags: ["Backend Developer", "Full Stack Developer", "Node.js Developer"],
    subjectTags: ["Node.js", "Streams"]
  },
  {
    id: "node-5",
    question: "How does clustering work in Node.js?",
    answer: "Clustering creates multiple worker processes using all CPU cores. Master process spawns workers: const cluster = require('cluster'); cluster.fork(). Each worker runs independently. Master distributes requests among workers using round-robin. Increase throughput and availability. Handles multiple concurrent requests in parallel. Workers can crash without stopping master. Essential for production servers.",
    difficulty: "Medium",
    roleTags: ["Backend Developer", "Full Stack Developer", "Senior Developer"],
    subjectTags: ["Node.js", "Clustering", "Performance"]
  },
  {
    id: "node-6",
    question: "Explain how you'd implement a caching layer in Node.",
    answer: "Caching stores frequently accessed data for quick retrieval. In-memory: cache = new Map(). Redis: distributed cache. Use before database queries. Example: if (cache.has(key)) return cache.get(key). Benefits: reduced database load, faster responses. Invalidate cache on data updates. Strategies: LRU eviction, TTL expiration. Redis preferred for production: npm install redis. Enables significant performance improvements.",
    difficulty: "Medium",
    roleTags: ["Backend Developer", "Full Stack Developer", "Performance Engineer"],
    subjectTags: ["Node.js", "Caching"]
  },
  {
    id: "node-7",
    question: "How do you handle large file uploads efficiently?",
    answer: "Efficient upload handling: (1) Stream uploads instead of loading all in memory, (2) Use multipart form data, (3) Implement progress tracking, (4) Chunk uploads for large files, (5) Resume capability for interrupted uploads, (6) Validate file types/sizes, (7) Store temporarily then move. Use streaming: request.pipe(file). Monitor: data, progress, error events. Example: tus.js for resumable uploads. Prevents memory overflow.",
    difficulty: "Medium",
    roleTags: ["Backend Developer", "Full Stack Developer", "MERN Developer"],
    subjectTags: ["Node.js", "File Upload", "Streams"]
  },
  {
    id: "node-8",
    question: "What are child processes and how are they used?",
    answer: "Child processes are spawned Node processes. Types: spawn(), fork(), exec(), execFile(). spawn(): Large data streaming. fork(): Run separate Node script. exec(): Run shell commands. execFile(): Execute programs. Use for: CPU-intensive work, background tasks, running other programs. Example: const child = require('child_process').fork('worker.js'). Communicate via messages. Prevents blocking main thread.",
    difficulty: "Medium",
    roleTags: ["Backend Developer", "Full Stack Developer", "Node.js Developer"],
    subjectTags: ["Node.js", "Child Processes"]
  },
  {
    id: "node-9",
    question: "What is the role of buffers in Node.js?",
    answer: "Buffers represent fixed-length sequences of bytes. Handle binary data. Created: Buffer.alloc(size), Buffer.from(string). Memory allocated outside V8 heap. Used for: file I/O, network communication, crypto operations. Encoding: UTF-8, ASCII, hex, base64. Example: Buffer.from('hello', 'utf8'). Convert: buffer.toString('utf8'). Efficient binary data handling.",
    difficulty: "Easy",
    roleTags: ["Backend Developer", "Node.js Developer"],
    subjectTags: ["Node.js", "Buffers"]
  },
  {
    id: "node-10",
    question: "How do you monitor and debug Node.js performance?",
    answer: "Tools: (1) Chrome DevTools - node --inspect app.js, (2) Clinic.js - profiling and diagnostics, (3) APM - New Relic, Datadog, (4) Profiling - node --prof, (5) Flamegraphs - visualize performance, (6) Memory leaks - autocannon, clinic flame. Monitor: CPU, memory, event loop lag, GC pauses. Use: console.time(), process.cpuUsage(). Enable production monitoring for reliability.",
    difficulty: "Hard",
    roleTags: ["Backend Developer", "Full Stack Developer", "Senior Developer"],
    subjectTags: ["Node.js", "Debugging", "Performance"]
  },
  {
    id: "node-11",
    question: "What are worker threads and when would you use them?",
    answer: "Worker threads run JavaScript in parallel with other threads. const {Worker} = require('worker_threads'). Useful for: CPU-intensive computations, heavy processing without blocking main thread. Each worker has its own V8 instance. Shared memory with SharedArrayBuffer for performance. Communication via message passing. More than clustering for parallel computation. Less overhead than child processes.",
    difficulty: "Hard",
    roleTags: ["Backend Developer", "Full Stack Developer", "Senior Developer"],
    subjectTags: ["Node.js", "Worker Threads"]
  },
  {
    id: "node-12",
    question: "Explain how you'd secure a Node.js application.",
    answer: "Security measures: (1) Use HTTPS/TLS, (2) Helmet middleware, (3) Sanitize inputs, (4) Validate inputs with joi/express-validator, (5) Use environment variables, (6) Implement rate limiting, (7) CORS configuration, (8) Authentication/authorization, (9) SQL/NoSQL injection prevention, (10) Regular dependency updates, (11) Security headers, (12) Logging and monitoring. npm audit checks for vulnerabilities.",
    difficulty: "Medium",
    roleTags: ["Backend Developer", "Full Stack Developer", "Security Engineer"],
    subjectTags: ["Node.js", "Security"]
  },
  {
    id: "node-13",
    question: "How do you manage environment variables securely?",
    answer: "Use .env files with dotenv: npm install dotenv. Load: require('dotenv').config(). Store secrets: DATABASE_URL, API_KEYS, JWT_SECRET. Never commit .env to git - add to .gitignore. Use environment-specific configs (dev, staging, prod). Different values for each environment. Never hardcode secrets. In production, use platform secrets management (AWS Secrets Manager, Azure Key Vault). Rotate secrets regularly.",
    difficulty: "Easy",
    roleTags: ["Backend Developer", "Full Stack Developer", "DevOps Engineer"],
    subjectTags: ["Node.js", "Security", "Configuration"]
  },
  {
    id: "node-14",
    question: "What's the difference between CommonJS and ES modules?",
    answer: "CommonJS: require(), module.exports. Synchronous. Node.js default. require('module'). ES6 modules: import/export. Asynchronous. Modern standard. import Module from 'module'. .mjs extension for ES modules. CommonJS: require('lodash'). ES6: import lodash from 'lodash'. Can use both if configured. ES6 becoming standard. Mix requires careful configuration.",
    difficulty: "Easy",
    roleTags: ["Backend Developer", "Full Stack Developer", "Node.js Developer"],
    subjectTags: ["Node.js", "Modules"]
  },
  {
    id: "node-15",
    question: "How do you handle rate limiting in Node.js?",
    answer: "Rate limiting prevents abuse by limiting requests per time period. Express: npm install express-rate-limit. app.use(rateLimit({windowMs: 15*60*1000, max: 100})). Limits 100 requests per 15 minutes. Store in memory or Redis for distributed apps. Different limits for different routes. Return 429 Too Many Requests. Users identified by IP or user ID.",
    difficulty: "Easy",
    roleTags: ["Backend Developer", "Full Stack Developer", "Security Engineer"],
    subjectTags: ["Node.js", "Security", "Rate Limiting"]
  },
  {
    id: "node-16",
    question: "How do you implement JWT authentication in Node.js?",
    answer: "JWT (JSON Web Tokens) for stateless authentication. npm install jsonwebtoken. Create: jwt.sign({userId: user.id}, SECRET, {expiresIn: '1h'}). Verify: jwt.verify(token, SECRET). Store token in client (localStorage, cookie). Send with Authorization header. Server verifies on each request. Stateless - no session storage. If token exposed, risk until expiration. Use HTTPS to protect tokens.",
    difficulty: "Medium",
    roleTags: ["Backend Developer", "Full Stack Developer", "MERN Developer"],
    subjectTags: ["Node.js", "Authentication", "JWT"]
  },
  {
    id: "node-17",
    question: "How does dependency injection work in Node?",
    answer: "Dependency injection passes dependencies to functions/classes instead of requiring them. Reduces coupling, improves testability. Example: function userService(database) { return {getUser: () => database.query()} }. Or constructor injection in classes. Benefits: swap implementations for testing, easy to change dependencies. Frameworks: Express doesn't require it, but good practice. Manual or library (awilix, tsyringe).",
    difficulty: "Hard",
    roleTags: ["Backend Developer", "Full Stack Developer", "Senior Developer"],
    subjectTags: ["Node.js", "Architecture", "Design Patterns"]
  },
  {
    id: "node-18",
    question: "What is the role of fs/promises in Node?",
    answer: "fs/promises provides promise-based file operations. Better than callbacks. Example: const fs = require('fs').promises; const data = await fs.readFile('file.txt', 'utf8'). No callback hell. Works with async/await. Returns promises. Methods: readFile, writeFile, mkdir, rmdir, unlink, etc. Cleaner error handling with try-catch. Modern alternative to fs.readFile with callbacks.",
    difficulty: "Easy",
    roleTags: ["Backend Developer", "Full Stack Developer", "Node.js Developer"],
    subjectTags: ["Node.js", "File System", "Promises"]
  },
  {
    id: "node-19",
    question: "How can you prevent memory leaks?",
    answer: "Memory leak causes: (1) Circular references, (2) Detached DOM nodes (browser), (3) Unclosed connections, (4) Global variables, (5) Timer callbacks not cleaned. Prevention: (1) Remove event listeners, (2) Clear timers with clearTimeout/clearInterval, (3) Close connections, (4) Avoid globals, (5) Use weak references when appropriate, (6) Profile with --inspect. Monitor heap size. Garbage collection enables most cleanup.",
    difficulty: "Hard",
    roleTags: ["Backend Developer", "Full Stack Developer", "Senior Developer"],
    subjectTags: ["Node.js", "Memory", "Performance"]
  },
  {
    id: "node-20",
    question: "How would you implement logging and metrics?",
    answer: "Logging: Use winston, pino, or bunyan. Log levels: error, warn, info, debug, trace. Structured logging for parsing. Metrics: Use Prometheus, Datadog, New Relic. Track: response times, error rates, throughput, resource usage. Dashboards for visualization. Alerts for anomalies. ELK stack: Elasticsearch, Logstash, Kibana for centralized logging. Correlation IDs for tracing requests.",
    difficulty: "Medium",
    roleTags: ["Backend Developer", "Full Stack Developer", "DevOps Engineer"],
    subjectTags: ["Node.js", "Logging", "Monitoring"]
  },
  {
    id: "devops-1",
    question: "How would you design a scalable MERN-based e-commerce platform?",
    answer: "Architecture: Frontend (React) on CDN, API (Express/Node) auto-scaled behind load balancer, Database (MongoDB) with replication/sharding, Cache layer (Redis), Message queue (RabbitMQ/Kafka). Components: Product service, Order service, User service, Payment service (with webhooks). Storage: S3 for images. Search: Elasticsearch. Real-time: WebSockets. Monitoring: APM, logging. Security: JWT, HTTPS, rate limiting. Scalability through microservices.",
    difficulty: "Hard",
    roleTags: ["Full Stack Developer", "Senior Developer", "Solutions Architect"],
    subjectTags: ["System Design", "Architecture", "Scalability"]
  },
  {
    id: "devops-2",
    question: "How do you deploy a MERN app on cloud platforms (e.g., Vercel, Heroku, AWS)?",
    answer: "Vercel: Deploy frontend with git integration. Vercel functions for serverless backend. Heroku: Deploy with git push heroku main. npm run build first. AWS: EC2 for servers, S3 for storage, CloudFront for CDN, RDS/DocumentDB for database. Docker containerization recommended. Environment variables in platform settings. Continuous deployment pipelines. Database migration before deployment.",
    difficulty: "Medium",
    roleTags: ["Full Stack Developer", "DevOps Engineer"],
    subjectTags: ["DevOps", "Deployment", "Cloud"]
  },
  {
    id: "devops-3",
    question: "What is CI/CD and how would you implement it for a MERN app?",
    answer: "CI/CD automates testing and deployment. Tools: GitHub Actions, GitLab CI, Jenkins, CircleCI. Pipeline: (1) Trigger on code push, (2) Install dependencies, (3) Run tests, (4) Build app, (5) Deploy if tests pass. Example: GitHub Actions workflow - run npm test, npm run build, deploy to Vercel. Stages: test → staging → production. Automated quality checks. Fast feedback.",
    difficulty: "Medium",
    roleTags: ["Full Stack Developer", "DevOps Engineer"],
    subjectTags: ["DevOps", "CI/CD", "Automation"]
  },
  {
    id: "devops-4",
    question: "How do you manage environment configurations for different environments?",
    answer: "Use .env files for dev, staging, production. Use environment variables for secrets. CI/CD secrets management: GitHub Secrets, GitLab CI Variables. Config management tools: Ansible, Terraform. Kubernetes ConfigMaps for containerized apps. Different configs per environment: API URLs, database connections, logging levels. Never commit secrets. Rotate credentials regularly.",
    difficulty: "Medium",
    roleTags: ["Full Stack Developer", "DevOps Engineer"],
    subjectTags: ["DevOps", "Configuration Management"]
  },
  {
    id: "devops-5",
    question: "What's your approach to logging and monitoring in production?",
    answer: "Centralized logging: ELK stack, Datadog, Splunk. Collect logs from all services. Searchable and parseable. Metrics: CPU, memory, requests, errors, response times. Dashboards for visualization. Alerts for anomalies. Tracing: correlation IDs for request tracking. APM tools: New Relic, Datadog. Health checks. Regular log analysis for insights.",
    difficulty: "Medium",
    roleTags: ["Full Stack Developer", "DevOps Engineer"],
    subjectTags: ["DevOps", "Monitoring", "Logging"]
  },
  {
    id: "devops-6",
    question: "How would you implement role-based access control (RBAC)?",
    answer: "RBAC controls who can do what. Roles: admin, user, moderator. Permissions: create, read, update, delete. Database schema: users → roles → permissions. Check role in middleware before executing action. Example: authorize(['admin']). Fine-grained permissions: resource-based (delete own post), attribute-based (delete posts created in last hour). Centralized permission checks.",
    difficulty: "Medium",
    roleTags: ["Full Stack Developer", "Backend Developer", "Security Engineer"],
    subjectTags: ["DevOps", "Security", "Authorization"]
  },
  {
    id: "devops-7",
    question: "How do you ensure your REST APIs are RESTful?",
    answer: "RESTful principles: (1) Use correct HTTP methods - GET read, POST create, PUT update, DELETE delete, (2) Use status codes correctly - 200 OK, 201 Created, 400 Bad Request, 404 Not Found, 500 Server Error, (3) Stateless requests, (4) Client-server separation, (5) Resource-oriented URLs: /users, /users/123, not /getUser, (6) Use content negotiation, (7) Consistency. API versioning: /api/v1/, /api/v2/.",
    difficulty: "Medium",
    roleTags: ["Backend Developer", "Full Stack Developer"],
    subjectTags: ["DevOps", "API Design", "REST"]
  },
  {
    id: "devops-8",
    question: "What is the difference between monolithic and microservice architectures?",
    answer: "Monolithic: Single codebase, all features together. Deployed as one unit. Easier to develop initially. Harder to scale. Technology locked. Microservices: Multiple small services, each with own codebase. Independent deployment/scaling. Complex communication. Technology flexible. Choose monolithic for startups, microservices for large scalable systems. Hybrid approaches possible.",
    difficulty: "Hard",
    roleTags: ["Senior Developer", "Solutions Architect"],
    subjectTags: ["DevOps", "Architecture"]
  },
  {
    id: "devops-9",
    question: "How would you handle versioning in your APIs?",
    answer: "Versioning strategies: (1) URL path: /api/v1/users, /api/v2/users, (2) Query parameter: /api/users?version=1, (3) Header: Accept: application/vnd.api+json;version=1. Maintain backwards compatibility. Deprecation process: announce, phase out, support new. Old versions sunset after period. Tools: API versioning libraries. Helps clients migrate gradually.",
    difficulty: "Medium",
    roleTags: ["Backend Developer", "Full Stack Developer"],
    subjectTags: ["DevOps", "API Design"]
  },
  {
    id: "devops-10",
    question: "How do you handle scaling a database with growing user base?",
    answer: "Scaling strategies: (1) Vertical scaling - bigger servers, limited by hardware, (2) Horizontal scaling - sharding, distribute data across servers, (3) Read replicas - replicate for read-heavy workloads, (4) Caching layer - Redis, (5) Database optimization - indexes, query tuning, (6) Archive old data. MongoDB sharding, PostgreSQL replication. Monitor growth, plan ahead. Cost-effective scaling.",
    difficulty: "Hard",
    roleTags: ["Full Stack Developer", "Database Administrator", "Senior Developer"],
    subjectTags: ["DevOps", "Database", "Scaling"]
  }
];
