import { useNavigate } from 'react-router-dom';
import PopularDishData from '../../assets/Data/PopularDishData';
import CurveLine from '../../assets/icon/red Curve.svg';
import Arrow from '../../assets/icon/Arrow-next.svg';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/cartSlice';

const PopularDishes = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    // Calculate the discounted price if applicable
    const discountedPrice = item.discountPercentage
      ? item.price * (1 - item.discountPercentage / 100)
      : item.price;

    dispatch(addToCart({
      id: item.id,
      title: item.title,
      price: discountedPrice, // Store the discounted price
      img: item.img,
    }));
  };

  return (
    <div className='space-y-32 px-10 py-10 transition-all duration-1000 bg-[#F0F2FF]'>

      {/* Heading */}
      <div className='relative w-fit'>
        <h2 className='font-bold text-3xl pl-10'>Our Popular Dishes</h2>
        <img src={CurveLine} alt="CurveLine" className='w-[100px] absolute top-10 right-0' />
      </div>
      {/* Heading */}

      {/* Dishes - Display only the first 3 */}
      <div className="flex flex-wrap justify-center gap-10 items-center">
        {
          PopularDishData.slice(0, 3).map((item) => (
            <div
              key={item.id} // Use unique ID as key
              onClick={() => nav(`/product-detail/${item.id}`)}
              className='w-[160px] h-[190px] lg:w-[230px] lg:h-[280px] relative rounded-2xl shadow-xl bg-white cursor-pointer'
            >
              <div className='h-[60px] lg:h-[100px] bg-gray-600'>
                <img
                  src={item.img}
                  alt={item.title}
                  className=' size-[80px] lg:size-[130px] rounded-full border-red-600 border-4 absolute right-0 -top-10'
                />
              </div>
              <div className='p-2'>
                <h2 className='text-sm lg:text-2xl font-bold'>{item.title}</h2>
                {item.discountPercentage ? (
                  <div className='text-sm lg:text-2xl font-semibold'>
                    Rs.
                    <span className='line-through'>{item.price}</span>
                    <span className='ml-2'>{item.price * (1 - item.discountPercentage / 100)}</span>
                  </div>
                ) : (
                  <h2 className='text-sm lg:text-2xl font-semibold'>Rs.{item.price}</h2>
                )}
              </div>
              <div className="absolute bottom-2 right-2 m-2">
                <button
                  className="bg-red-600 text-white text-sm lg:text-lg font-semibold px-5 py-2 transition-all duration-500 border hover:rounded-xl"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent click on button from triggering the card click
                    handleAddToCart(item); // Call the add to cart function with the current item
                  }}
                  aria-label={`Add ${item.title} to cart`}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          ))
        }
      </div>

      <button
        onClick={() => nav('/popular-dishes')}
        className='bg-red-600 px-3 py-2 rounded-tr-2xl rounded-bl-2xl flex items-center justify-center mx-auto text-white font-semibold hover:bg-red-800 transition-all duration-300'
      >
        <span>View All</span>
        <span>
          <img src={Arrow} alt="Arrow" className='w-[60px] h-[15px]' />
        </span>
      </button>
    </div>
  );
};

export default PopularDishes;
