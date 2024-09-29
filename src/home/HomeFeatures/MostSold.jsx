import { useNavigate } from "react-router-dom";
import PopularDishData from "../../assets/Data/PopularDishData";
import CurveLine from "../../assets/icon/red Curve.svg";
import Arrow from "../../assets/icon/Arrow-next.svg";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cartSlice";
import TextLimit from "../../components/TextLimit";

const MostSold = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    // Calculate the discounted price if applicable
    const discountedPrice = item.discountPercentage
      ? item.price * (1 - item.discountPercentage / 100)
      : item.price;

    dispatch(
      addToCart({
        id: item.id,
        title: item.title,
        price: discountedPrice, // Store the discounted price
        img: item.img,
      })
    );
  };

  return (
    <div className="space-y-32 px-5 lg:px-10 py-10 transition-all duration-1000 bg-[#F0F2FF]">

      {/* Heading */}
      <div className="relative w-fit">
        <h2 className="font-bold text-3xl pl-10">Our Popular Dishes</h2>
        <img
          src={CurveLine}
          alt="CurveLine"
          className="w-[100px] absolute top-10 right-0"
        />
      </div>
      {/* Heading */}

      {/* Dishes - Display only the first 4 */}
      <div className="
      grid grid-cols-2
      md:grid-cols-4
      gap-y-10
      max-sm:gap-y-10
      max-md:gap-y-20
      place-items-center place-content-center 
      ">
        {PopularDishData.slice(0, 4).map((item) => (
          <div
            key={item.id} // Use unique ID as key
            onClick={() => nav(`/product-detail/${item.id}`)}
            className="
              max-sm:w-[160px] max-sm:h-[190px]
              max-md:w-[230px] max-md:h-[280px]
              md:w-[180px] md:h-[240px] 
              lg:w-[230px] lg:h-[280px]
              relative rounded-2xl shadow-xl bg-white cursor-pointer"
          >

            {/* image */}
            <div className="
            max-sm:h-[60px]
            max-md:h-[100px]
            h-[85px]
            md:h-[100px] ">
              <img
                src={item.img}
                alt={item.title}
                className="
                size-[100px]
                max-sm:size-[80px]
                max-md:size-[120px]
                md:size-[115px]
                lg:size-[130px]
                rounded-full border-red-600 border-2 md:border-4 absolute right-0 -top-5 lg:-top-10"
              />
            </div>
            {/* image */}

            <div className="px-2">
              {/* card-title */}
              <h2 className="
              text-lg
              max-sm:text-base
              max-md:text-2xl
              md:text-xl
              lg:text-2xl
              font-semibold
              ">
                <TextLimit text={item.title} limit={18} />
              </h2>
              {/* card-title */}

              {/* card-price */}
              {item.discountPercentage ? (
                <div className="
                max-sm:text-sm
                max-md:text-lg
                text-base
                md:text-lg
                lg:text-2xl
                font-semibold relative text-secendaryText">
                  Rs.
                  <span className="
                  px-[14px]
                  max-sm:px-[13px]
                  max-md:px-[18px]
                  md:px-[18px]
                  lg:px-6
                  top-[9px]
                  max-md:top-[13px]
                  max-sm:top-[9px]
                  md:top-[12px]
                  lg:top-[14px]
                  absolute border-b-2 border-red-500
                  "/>
                  {item.price}
                  <span className="ml-2">
                    {item.price * (1 - item.discountPercentage / 100)}
                  </span>
                </div>
              ) : (
                <h2 className="
                max-sm:text-sm
                max-md:text-lg
                text-base
                md:text-lg
                lg:text-2xl
                font-semibold text-secendaryText">
                  Rs.{item.price}
                </h2>
              )}
            </div>
            {/* card-price */}

            <div className="flex justify-center">
              <button
                className="
                  absolute bottom-2
                  bg-red-600 text-white text-sm lg:text-lg lg:font-semibold max-sm:px-3 px-5 py-2 transition-all duration-500 border hover:rounded-xl "
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
        ))}
      </div>

      <button
        onClick={() => nav("/popular-dishes")}
        className="bg-red-600 px-3 py-2 rounded-tr-2xl rounded-bl-2xl flex items-center justify-center mx-auto text-white font-semibold hover:bg-red-800 transition-all duration-300"
      >
        <span>View All</span>
        <span>
          <img src={Arrow} alt="Arrow" className="w-[60px] h-[15px]" />
        </span>
      </button>
    </div>
  );
};

export default MostSold;
