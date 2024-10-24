import { FaHeart } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { useState } from "react";
import TextLimit from "../TextLimit";

const Card = ({ item, handleAddToCart, onClick }) => {
  const discountedPrice = item.discountPercentage
    ? item.price * (1 - item.discountPercentage / 100)
    : item.price;

  const [animations, setAnimations] = useState([]);
  const [clickCount, setClickCount] = useState(0);
  const [isPopAnimating, setIsPopAnimating] = useState(false);

  // Trigger new animation instance
  const triggerCartAnimation = () => {
    const newAnimationKey = Date.now(); // Use timestamp as unique key
    setAnimations((prevAnimations) => [...prevAnimations, newAnimationKey]);

    // Remove animation after 500ms
    setTimeout(() => {
      setAnimations((prevAnimations) => prevAnimations.filter((key) => key !== newAnimationKey));
    }, 500);
  };

  // Function to handle adding item to cart and saving to local storage
  const handleAddToCartAndSave = (item) => {
    handleAddToCart(item); // Call the provided add to cart handler
    saveToLocalStorage(item); // Save the item to local storage
    triggerCartAnimation();
    setClickCount((prevCount) => (prevCount + 1) % 3); // Cycle clickCount between 0, 1, and 2

    // Trigger pop animation
    setIsPopAnimating(true);
    setTimeout(() => {
      setIsPopAnimating(false);
    }, 300); // Duration of the pop animation
  };

  // Save the cart item to local storage
  const saveToLocalStorage = (item) => {
    const existingCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    const itemExists = existingCart.find(cartItem => cartItem.id === item.id);
    if (!itemExists) {
      existingCart.push(item);
    }
    localStorage.setItem("cartItems", JSON.stringify(existingCart));
  };

  // Determine the left position based on the click count
  const getLeftPosition = () => {
    switch (clickCount) {
      case 1:
        return ` 
        left-5 size-5
        sm:left-10 sm:size-7
        lg:left-5 lg:size-8 
        `;
      case 2:
        return `
        left-10 size-6
        sm:left-20 sm:size-7
        lg:left-[80px] lg:size-7 
        `;
      default:
        return `
        left-0 size-5
        sm:size-7
        lg:left-10 lg:size-6 
         `;
    }
  };
  return (
    <div onClick={onClick} className='card-base transition-all duration-300 border border-gray-300 rounded-lg p-2 lg:p-4
          
     shadow-md group'>

      <div className="bg-white rounded-md overflow-hidden">
        <img
          src={item.img}
          alt={item.title}
          className='card-img object-cover rounded-md transition-transform duration-300 group-hover:scale-110'
        />
      </div>


      <h2 className='card-title font-bold lg:text-lg h-14 md:h-10 lg:h-14 2xl:h-20 leading-[20px] pt-1'>
        <TextLimit text={item.title} />
      </h2>


      <div className=' '>
        {item.discountPercentage ? (
          <div>
            <span className='line-through text-red-500'>Rs. {item.price}</span>
            <span className='ml-2'>Rs. {discountedPrice}</span>
          </div>
        ) : (
          <div>Rs. {item.price}</div>
        )}
      </div>


      <div className=' flex justify-between items-center lg:mt-2 relative'>
        <span className="flex items-center">
          <FaStar className="text-yellow-500" />
          <span className="ml-1">{item.rating}</span>
        </span>
        <div className="relative">

          <button
            className={`card-btn text-xs text-white
            transition-all duration-500 border rounded-lg ${isPopAnimating ? 'animate-pop' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              handleAddToCartAndSave(item); // Call the new function
            }}
            aria-label={`Add ${item.title} to cart`}
          >
            Add To Cart
          </button>

          {/* Render multiple instances of the animation */}
          {animations.map((key) => (
            <span key={key} className={`bg-colorRed rounded-full text-white flex justify-center items-center absolute -top-10 ${getLeftPosition()} text-sm lg:text-base animate-jumpscare`}>
              +1
            </span>
          ))}
        </div>

      </div>


    </div>
  );
};

export default Card;
