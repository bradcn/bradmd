import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DynamicMarkdownPage from './utils/dynamicmdpage';
import './globals.css';

// Define the types for any props if needed (currently none)
const App: React.FC = () => (
    <>
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