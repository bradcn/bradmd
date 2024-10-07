// src/components/TopLoader.tsx
import React, { useEffect, useState } from 'react';

interface TopLoaderProps {
  loading: boolean;
}

const TopLoader: React.FC<TopLoaderProps> = ({ loading }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (loading) {
      setWidth(0); // Reset width when loading starts
      const interval = setInterval(() => {
        setWidth((prevWidth) => {
          if (prevWidth >= 100) {
            clearInterval(interval);
            return 90;
          }
          return prevWidth + 5; // Increase width
        });
      }, 1); // Adjust the speed here

      return () => clearInterval(interval);
    } else {
      setWidth(0); // Reset width when loading ends
    }
  }, [loading]);

  return (
    <div
      className={`fixed top-0 left-0 h-0.5 bg-red-500 transition-all duration-300 ease-in-out`}
      style={{ width: `${width}%`, transform: `translateX(${loading ? 0 : 100}%)` }}
    />
  );
};

export default TopLoader;
