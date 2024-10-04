import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaHeart, FaPlus, FaMinus } from "react-icons/fa6";
import { GoStarFill } from "react-icons/go";
import { addToCart, increaseItemQuantity, decreaseItemQuantity } from '../../features/cartSlice';
import menuData from '../../assets/Data/menu/alldata';
import { useState } from 'react'; // Import useState

const NewDetailpage = () => {
  const nav = useNavigate();
  const { id } = useParams(); // This should be a UUID
  const dispatch = useDispatch();

  // State to manage the current main image
  const [mainImage, setMainImage] = useState(null);

  // Flattening menuData to find the specific product
  const allDishes = [
    ...menuData.momo,
    ...menuData.friedRice,
    ...menuData.chowmein,
    ...menuData.biryani,
    ...menuData.breakfast,
  ];

  // Find the product using the UUID
  const product = allDishes.find(item => item.id === id); // Changed to use id directly
  const cart = useSelector(state => state.allCart.cart);
  const cartItem = cart.find(item => item.id === product?.id);

  // Set initial main image to the product's main image
  if (!mainImage && product) {
    setMainImage(product.img);
  }

  if (!product) {
    return <h2>Product not found</h2>;
  }

  const handleAddToCart = () => {
    const discountedPrice = product.discountPercentage
      ? Math.round(product.price * (1 - product.discountPercentage / 100))
      : product.price;

    if (cartItem) {
      dispatch(increaseItemQuantity(product.id)); // Use UUID
    } else {
      dispatch(addToCart({ ...product, price: discountedPrice }));
    }
  };

  const handleDecreaseQuantity = () => {
    dispatch(decreaseItemQuantity(product.id)); // Use UUID
  };

  const afterDiscount = product.price * (1 - (product.discountPercentage || 0) / 100);
  const isInCart = Boolean(cartItem);

  // Handle thumbnail click to change main image
  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };

  return (
    <div>
      <div className="bg-gray-100">
        <div className="container mx-auto p-4">
          <div className="flex flex-wrap">
            {/* Product Images */}
            <div className="w-full md:w-1/2 lg:h-[520px] px-4 rounded-lg overflow-hidden">
              <img
                src={mainImage || product.img}
                alt={product.title}
                className='w-full h-[280px] sm:h-[320px] lg:h-[70%] rounded-lg'
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
              </div>
            </div>
            {/* Product Images */}

            {/* Product Details */}
            <div className="w-full md:w-1/2 px-4 md:pt-0">
              <h2 className="text-3xl font-bold mb-2">{product.title}</h2>

              <div className="mb-4">
                {product.discountPercentage && (
                  <p className='relative'>
                    <span className='text-lg font-semibold'>Rs.</span>
                    <span className='pr-3'>
                      {afterDiscount}
                      <span className='relative mx-2'>
                        <span className='border-b-2 border-red-500 w-full absolute top-[10px] right-0'></span>
                        {product.price}
                      </span>
                    </span>
                  </p>
                )}

                <p className='space-x-2 text-base'>
                  <span className='font-semibold text-lg'>Discount:</span>
                  <span className='text-green-500 font-bold'>
                    {product.discountPercentage ? `${product.discountPercentage}%` : 'Not Available'}
                  </span>
                </p>
              </div>

              {/* Star Ratings */}
              <div className="flex items-center mb-4">
                <GoStarFill size={20} />
                <span className="ml-2 text-gray-600">
                  <span>{product.rating || 'N/A'}</span>
                </span>
              </div>
              {/* Star Ratings */}

              <p className="mb-6 h-[100px] overflow-scroll">{product.description}</p>
              <p className='space-x-2 text-lg'>
                <span className='font-semibold'>Cooking Time:</span>
                <span>{product.cookingTime || '30'} min</span>
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
                  onClick={() => nav('/fill-my-form-payment')}
                  disabled={!isInCart}
                  className={`bg-colorRed text-white font-semibold text-base md:text-lg px-3 md:px-8 py-2 ${!isInCart ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  Purchase
                </button>
                <button
                  onClick={() => nav('/fill-my-form-takeout')}
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
      </div>

      {/* Suggestion Section */}
      <div className='space-y-5 pb-20'>
        <h2 className='text-2xl font-semibold text-center'>Best With {product.title}</h2>
        <div className='flex gap-x-5'>
          <div className='w-[260px] h-[300px] bg-white shadow-lg mx-auto'>
            <p className='text-gray-500 flex justify-center items-center pt-20'>No Data for now!</p>
          </div>
        </div>
      </div>
      {/* Suggestion Section */}
    </div>
  );
}

export default NewDetailpage;
