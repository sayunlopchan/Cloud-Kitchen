// Card.js
import { FaHeart } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import TextLimit from "./TextLimit";

const Card = ({ item, handleAddToCart, onClick }) => {

  const discountedPrice = item.discountPercentage
    ? item.price * (1 - item.discountPercentage / 100)
    : item.price;

  return (
    <div
      onClick={onClick}
      className="max-sm:w-[160px] max-sm:h-[190px] max-md:w-[230px] max-md:h-[280px] md:w-[180px] md:h-[240px] lg:w-[230px] lg:h-[280px] relative rounded-2xl shadow-2xl bg-white cursor-pointer
      "
    >
      {/* image */}
      <div className="max-sm:h-[60px] max-md:h-[100px] h-[85px] md:h-[100px]">
        <img
          src={item.img}
          alt={item.title}
          className="size-[100px] max-sm:size-[80px] max-md:size-[120px] md:size-[115px] lg:size-[130px] rounded-full border-red-600 border-2 md:border-4 absolute -right-5 -top-5 lg:-top-10"
        />
      </div>
      {/* image */}

      <div className="px-2">
        <h2 className="text-lg max-sm:text-base max-md:text-2xl md:text-xl font-semibold pr-4">
          <TextLimit text={item.title} limit={18} />
        </h2>

        {item.discountPercentage ? (
          <div className="max-sm:text-sm max-md:text-lg text-base md:text-lg font-semibold text-secendaryText">
            Rs.
            <span className="w-fit relative text-gray-800">
              <span className="w-full absolute border-b-2  lg:border-b-[3px] border-red-500 top-2  sm:top-[10px]  lg:top-3" >
              </span>
              {item.price}
            </span>

            <span className="ml-1">{discountedPrice}</span>
          </div>
        ) : (
          <h2 className="max-sm:text-sm max-md:text-lg text-base md:text-lg lg:text-2xl font-semibold text-secendaryText">
            Rs.{item.price}
          </h2>
        )}
      </div>

      <div className="flex justify-between w-full absolute bottom-0">

        {/* star */}
        <span className="ml-2 mt-1">
          <FaStar className="size-5 sm:size-[1.625rem] lg:size-[1.75rem]" color="gold" />
        </span>
        {/* star */}

        <button
          className=" bg-red-600 text-white
            text-[10px] sm:text-sm lg:text-base
            px-1 
            sm:px-2 py-2
            transition-all duration-500 border 
            hover:rounded-xl mr-2 mb-3"

          onClick={(e) => {
            e.stopPropagation();
            handleAddToCart(item);
          }}
          aria-label={`Add ${item.title} to cart`}
        >
          Add To Cart
        </button>



        <span className="absolute right-0 -top-16 sm:-top-28 md:-top-20 lg:-top-24 mr-2"><FaHeart className="size-5 sm:size-[1.60rem] lg:size-[1.70rem]" color="red" /></span>

      </div>
    </div>
  );
};



export default Card;
