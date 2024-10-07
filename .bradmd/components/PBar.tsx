// src/components/ProgressBar.tsx
import React, { useEffect } from 'react';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

const ProgressBar: React.FC = () => {
  useEffect(() => {
    const startProgress = () => NProgress.start();
    const completeProgress = () => NProgress.done();

    // Listen for route changes (assuming you're using React Router)
    const handleStart = () => startProgress();
    const handleComplete = () => completeProgress();

    // You can also add event listeners for your app's loading states here

    // Simulate starting and completing progress (for demo purposes)
    startProgress();
    setTimeout(() => completeProgress(), 3000); // Simulate loading

    return () => {
      // Clean up on unmount
      completeProgress();
    };
  }, []);

  return null; // No actual UI to render
};

export default ProgressBar;
