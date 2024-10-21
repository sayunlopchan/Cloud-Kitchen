import { FaHeart } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { useState } from "react";

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
    <div
      onClick={onClick}
      className="card relative rounded-2xl shadow-2xl bg-white cursor-pointer"
    >
      {/* image */}
      <div className="img-space">
        <div className="card-img rounded-full border-red-600 border-2 md:border-4 absolute -right-2 -top-5 lg:-top-10 xl:-right-8  overflow-hidden bg-white">
          <img
            src={item.img}
            alt={item.title}
            className="object-cover size-full"
          />
        </div>
      </div>
      {/* image */}



      <div className="px-2">
        {/* title */}
        <h2 className="card-title">
          {item.title}
          {/* <TextLimit text={item.title} limit={20} /> */}
        </h2>
        {/* title */}

        {/* price */}
        {item.discountPercentage ? (
          <div className="max-sm:text-sm max-md:text-lg text-base md:text-lg font-semibold text-secendaryText space-x-1">
            Rs.
            <span className="w-fit relative text-gray-800">
              <span className="red-cross "></span>
              <span className="card-price">
                {item.price}
              </span>
            </span>

            <span className="card-price">{discountedPrice}</span>
          </div>
        ) : (
          <h2 className="card-price font-semibold text-secendaryText">
            Rs.{item.price}
          </h2>
        )}
      </div>

      <div className="flex justify-around items-center w-full absolute bottom-0 py-2">

        {/* star */}
        <span className="ml-2 mt-1 flex items-center justify-center text-gray-700 ">
          <FaStar className="card-star" color="gold" />
          <span className="star-text">{item.rating}</span>
        </span>
        {/* star */}

        <div className="relative">
          <button
            className={`card-btn bg-red-600 text-white
              transition-all duration-500 border rounded-lg
              hover:rounded-xl  ${isPopAnimating ? 'animate-pop' : ''}`}
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

        {/* <span className="transition-all duration-1000 absolute right-0 -top-10 sm:-top-28 md:-top-20 lg:-top-24 mr-2 flex flex-col items-center bg-green-500 ">
          <FaHeart className="size-[15px] sm:size-[1.60rem] lg:size-[1.70rem]" color="red" />
          <p className="text-xs">{item.likes}</p>
        </span> */}
      </div>
    </div>
  );
};

export default Card;
