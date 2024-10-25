import { useEffect, useState } from 'react';
import menuData from '../assets/Data/menu/alldata';
import Card from './Card/Card';

const SuggestionCard = ({ handleAddToCart }) => {
  const [randomSnacks, setRandomSnacks] = useState([]);
  const [loading, setLoading] = useState(true);

  const getRandomSnacks = (menu) => {
    const shuffled = [...menu].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  };

  useEffect(() => {
    setLoading(true);
    const snacks = getRandomSnacks(menuData.snack);
    setRandomSnacks(snacks);
    setLoading(false);
  }, []);

  return (
    <div className='space-y-5 pb-20'>
      <div className='flex justify-center flex-wrap gap-y-10 gap-x-20'>
        {loading ? (
          <p className='text-gray-500 flex justify-center items-center pt-20'>Loading...</p>
        ) : (
          randomSnacks.map((snackItem) => (
            <Card
              key={snackItem.id}
              item={snackItem}
              handleAddToCart={() => handleAddToCart(snackItem, 1, false)} // Disable dialog for SuggestionCard
            />
          ))
        )}
      </div>
    </div>
  );
};

export default SuggestionCard;
