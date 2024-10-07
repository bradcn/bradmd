// src/App.tsx
import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DynamicMarkdownPage from './utils/dynamicmdpage';
import ProgressBar from './components/PBar';
import TopLoader from './components/TLoader'
import './globals.css';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading process (e.g., fetching data)
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    // Simulate the loading process
    handleStart();
    const timer = setTimeout(() => {
      handleComplete();
    }, 500); // Simulate 3 seconds loading

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <TopLoader loading={loading} /> {/* Add ProgressBar here */}
      <Navbar />
      <Router>
        <Routes>
          {/* Redirect root path to /home to display Home.md */}
          <Route path="/" element={<Navigate to="/home" replace />} />

          {/* Dynamic route for markdown files */}
          <Route path="/:page" element={<DynamicMarkdownPage />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

// Get the root element and assert its type for TypeScript
const rootElement = document.getElementById('app');
if (!rootElement) throw new Error("Root element not found");

const root = ReactDOM.createRoot(rootElement);

// Render the App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
