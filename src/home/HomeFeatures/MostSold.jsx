import menuData from "../../assets/Data/menu/alldata";
import CurveLine from "../../assets/icon/red Curve.svg";
import Arrow from "../../assets/icon/Arrow-next.svg";
import Card from "../../components/Card/Card";




import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";




// paths
import * as paths from '../../Routes/Path'

const MostSold = () => {
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
    <div className="space-y-32 px-5 lg:px-10 py-10 transition-all duration-1000 ">
      {/* Heading */}
      <div className="relative w-fit">
        <h2 className="font-bold text-3xl ">Most Sold</h2>
        <img
          src={CurveLine}
          alt="Decorative curve line"
          className="w-[100px] absolute top-10 right-0"
        />
      </div>
      {/* Heading */}

      {/* Dishes - Display only the items from the mostSold array */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 max-sm:gap-y-10 max-md:gap-y-20 place-items-center place-content-center">
        {menuData.mostSold.slice(0, 4).map((item) => (
          <Card
            key={item.id}
            item={item}
            handleAddToCart={handleAddToCart}
            onClick={() => nav(`${paths.DETAIL_PAGE.replace(':id', item.id)}`)}

          />
        ))}
      </div>

      <button
        onClick={() => nav(paths.MOST_SOLD_PAGE)}
        aria-label="View all popular dishes"
        className="bg-red-600 px-3 py-2 rounded-tr-2xl rounded-bl-2xl flex items-center justify-center mx-auto text-white font-semibold hover:bg-red-800 transition-all duration-300"
      >
        <span>View All</span>
        <span>
          <img src={Arrow} alt="Arrow indicating more options" className="w-[60px] h-[15px]" />
        </span>
      </button>
    </div>
  );
};

export default MostSold;
