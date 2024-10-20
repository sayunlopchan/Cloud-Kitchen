import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaPlus, FaMinus } from "react-icons/fa6";
import { GoStarFill } from "react-icons/go";
import { addToCart } from '../../store/cartSlice';
import menuData from '../../assets/Data/menu/alldata';
import { useEffect, useState } from 'react';
import SuggestionCard from '../../components/SuggestionCard';

const Detailpage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [mainImage, setMainImage] = useState(null);
  const [quantityToAdd, setQuantityToAdd] = useState(0);
  const [shake, setShake] = useState(false);
  const [isPopAnimating, setIsPopAnimating] = useState(false);

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

    dispatch(addToCart({ ...product, price: discountedPrice, quantity: quantityToAdd }));
    setQuantityToAdd(0);
    // Trigger pop animation
    setIsPopAnimating(true);
    setTimeout(() => {
      setIsPopAnimating(false);
    }, 300); // Duration of the pop animation
  };

  const handleDecreaseQuantity = () => {
    if (quantityToAdd > 1) {
      setQuantityToAdd(prev => prev - 1);
    } else if (cartItem) {
      setShake(true); // Trigger shake animation

      setTimeout(() => setShake(false), 500);
    }
  };

  const afterDiscount = product.price * (1 - (product.discountPercentage || 0) / 100);

  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };

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
              ) : (
                <h3 className='mt-2 text-lg font-bold'>
                  <span>Rs.</span>
                  <span className='font-semibold'>{product.price}</span>
                </h3>
              )}

              <p className='space-x-2 text-base'>
                <span className='font-semibold text-xl'>Discount:</span>
                <span className='font-bold text-lg'>
                  {product.discountPercentage ? `${product.discountPercentage}%` : 'Not Available'}
                </span>
              </p>
            </div>

            <div className="flex items-center mb-4 ">
              <GoStarFill size={26} className='text-colorOrange' />
              <span className="ml-2 text-lg text-gray-600">
                <span>{product.rating || 'N/A'}</span>
              </span>
            </div>

            <p className="mb-6 h-[100px] overflow-scroll">{product.description}</p>
            <p className='space-x-2 text-lg'>
              <span className='font-semibold'>Cooking Time:</span>
              <span>{product.cookingTime || 'Not Available'}</span>
            </p>

            <div className="mb-6">
              <div className={`bg-slate-200 rounded-3xl flex items-center gap-5 w-fit p-1 mt-5 `}>

                <button
                  className={`p-1 bg-colorRed text-white font-semibold text-2xl rounded-full  ${shake ? 'animate-shake' : ''}`}
                  onClick={handleDecreaseQuantity}
                >
                  <FaMinus />
                </button>
                <span>{quantityToAdd}</span>
                <button
                  className='p-1 bg-colorRed text-white font-semibold text-2xl rounded-full'
                  onClick={() => setQuantityToAdd(prev => prev + 1)}
                >
                  <FaPlus />
                </button>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className={`px-6 py-2 bg-colorRed text-white rounded hover:bg-red-800 transition duration-300 ${isPopAnimating ? 'animate-pop' : ''}`}
            >
              Add to Cart
            </button>
          </div>
          {/* Product Details */}
        </div>
        <div className="px-4 lg:mx-auto py-10 w-full lg:w-[85%] space-y-20">
          <h2 className='font-bold text-lg md:text-3xl'>Suggested For You</h2>
          <div className="flex flex-wrap justify-center">
            <SuggestionCard items={allDishes} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detailpage;
