import React from "react";
import { createRoot } from "react-dom/client"; // Correct import for React 18
import App from "./App"; // Import the main App component
import './styles/styles.css'; // Import global styles
import ErrorBoundary from './ErrorBoundary'; // Import ErrorBoundary component

// Create a root element and render the App component within the ErrorBoundary
const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
