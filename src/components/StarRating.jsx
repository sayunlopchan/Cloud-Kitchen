
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const StarRating = ({ rating, totalStars = 5 }) => {
  // Helper function to render stars
  const renderStars = () => {
    return [...Array(totalStars)].map((_, index) => {
      const starValue = index + 1;
      // Full star
      if (rating >= starValue) {
        return <FaStar size={14} key={index} className="text-yellow-500" />;
      }
      // Half star
      if (rating >= starValue - 0.5) {
        return <FaStarHalfAlt size={14} key={index} className="text-yellow-500" />;
      }
      // Empty star
      return <FaRegStar size={14} key={index} className="text-yellow-500" />;
    });
  };

  return <div className="star-rating flex">{renderStars()}</div>;
};

export default StarRating;
