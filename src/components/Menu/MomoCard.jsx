
import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/cartSlice';
import PropTypes from 'prop-types';

const MomoCard = ({ id, title, img, price, discount, description, rating, likes }) => {
  const dispatch = useDispatch();
  const discountedPrice = price - (price * (discount / 100));

  const handleAddToCart = () => {
    const product = {
      id,
      title,
      img,
      price,
      discount,
      description,
      rating,
      likes,
    };
    console.log('Adding to cart:', product); // Debugging line
    dispatch(addToCart(product));
  };

  return (
    <div className='w-[230px] h-[280px] relative rounded-2xl shadow-2xl'>
      <div className='h-[100px]'>
        <img src={img} alt={title} className='size-[130px] rounded-full border-red-600 border-4 absolute right-0 -top-10' />
      </div>
      <div className='p-2'>
        <h2 className='text-2xl font-bold'>{title}</h2>
        {discount > 0 ? (
          <div>
            <span className='text-2xl font-semibold line-through'>Rs.{price}</span>
            <span className='text-2xl font-semibold ml-2'>Rs.{discountedPrice.toFixed(2)}</span>
          </div>
        ) : (
          <h2 className='text-2xl font-semibold'>Rs.{price}</h2>
        )}
      </div>
      <div className="absolute bottom-2 right-2 m-2">
        <button
          className="bg-red-600 text-white text-lg font-semibold px-5 py-2 transition-all duration-500 border hover:rounded-xl"
          onClick={handleAddToCart}
        >
          Buy now
        </button>
      </div>
    </div>
  );
};

// PropTypes validation
MomoCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  discount: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

export default MomoCard;
