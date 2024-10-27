import menuData from "../../assets/Data/menu/alldata";
import CurveLine from "../../assets/icon/red Curve.svg";
import Card from "../../components/Card/Card";




import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";

import { DETAIL_PAGE } from "../../Routes/Path";

const MostPopularPage = () => {
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
    <div className="space-y-32 px-5 lg:px-10 py-10 transition-all duration-1000 bg-clay">

      {/* Heading */}
      <div className="relative w-fit">
        <h2 className="font-bold text-3xl pl-10">Most Popular</h2>
        <img
          src={CurveLine}
          alt="Decorative curve line"
          className="w-[100px] absolute top-10 right-0"
        />
      </div>
      {/* Heading */}

      {/* Dishes - Display only the items from the mostSold array */}
      <div className="grid-div grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-4 gap-y-10 place-content-center place-items-center">
        {menuData.mostPopular.map((item) => (
          <Card
            key={item.id}
            item={item}
            handleAddToCart={handleAddToCart}
            onClick={() => nav(`${DETAIL_PAGE.replace(':id', item.id)}`)}
          />
        ))}
      </div>

    </div>
  );
};

export default MostPopularPage;
