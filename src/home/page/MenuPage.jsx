import curve from "../../assets/icon/red Curve.svg";

import Card from "../../components/Card";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";

import menuData from "../../assets/Data/menu/alldata";
import { DETAIL_PAGE } from "../../Routes/Path";


const MenuPage = () => {
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
    <div className="space-y-5 bg-clay">
      {/* All Menu title */}
      <div className="w-full  flex justify-center ">
        <div className="relative w-fit mt-5">
          <h2 className="font-semibold text-center text-lg lg:text-3xl">
            Menu
          </h2>
          <img
            src={curve}
            alt="curve"
            className="absolute -bottom-[5px] w-28"
          />
        </div>
      </div>
      {/* All Menu title*/}

      {/* Quick Category */}

      {/* BreakFast section */}
      <section className="p-5">
        <h2 className="font-semibold text-2xl mb-10 lg:mb-20 border-b-4 border-colorRed w-fit">
          Breakfast
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-20 max-sm:gap-y-10 max-md:gap-y-20 place-items-center place-content-center ">
          {menuData.breakfast.map((item) => (
            <Card
              key={item.id}
              item={item}
              handleAddToCart={handleAddToCart}
              onClick={() => nav(`${DETAIL_PAGE.replace(':id', item.id)}`)}
            />
          ))}
        </div>
      </section>
      {/* BreakFast section */}


      <section className="p-5 ">
        <h2 className="font-semibold text-2xl pt-10 border-b-4 border-colorRed w-fit">
          Nepali Nasta
        </h2>
        <h2 className="font-semibold text-2xl mt-10 lg:mb-20 border-b-4 border-colorRed w-fit mb-10">
          Momo
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-20 max-sm:gap-y-10 max-md:gap-y-20 place-items-center place-content-center ">
          {menuData.momo.map((item) => (
            <Card
              key={item.id}
              item={item}
              handleAddToCart={handleAddToCart}
              onClick={() => nav(`${DETAIL_PAGE.replace(':id', item.id)}`)}
            />
          ))}
        </div>
      </section>

      <section className="p-5 ">
        <h2 className="font-semibold text-2xl mt-10 lg:mb-20 border-b-4 border-colorRed w-fit mb-10">
          chowmein
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-20 max-sm:gap-y-10 max-md:gap-y-20 place-items-center place-content-center ">
          {menuData.chowmein.map((item) => (
            <Card
              key={item.id}
              item={item}
              handleAddToCart={handleAddToCart}
              onClick={() => nav(`${DETAIL_PAGE.replace(':id', item.id)}`)}
            />
          ))}
        </div>
      </section>

      <section className="p-5 ">
        <h2 className="font-semibold text-2xl mt-10 lg:mb-20 border-b-4 border-colorRed w-fit mb-10">
          Fried Rice
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-20 max-sm:gap-y-10 max-md:gap-y-20 place-items-center place-content-center ">
          {menuData.friedRice.map((item) => (
            <Card
              key={item.id}
              item={item}
              handleAddToCart={handleAddToCart}
              onClick={() => nav(`${DETAIL_PAGE.replace(':id', item.id)}`)}
            />
          ))}
        </div>
      </section>


      <section className="p-5 ">
        <h2 className="font-semibold text-2xl mt-10 lg:mb-20 border-b-4 border-colorRed w-fit mb-10">
          Keema Noodle
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-20 max-sm:gap-y-10 max-md:gap-y-20 place-items-center place-content-center ">
          {menuData.keemaNoodle.map((item) => (
            <Card
              key={item.id}
              item={item}
              handleAddToCart={handleAddToCart}
              onClick={() => nav(`${DETAIL_PAGE.replace(':id', item.id)}`)}
            />
          ))}
        </div>
      </section>

      <section className="p-5 ">
        <h2 className="font-semibold text-2xl mt-10 lg:mb-20 border-b-4 border-colorRed w-fit mb-10">
          Crispy
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-20 max-sm:gap-y-10 max-md:gap-y-20 place-items-center place-content-center ">
          {menuData.crispy.map((item) => (
            <Card
              key={item.id}
              item={item}
              handleAddToCart={handleAddToCart}
              onClick={() => nav(`${DETAIL_PAGE.replace(':id', item.id)}`)}
            />
          ))}
        </div>
      </section>

      <section className="p-5 ">
        <h2 className="font-semibold text-2xl mt-10 lg:mb-20 border-b-4 border-colorRed w-fit mb-10">
          Snacks
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-20 max-sm:gap-y-10 max-md:gap-y-20 place-items-center place-content-center ">
          {menuData.snack.map((item) => (
            <Card
              key={item.id}
              item={item}
              handleAddToCart={handleAddToCart}
              onClick={() => nav(`${DETAIL_PAGE.replace(':id', item.id)}`)}
            />
          ))}
        </div>
      </section>


      <section className="p-5 ">
        <h2 className="font-semibold text-2xl mt-10 lg:mb-20 border-b-4 border-colorRed w-fit mb-10">
          Salad
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-20 max-sm:gap-y-10 max-md:gap-y-20 place-items-center place-content-center ">
          {menuData.salad.map((item) => (
            <Card
              key={item.id}
              item={item}
              handleAddToCart={handleAddToCart}
              onClick={() => nav(`${DETAIL_PAGE.replace(':id', item.id)}`)}
            />
          ))}
        </div>
      </section>

      {/* combos */}
      <section className="p-5 ">
        <h2 className="font-semibold text-2xl mt-10 lg:mb-20 border-b-4 border-colorRed w-fit mb-10">
          Combos
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-20 max-sm:gap-y-10 max-md:gap-y-20 place-items-center place-content-center ">
          {menuData.combo.map((item) => (
            <Card
              key={item.id}
              item={item}
              handleAddToCart={handleAddToCart}
              onClick={() => nav(`${DETAIL_PAGE.replace(':id', item.id)}`)}
            />
          ))}
        </div>
      </section>

      {/* Others */}
      <section className="p-5 ">
        <h2 className="font-semibold text-2xl mt-10 lg:mb-20 border-b-4 border-colorRed w-fit mb-10">
          Others
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-20 max-sm:gap-y-10 max-md:gap-y-20 place-items-center place-content-center ">
          {menuData.other.map((item) => (
            <Card
              key={item.id}
              item={item}
              handleAddToCart={handleAddToCart}
              onClick={() => nav(`${DETAIL_PAGE.replace(':id', item.id)}`)}
            />
          ))}
        </div>
      </section>
      {/* biryani */}
      <section className="p-5 ">
        <h2 className="font-semibold text-2xl mt-10 lg:mb-20 border-b-4 border-colorRed w-fit mb-10">
          Biryani
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-20 max-sm:gap-y-10 max-md:gap-y-20 place-items-center place-content-center ">
          {menuData.biryani.map((item) => (
            <Card
              key={item.id}
              item={item}
              handleAddToCart={handleAddToCart}
              onClick={() => nav(`${DETAIL_PAGE.replace(':id', item.id)}`)}
            />
          ))}
        </div>
      </section>
    </div >
  );
};

export default MenuPage;
