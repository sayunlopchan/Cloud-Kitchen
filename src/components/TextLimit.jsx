import React, { useEffect, useState } from 'react';

const TextLimit = ({ text = "", limit = 100 }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // Function to check if the screen width is smaller than the lg breakpoint
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1024); // Tailwind's `lg` size is 1024px
    };

    // Initial check
    handleResize();

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isTextLong = text.length > limit;

  return (
    <div className="text-limit">
      <span>
        {isSmallScreen && isTextLong ? `${text.substring(0, limit)}...` : text}
      </span>
    </div>
  );
};

export default TextLimit;
