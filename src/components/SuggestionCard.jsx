import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import menuData from '../assets/Data/menu/alldata';
import Card from './Card';

const SuggestionCard = ({ product, handleAddToCart, onClick }) => {
  const [randomSnacks, setRandomSnacks] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  // Function to get three unique random snacks from the snacks array
  const getRandomSnacks = () => {
    const uniqueSnacks = new Set();
    while (uniqueSnacks.size < 3 && uniqueSnacks.size < menuData.snack.length) {
      const randomIndex = Math.floor(Math.random() * menuData.snack.length);
      uniqueSnacks.add(menuData.snack[randomIndex]);
    }
    return Array.from(uniqueSnacks);
  };

  useEffect(() => {
    const snacks = getRandomSnacks();
    setRandomSnacks(snacks);
    setLoading(false); // Set loading to false after fetching snacks
  }, []);

  return (
    <div className='space-y-5 pb-20'>
      <div className='flex  justify-center flex-wrap gap-y-10 gap-x-20'>
        {loading ? (
          <div className='flex gap-x-5'>
            <p className='text-gray-500 flex justify-center items-center pt-20'>Loading...</p>
          </div>
        ) : (
          randomSnacks.map((snackItem) => (
            <Card
              key={snackItem.id}
              item={snackItem} // Pass the snack item as a prop
              handleAddToCart={handleAddToCart} // Pass the handleAddToCart function
              onClick={onClick} // Pass the onClick function
            />
          ))
        )}
      </div>
    </div>
  );
};

// Prop types for better type checking
SuggestionCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
  handleAddToCart: PropTypes.func.isRequired, // Ensure to specify that it's required
  onClick: PropTypes.func.isRequired, // Ensure to specify that it's required
};

export default SuggestionCard;
