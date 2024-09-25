import { useState } from 'react';
import { IoIosHeart, IoIosHeartEmpty } from 'react-icons/io';

const Heart = ({ initialLikes }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(initialLikes);

  const toggleLike = () => {
    setLiked(!liked);
    setLikes((prevLikes) => (liked ? prevLikes - 1 : prevLikes + 1));
  };

  // Format like count (1k for numbers over 999)
  const formatLikes = (count) => {
    return count > 999 ? (count / 1000).toFixed(1) + 'k' : count;
  };

  return (
    <div>
      <button onClick={toggleLike} className="focus:outline-none flex items-center justify-center space-x-2">
        {liked ? (
          <IoIosHeart color="red" className="transition-colors" size={19} />
        ) : (
          <IoIosHeartEmpty className="transition-colors" size={19} />
        )}
        <span className="text-sm">{formatLikes(likes)}</span>
      </button>
    </div>
  );
};

export default Heart;
