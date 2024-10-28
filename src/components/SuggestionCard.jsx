import { useEffect, useState } from 'react';
import menuData from '../assets/Data/menu/alldata';
import Card from './Card/Card';

import { DETAIL_PAGE } from "../../src/Routes/Path";
import { useNavigate } from 'react-router-dom';



const SuggestionCard = ({ handleAddToCart, onClick }) => {

  const nav = useNavigate()
  const [randomSnacks, setRandomSnacks] = useState([]);
  const [loading, setLoading] = useState(true);

  const getRandomSnacks = (menu) => {
    const shuffled = [...menu].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 4);
  };

  useEffect(() => {
    setLoading(true);
    const snacks = getRandomSnacks(menuData.snack);
    setRandomSnacks(snacks);
    setLoading(false);
  }, []);

  return (
    <div className='space-y-5 pb-20'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-content-center place-items-center gap-2'>
        {loading ? (
          <p className='text-gray-500 flex justify-center items-center pt-20'>Loading...</p>
        ) : (
          randomSnacks.map((snackItem) => (
            <div key={snackItem.id}>
              <Card
                item={snackItem}
                handleAddToCart={() => handleAddToCart(snackItem, 1, false)} // Disable dialog for SuggestionCard
                onClick={() => nav(`${DETAIL_PAGE.replace(':id', snackItem.id)}`)}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SuggestionCard;
