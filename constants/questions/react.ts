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
  }
];
