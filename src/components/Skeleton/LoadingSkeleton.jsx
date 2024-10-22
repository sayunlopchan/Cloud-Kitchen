// src/components/LoadingSkeleton.jsx
import React from 'react';

const LoadingSkeleton = () => {
  return (
    <div className="animate-pulse space-y-4 h-screen">
      <div className="h-20 bg-gray-200  animate-pulse rounded"></div>
      <div className="h-10 bg-gray-200  animate-pulse rounded"></div>
      <div className="h-10 bg-gray-200  animate-pulse rounded"></div>
      <div className="h-24 bg-gray-200 animate-pulse rounded"></div>
    </div>
  );
};

export default LoadingSkeleton;
