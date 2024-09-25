import { useState } from 'react';

const TextLimit_dym = ({ text, limit = 100 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  // Determine if the text is longer than the limit
  const isTextLong = text.length > limit;

  return (
    <div className="text-limit">
      <p>
        {isExpanded || !isTextLong ? text : `${text.substring(0, limit)}...`}
      </p>
      {isTextLong && (
        <button onClick={toggleText} className="text-blue-500 hover:underline">
          {isExpanded ? 'Show Less' : 'Show More'}
        </button>
      )}
    </div>
  );
};

export default TextLimit_dym;