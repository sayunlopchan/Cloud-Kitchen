// NewDetailpage.js
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaPlus, FaMinus } from "react-icons/fa6";
import { GoStarFill } from "react-icons/go";
import { addToCart, increaseItemQuantity, decreaseItemQuantity } from '../../store/cartSlice';
import menuData from '../../assets/Data/menu/alldata';
import { useEffect, useState } from 'react';
import * as paths from '../../Routes/Path';
import SuggestionCard from '../../components/SuggestionCard';

const Detailpage = () => {
  const nav = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();

  const [mainImage, setMainImage] = useState(null);

  const allDishes = [
    ...menuData.breakfast,
    ...menuData.momo,
    ...menuData.chowmein,
    ...menuData.cheeseball,
    ...menuData.keemaNoodle,
    ...menuData.friedRice,
    ...menuData.salad,
    ...menuData.crispy,
    ...menuData.snack,
    ...menuData.combo,
    ...menuData.other,
    ...menuData.OfferSlideData,
    ...menuData.exclusiveOffer,
  ];

  const product = allDishes.find(item => item.id === id);
  const cart = useSelector(state => state.allCart.cart);
  const cartItem = cart.find(item => item.id === product?.id);

  useEffect(() => {
    if (product) {
      setMainImage(product.img);
    }
  }, [product]);

  if (!product) {
    return <h2>Product not found</h2>;
  }

  const handleAddToCart = () => {
    const discountedPrice = product.discountPercentage
      ? Math.round(product.price * (1 - product.discountPercentage / 100))
      : product.price;

    if (cartItem) {
      dispatch(increaseItemQuantity(product.id));
    } else {
      dispatch(addToCart({ ...product, price: discountedPrice }));
    }
  };

  const handleDecreaseQuantity = () => {
    dispatch(decreaseItemQuantity(product.id));
  };

  const afterDiscount = product.price * (1 - (product.discountPercentage || 0) / 100);
  const isInCart = Boolean(cartItem);

  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };

  // Calculate the number of empty boxes needed
  const numberOfEmptyBoxes = product.imgArr.length < 4 ? 4 - product.imgArr.length : 0;

  return (
    <div className="bg-clay">
      <div className="container mx-auto p-4">
        <div className="flex flex-wrap">
          {/* Product Images */}
          <div className="w-full md:w-1/2 lg:h-[520px] px-4 rounded-lg overflow-hidden">
            <img
              src={mainImage || product.img}
              alt={product.title}
              className='w-full h-[280px] sm:h-[320px] lg:h-[70%] rounded-lg object-contain'
            />
            <div className="flex gap-x-4 py-5 justify-center overflow-x-auto">
              {product.imgArr.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className='size-[100px] cursor-pointer'
                  onClick={() => handleThumbnailClick(img)}
                />
              ))}
              {/* Render empty boxes if imgArr has less than 4 images */}
              {numberOfEmptyBoxes > 0 && Array.from({ length: numberOfEmptyBoxes }).map((_, index) => (
                <div key={index} className='size-[100px] border border-dashed border-gray-400 flex items-center justify-center'>
                  <span>No Image</span>
                </div>
              ))}
            </div>
          </div>
          {/* Product Images */}

          {/* Product Details */}
          <div className="w-full md:w-1/2 md:pt-0">
            <h2 className="text-3xl font-bold ">{product.title}</h2>




            <div className="mb-2">
              {product.discountPercentage ? (
                <p className='relative'>
                  <span className='text-xl font-semibold'>Rs.</span>
                  <span className='px-1 font-semibold text-lg'>
                    {afterDiscount}
                    <span className='relative mx-2'>
                      <span className='border-b-2 border-red-500 w-full absolute top-[10px] right-0'></span>
                      {product.price}
                    </span>
                  </span>
                </p>
              ) : (<h3 className='mt-2 text-lg font-bold'>
                <span>Rs.</span>
                <span className='font-semibold'>{product.price}</span>
              </h3>)}

              <p className='space-x-2 text-base'>
                <span className='font-semibold text-xl'>Discount:</span>
                <span className=' font-bold text-lg'>
                  {product.discountPercentage ? `${product.discountPercentage}%` : 'Not Available'}
                </span>
              </p>
            </div>

            {/* Star Ratings */}
            <div className="flex items-center mb-4 ">
              <GoStarFill size={26} className='text-colorOrange' />
              <span className="ml-2 text-lg text-gray-600">
                <span>{product.rating || 'N/A'}</span>
              </span>
            </div>
            {/* Star Ratings */}

            <p className="mb-6 h-[100px] overflow-scroll">{product.description}</p>
            <p className='space-x-2 text-lg'>
              <span className='font-semibold'>Cooking Time:</span>
              <span>{product.cookingTime || 'Not Available'}</span>
            </p>

            <div className="mb-6">
              <div className='bg-gray-300 rounded-3xl flex items-center gap-5 w-fit p-1 mt-5'>
                <button
                  className='p-1 bg-colorRed text-white font-semibold text-2xl rounded-full'
                  onClick={handleDecreaseQuantity}
                >
                  <FaMinus />
                </button>
                <span>{cartItem ? cartItem.quantity : 0}</span>
                <button
                  className='p-1 bg-colorRed text-white font-semibold text-2xl rounded-full'
                  onClick={handleAddToCart}
                >
                  <FaPlus />
                </button>
              </div>
            </div>

            {/* buttons */}
            <div className='flex gap-2'>
              <button
                onClick={() => nav(paths.PAYMENT_FORM_PAGE)}
                disabled={!isInCart}
                className={`bg-colorRed text-white font-semibold text-base md:text-lg px-3 md:px-8 py-2 ${!isInCart ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                Purchase
              </button>
              <button
                onClick={() => nav(paths.TAKEOUT_FORM_PAGE)}
                disabled={!isInCart}
                className={`bg-black text-white font-semibold text-base md:text-lg px-3 md:px-8 py-2 ${!isInCart ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                Takeout
              </button>
            </div>

          </div>
          {/* Product Details */}
        </div>
      </div>

      {/* Suggestion Section */}
      <div className='space-y-10 pb-20'>
        <h2 className='text-2xl font-semibold text-center py-10'>Best With {product.title}</h2>
        <div className='flex justify-center items-center gap-x-5'>
          <SuggestionCard
            product={product}
            handleAddToCart={handleAddToCart}
            onClick={() => nav(`${paths.DETAIL_PAGE.replace(':id', product.id)}`)}
          />
        </div>
      </div>
      {/* Suggestion Section */}
    </div>
  );
}

export default Detailpage;
