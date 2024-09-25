
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import StarRating from "./StarRating";
import { FaRegSquarePlus } from "react-icons/fa6";
import TextLimit from "./TextLimit";
import Heart from "./Heart";

const ProductCard = () => {
  // Ensure the state path is correct
  const items = useSelector((state) => state.allCart.items);

  const dispatch = useDispatch();

  return (
    <div className="flex gap-5 justify-center flex-wrap">
      {items.map((item) => (
        <div
          key={item.id}
          className="group w-[160px] h-[230px] rounded-lg shadow-lg cursor-pointer">
          <div className="h-[136px] w-full overflow-hidden rounded-t-lg">
            <img
              src={item.img}
              alt={item.title}
              className="h-full w-full object-cover transition-transform duration-1000  group-hover:scale-110"
            />
          </div>
          <div className="p-1">
            <div>
              <span className="text-sm font-semibold">
                <TextLimit text={item.title} limit={15} />
              </span>
              <span className="text-sm text-gray-500">Rs.{item.price}</span>
              <StarRating rating={item.rating} />
            </div>
            <div className="flex justify-between items-center mt-2">
              {/* Ensure Heart component is correctly implemented */}
              <Heart
                initialLikes={item.heart}
                iconSize={20}
              />
              <FaRegSquarePlus
                size={17}
                className="text-gray-500 transition-colors  duration-500 group-hover:text-red-600 group-hover:animate-bounce"
                onClick={() => dispatch(addToCart(item))}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default ProductCard;