import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/cartSlice';



// card data
import PopularDishData from '../../assets/Data/PopularDishData';

// icons
import CurveLine from '../../assets/icon/red Curve.svg';
import Arrow from '../../assets/icon/Arrow-next.svg';




const MostSold = () => {
  const nav = useNavigate();
  const dispatch = useDispatch(); // Initialize useDispatch

  const handleAddToCart = (item) => {
    dispatch(addToCart({
      id: item.id, // Ensure the ID is passed
      title: item.title,
      price: item.discount > 0 ? item.price - item.discount : item.price,
      img: item.img,
    })); // Dispatch the addToCart action with product details
  };

  return (
    <div className='space-y-32 px-10 py-10 transition-all duration-1000 '>
      {/* Heading */}
      <div className='relative w-fit'>
        <h2 className='font-bold text-3xl pl-10'>Most Sold</h2>
        <img src={CurveLine} alt="CurveLine" className='w-[100px] absolute top-10 right-0' />
      </div>

      {/* Dishes - Display only the first 3 */}
      <div className="flex flex-wrap justify-center gap-10 items-center ">
        {
          PopularDishData.slice(0, 3).map((item, idx) => (
            <div
              key={idx}
              onClick={() => nav(`/product-detail/${item.id}`)}
              className='w-[230px] h-[280px] relative rounded-2xl shadow-xl bg-white cursor-pointer'>
              <div className='h-[100px]'>
                <img
                  src={item.img}
                  alt={item.title}
                  className='w-[130px] h-[130px] rounded-full border-red-600 border-4 absolute right-0 -top-10'
                />
              </div>
              <div className='p-2'>
                <h2 className='text-2xl font-bold'>{item.title}</h2>
                {item.discount > 0 ? (
                  <div>
                    <span className='text-2xl font-semibold line-through text-red-600'>Rs.{item.price}</span>
                    <span className='text-2xl font-semibold ml-2'>Rs.{(item.price - item.discount).toFixed(2)}</span>
                  </div>
                ) : (
                  <h2 className='text-2xl font-semibold'>Rs.{item.price}</h2>
                )}
              </div>
              <div className="absolute bottom-2 right-2 m-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddToCart(item);
                  }
                    // Add onClick to dispatch addToCart
                  }
                  className="bg-red-600 text-white text-lg font-semibold px-5 py-2 transition-all duration-500 border hover:rounded-xl"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          ))
        }
      </div>

      <button
        onClick={() => nav('/most-sold')}
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

export default MostSold;
