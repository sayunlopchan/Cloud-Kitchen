const TextLimit = ({ text = "", limit = 100 }) => {
  const isTextLong = text.length > limit;

  return (
    <div className="text-limit">
      <span>
        {isTextLong ? `${text.substring(0, limit)}...` : text}
      </span>
    </div>
  );
};

export default TextLimit;
