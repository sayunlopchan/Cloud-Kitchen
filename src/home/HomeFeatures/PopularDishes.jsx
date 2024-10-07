// PopularDishes.js
import { useNavigate } from "react-router-dom";
import menuData from "../../assets/Data/menu/alldata";
import Card from "../../components/Card";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";

import Arrow from "../../assets/icon/Arrow-next.svg";

const PopularDishes = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    const discountedPrice = item.discountPercentage
      ? item.price * (1 - item.discountPercentage / 100)
      : item.price;

    dispatch(
      addToCart({
        id: item.id,
        title: item.title,
        price: discountedPrice,
        img: item.img,
      })
    );
  };

  return (
    <div className="space-y-32 px-5 lg:px-10 py-10 transition-all duration-1000 bg-[#F0F2FF]">
      <h2 className="font-bold text-3xl pl-10">Our Most Popular</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 place-items-center place-content-center">
        {menuData.mostPopular.slice(0, 4).map((item) => (
          <Card
            key={item.id}
            item={item}
            handleAddToCart={handleAddToCart}
            onClick={() => navigate(`/product-detail/${item.id}`)}
          />
        ))}
      </div>

      <button
        onClick={() => navigate("/popular-dishes")}
        className="bg-red-600 px-3 py-2 rounded-tr-2xl rounded-bl-2xl flex items-center justify-center mx-auto text-white font-semibold hover:bg-red-800 transition-all duration-300"
      >
        View All
        <img src={Arrow} alt="Arrow indicating more options" className="w-[60px] h-[15px]" />
      </button>
    </div>
  );
};

export default PopularDishes;
