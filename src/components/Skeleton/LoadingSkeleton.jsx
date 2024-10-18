// src/components/LoadingSkeleton.jsx
import React from 'react';

const LoadingSkeleton = () => {
  return (
    <div className="animate-pulse space-y-4">
      <div className="h-8 bg-gray-200  animate-pulse rounded"></div>
      <div className="h-4 bg-gray-200  animate-pulse rounded"></div>
      <div className="h-4 bg-gray-200  animate-pulse rounded"></div>
      <div className="h-24 bg-gray-200 animate-pulse rounded"></div>
    </div>
  );
};

export default LoadingSkeleton;
