import { useEffect, useState } from "react";
import menuData from '../assets/Data/menu/alldata';
import Card from './Card';

const SuggestionCard = ({ product, handleAddToCart, onClick }) => {
  const [randomSnacks, setRandomSnacks] = useState([]);
  const [loading, setLoading] = useState(true);

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
    setLoading(false);
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
              item={snackItem}
              handleAddToCart={handleAddToCart}
              onClick={onClick}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default SuggestionCard;
