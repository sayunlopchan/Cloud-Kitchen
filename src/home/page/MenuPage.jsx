import curve from "../../assets/icon/red Curve.svg";

import Card from "../../components/Card/Card";
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
    <div className="space-y-5  bg-clay menu">
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

      {/* All combo section */}
      <section className="p-5">
        <h2 className="font-semibold text-2xl mb-10 lg:mb-20 border-b-4 border-colorRed w-fit">
          Festival Dhamaka
        </h2>
        <div className="grid-div grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-4 gap-y-10 place-content-center place-items-center">
          {menuData.combo1000.map((item) => (
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



      {/* BreakFast section */}
      <section className="p-5">
        <h2 className="font-semibold text-2xl mb-10 lg:mb-20 border-b-4 border-colorRed w-fit">
          Breakfast
        </h2>
        <div className="grid-div grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-4 gap-y-10 place-content-center place-items-center">
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

        <h2 className="font-semibold text-2xl mt-10 lg:mb-20 border-b-4 border-colorRed w-fit mb-10">
          Momo
        </h2>
        <div className="grid-div grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-4 gap-y-10 place-content-center place-items-center">
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
          Chowmein
        </h2>
        <div className="grid-div grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-4 gap-y-10 place-content-center place-items-center">
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
        <div className="grid-div grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-4 gap-y-10 place-content-center place-items-center">
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
        <div className="grid-div grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-4 gap-y-10 place-content-center place-items-center">
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
        <div className="grid-div grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-4 gap-y-10 place-content-center place-items-center">
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
        <div className="grid-div grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-4 gap-y-10 place-content-center place-items-center">
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
        <div className="grid-div grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-4 gap-y-10 place-content-center place-items-center">
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
        <div className="grid-div grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-4 gap-y-10 place-content-center place-items-center">
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
        <div className="grid-div grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-4 gap-y-10 place-content-center place-items-center">
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

    </div >
  );
};

export default MenuPage;
