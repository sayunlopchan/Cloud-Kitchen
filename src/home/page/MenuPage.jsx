import curve from "../../assets/icon/red Curve.svg";
import { FiSearch } from "react-icons/fi";
import Card from "../../components/Card";
import { useNavigate } from "react-router-dom";

import menuData from "../../assets/Data/menu/alldata";
const { breakfast } = menuData;
const { momo } = menuData;
const { friedRice } = menuData;
const { chowmein } = menuData;
const { biryani } = menuData;

const MenuPage = () => {
  const nav = useNavigate();

  return (
    <div className="space-y-5">
      {/* search */}
      <div className="relative mx-auto w-[60%] lg:w-[30%]">
        <input
          type="text"
          name="search"
          id="search"
          className="outline-none border-2 w-full h-10 rounded-full px-4"
        />
        <FiSearch size={25} className="absolute right-3 top-2 cursor-pointer" />
      </div>
      {/* search */}

      {/* All Menu */}
      <div className="w-full flex justify-center ">
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
      {/* All Menu */}

      {/* Quick Category */}
      <header className="w-full">
        <nav className="flex flex-wrap gap-5 justify-center py-5 text-sm lg:text-lg">
          <span className="border-2 border-colorRed px-3 py-1 rounded-2xl">
            BreakFast
          </span>
          <span className="border-2 border-colorRed px-3 py-1 rounded-2xl">
            Nepali Nasta
          </span>
          <span className="border-2 border-colorRed px-3 py-1 rounded-2xl">
            Snacks
          </span>
          <span className="border-2 border-colorRed px-3 py-1 rounded-2xl">
            Crispy & Crunchy
          </span>
          <span className="border-2 border-colorRed px-3 py-1 rounded-2xl">
            Combos & Special
          </span>
          <span className="border-2 border-colorRed px-3 py-1 rounded-2xl">
            Salad
          </span>
          <span className="border-2 border-colorRed px-3 py-1 rounded-2xl">
            Biryani
          </span>
        </nav>
      </header>
      {/* Quick Category */}

      {/* BreakFast section */}
      <section className="py-20 px-10">
        <h2 className="font-semibold text-2xl mb-40 border-b-4 border-colorRed w-fit">
          Breakfast
        </h2>
        <div
          className="grid grid-cols-2
        md:grid-cols-3
        gap-y-20
        lg:px-40
        max-sm:gap-y-10
        max-md:gap-y-20
        place-items-center place-content-center "
        >
          {breakfast.map((item) => (
            <Card
              key={item.id}
              item={item}
              onClick={() => nav(`/product-detail/${item.id}`)}
            />
          ))}
        </div>
      </section>
      {/* BreakFast section */}

      {/* Nepali Nasta section*/}
      <section className="py-20 px-10">
        {/* nepali nasta */}
        <h2 className="font-semibold text-2xl mb-5 border-b-4 border-colorRed w-fit">
          Nepali Nasta
        </h2>

        {/* momo */}
        <h2 className="font-semibold text-2xl mb-40 border-b-4 border-colorRed w-fit">
          Momo
        </h2>

        {/* momo loop */}
        <div
          className="grid grid-cols-2
        md:grid-cols-3
        gap-y-20
        lg:px-40
        max-sm:gap-y-10
        max-md:gap-y-20
        place-items-center 
        place-content-center "
        >
          {momo.map((item) => (
            <Card
              key={item.id}
              item={item}
              onClick={() => nav(`/product-detail/${item.id}`)}
            />
          ))}
        </div>

        <h2 className="font-semibold text-2xl mb-40 border-b-4 border-colorRed w-fit">
          Fried Rice
        </h2>

        <div
          className="grid grid-cols-2
md:grid-cols-3
gap-y-20
lg:px-40
max-sm:gap-y-10
max-md:gap-y-20
place-items-center 
place-content-center "
        >
          {friedRice.map((item) => (
            <Card
              key={item.id}
              item={item}
              onClick={() => nav(`/product-detail/${item.id}`)}
            />
          ))}
        </div>

        <h2 className="font-semibold text-2xl mb-40 border-b-4 border-colorRed w-fit">
          Chowmein
        </h2>

        <div
          className="grid grid-cols-2
md:grid-cols-3
gap-y-20
lg:px-40
max-sm:gap-y-10
max-md:gap-y-20
place-items-center 
place-content-center "
        >
          {chowmein.map((item) => (
            <Card
              key={item.id}
              item={item}
              onClick={() => nav(`/product-detail/${item.id}`)}
            />
          ))}
        </div>


        <h2 className="font-semibold text-2xl mb-40 border-b-4 border-colorRed w-fit">
          Biryani
        </h2>

        <div
          className="grid grid-cols-2
md:grid-cols-3
gap-y-20
lg:px-40
max-sm:gap-y-10
max-md:gap-y-20
place-items-center 
place-content-center "
        >
          {biryani.map((item) => (
            <Card
              key={item.id}
              item={item}
              onClick={() => nav(`/product-detail/${item.id}`)}
            />
          ))}
        </div>


      </section>
      {/* Nepali Nasta section */}
    </div>
  );
};

export default MenuPage;
