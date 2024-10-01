// Card.js
import TextLimit from "./TextLimit";
const Card = ({ item, handleAddToCart, onClick }) => {

  const discountedPrice = item.discountPercentage
    ? item.price * (1 - item.discountPercentage / 100)
    : item.price;

  return (
    <div
      onClick={onClick}
      className="max-sm:w-[160px] max-sm:h-[190px] max-md:w-[230px] max-md:h-[280px] md:w-[180px] md:h-[240px] lg:w-[230px] lg:h-[280px] relative rounded-2xl shadow-xl bg-white cursor-pointer"
    >
      <div className="max-sm:h-[60px] max-md:h-[100px] h-[85px] md:h-[100px]">
        <img
          src={item.img}
          alt={item.title}
          className="size-[100px] max-sm:size-[80px] max-md:size-[120px] md:size-[115px] lg:size-[130px] rounded-full border-red-600 border-2 md:border-4 absolute right-0 -top-5 lg:-top-10"
        />
      </div>

      <div className="px-2">
        <h2 className="text-lg max-sm:text-base max-md:text-2xl md:text-xl lg:text-2xl font-semibold">
          <TextLimit text={item.title} limit={18} />
        </h2>

        {item.discountPercentage ? (
          <div className="max-sm:text-sm max-md:text-lg text-base md:text-lg lg:text-2xl font-semibold relative text-secendaryText">
            Rs.
            <span className="px-[14px] max-sm:px-[13px] max-md:px-[18px] md:px-[18px] lg:px-6 top-[9px] max-md:top-[13px] max-sm:top-[9px] md:top-[12px] lg:top-[14px] absolute border-b-2 border-red-500" />
            {item.price}
            <span className="ml-2">{discountedPrice}</span>
          </div>
        ) : (
          <h2 className="max-sm:text-sm max-md:text-lg text-base md:text-lg lg:text-2xl font-semibold text-secendaryText">
            Rs.{item.price}
          </h2>
        )}
      </div>

      <div className="flex justify-center">
        <button
          className="absolute bottom-2 bg-red-600 text-white text-sm lg:text-lg lg:font-semibold max-sm:px-3 px-5 py-2 transition-all duration-500 border hover:rounded-xl"
          onClick={(e) => {
            e.stopPropagation();
            handleAddToCart(item);
          }}
          aria-label={`Add ${item.title} to cart`}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
