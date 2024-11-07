import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaPlus, FaMinus } from "react-icons/fa6";
import { GoStarFill } from "react-icons/go";
import { addToCart } from '../../store/cartSlice';
import menuData from '../../assets/Data/menu/alldata';
import { useEffect, useState } from 'react';
import SuggestionCard from '../../components/Card/SuggestionCard';
import Dialog from '../../components/Dialog/Cart_Dialog';

const Detailpage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  // Convert id to a number
  const numericId = parseInt(id, 10);

  const [mainImage, setMainImage] = useState(null);
  const [quantityToAdd, setQuantityToAdd] = useState(0);
  const [shake, setShake] = useState(false);
  const [isPopAnimating, setIsPopAnimating] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogMessage, setDialogMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(true);

  const allDishes = [
    ...menuData.combo1000,
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

  // Find product using numeric ID
  const product = allDishes.find(item => item.id === numericId);
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

  const handleAddToCart = (item, quantity, showDialog = true) => {
    const itemToAdd = item || product;

    if (quantity === 0) {
      if (showDialog) {
        setDialogMessage('Please add at least one item to the cart!');
        setIsSuccess(false);
        setIsDialogOpen(true);
      }
      return;
    }

    const discountedPrice = itemToAdd.discountPercentage
      ? Math.round(itemToAdd.price * (1 - itemToAdd.discountPercentage / 100))
      : itemToAdd.price;

    dispatch(addToCart({ ...itemToAdd, price: discountedPrice, quantity }));
    setQuantityToAdd(0);
    setIsPopAnimating(true);
    setTimeout(() => {
      setIsPopAnimating(false);
    }, 300);

    if (showDialog) {
      setDialogMessage('Item added to cart successfully!');
      setIsSuccess(true);
      setIsDialogOpen(true);
    }
  };

  const handleDecreaseQuantity = () => {
    if (quantityToAdd > 1) {
      setQuantityToAdd(prev => prev - 1);
    } else if (cartItem) {
      setShake(true);
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

      <div className="container mx-auto pt-2 p-4 md:p-0 md:pt-0">
        <div className="flex flex-wrap">

          {/* Product Images */}
          <div className="w-full md:w-1/2 lg:h-[520px]  rounded-lg overflow-hidden p-5">
            <img
              src={mainImage || product.img}
              alt={product.title}
              className='w-full h-[180px] sm:h-[320px] lg:h-[70%] rounded-lg object-contain'
            />
            <div className="flex gap-x-2 lg:gap-x-4 py-2 justify-center overflow-x-scroll w-full  snap-proximity">
              {product.imgArr.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className='size-[50px] lg:size-[100px] cursor-pointer object-cover'
                  onClick={() => handleThumbnailClick(img)}

                />
              ))}
              {numberOfEmptyBoxes > 0 && Array.from({ length: numberOfEmptyBoxes }).map((_, index) => (
                <div key={index} className='size-[50px] lg:size-[100px] border border-dashed border-gray-400 flex items-center justify-center text-xs sm:text-sm md:text-base'>
                  <span>No Image</span>
                </div>
              ))}
            </div>
          </div>

          {/* Product Images */}









          {/* Product Details */}
          <div className="w-full md:w-1/2 lg:pr-10">
            <h2 className="text-2xl lg:text-3xl font-bold ">{product.title}</h2>

            <div className="mb-1">
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
                <h3 className='mt-2 text-lg font-bold text-gray-800'>
                  <span>Rs.</span>
                  <span className='font-semibold'>{product.price}</span>
                </h3>
              )}

              <p className='space-x-2 text-base'>
                <span className='font-semibold text-xl'>Discount:</span>
                <span className='font-bold text-lg text-gray-800'>
                  {product.discountPercentage ? `${product.discountPercentage}%` : 'Not Available'}
                </span>
              </p>
            </div>

            <div className="flex items-center mb-1 ">
              <GoStarFill size={26} className='text-colorOrange' />
              <span className="ml-2 text-lg text-gray-600">
                <span>{product.rating || 'N/A'}</span>
              </span>
            </div>

            <p className="mb-2 h-[100px] overflow-scroll">{product.description}</p>
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
              onClick={() => handleAddToCart(null, quantityToAdd, true)} // Add main product with dialog
              className={`px-6 py-2 bg-colorRed text-white rounded hover:bg-red-800 transition duration-300 ${isPopAnimating ? 'animate-pop' : ''}`}
            >
              Add to Cart
            </button>
          </div>
          {/* Product Details */}
        </div>

        <div className="py-4 mt-5 space-y-10">
          <h2 className='font-bold text-center text-lg md:text-2xl lg:text-3xl '> Suggestion with {product.title} </h2>

          {/* Passing handleAddToCart from Detailpage to SuggestionCard */}
          <SuggestionCard handleAddToCart={handleAddToCart} />
        </div>
      </div>

      {/* Dialog for showing messages */}
      {isDialogOpen && (
        <Dialog
          isOpen={isDialogOpen}
          message={dialogMessage}
          onClose={() => setIsDialogOpen(false)} // Close dialog when clicking outside or on close button
          isSuccess={isSuccess} // Pass success or error state
        />
      )}
    </div>
  );
};

export default Detailpage;
