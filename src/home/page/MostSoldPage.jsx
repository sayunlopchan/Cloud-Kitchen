import menuData from "../../assets/Data/menu/alldata";
import CurveLine from "../../assets/icon/red Curve.svg";
import Card from "../../components/Card";



import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cartSlice";

const MostSoldPage = () => {
  const nav = useNavigate();
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
    <div className="space-y-32 px-5 lg:px-10 pt-10 pb-28 transition-all duration-1000 bg-clay">

      {/* Heading */}
      <div className="relative w-fit">
        <h2 className="font-bold text-3xl pl-10">Most Sold</h2>
        <img
          src={CurveLine}
          alt="Decorative curve line"
          className="w-[100px] absolute top-10 right-0"
        />
      </div>
      {/* Heading */}

      {/* Dishes - Display only the items from the mostSold array */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-20 max-sm:gap-y-10 max-md:gap-y-20 place-items-center place-content-center">
        {menuData.mostSold.map((item) => (
          <Card
            key={item.id}
            item={item}
            handleAddToCart={handleAddToCart}
            onClick={() => nav(`/product-detail/${item.id}`)}
          />
        ))}
      </div>

    </div>
  );
};

export default MostSoldPage;
