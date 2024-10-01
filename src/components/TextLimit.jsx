const TextLimit = ({ text = "", limit = 100 }) => {
  const isTextLong = text.length > limit;

  return (
    <div className="text-limit">
      <p>
        {isTextLong ? `${text.substring(0, limit)}...` : text}
      </p>
    </div>
  );
};

export default TextLimit;
