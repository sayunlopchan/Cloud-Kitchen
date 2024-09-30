import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../../features/cartSlice";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { FiSearch } from "react-icons/fi";

// logo
import logo from '../../assets/logo/Bhansha-Express-typo-logo.svg'

const BottomHeader = () => {
  const nav = useNavigate();

  const { cart, totalQuantity, totalPrice } = useSelector((state) => state.allCart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart, dispatch]);

  return (
    <header className="flex items-center justify-between px-5 py-4 fixed bottom-5 z-20 w-[90vw]  rounded-xl bg-white shadow-lg"
      style={{ left: "50%", transform: "translateX(-50%)" }}>

      <div className="flex items-center gap-5">
        {/* logo */}
        <img
          src={logo}
          alt="Logo"
          onClick={() => nav("/")}
          className="w-20 lg:w-40 cursor-pointer"
        />
        {/* logo */}

        <div className="relative">
          {/* search */}
          <input
            type="text"
            name="search"
            id="search"
            className="border w-full h-10"
          />
          <FiSearch size={25} className="absolute right-1 top-2 cursor-pointer" />
        </div>
      </div>
      {/* search */}


      <div className="flex items-center gap-3">

        <div
          onClick={() => nav("/cart")}
          className="relative group cursor-pointer">
          <span
            className={`absolute top-1 right-0 size-4 flex items-center justify-center rounded-full text-[10px] border border-gray-500 ${totalQuantity > 0 ? 'animate-bounce border-none text-white bg-red-500' : 'bg-white'}`}
          >
            {totalQuantity}
          </span>
          <span>
            <HiOutlineShoppingBag size={40} />
          </span>
        </div>

        <h2 className="text-lg">Nrs.{totalPrice}</h2>

        <button className="bg-colorRed text-white px-10 py-3 max-lg:hidden">
          Place Order
        </button>


      </div>
    </header>
  );
};

export default BottomHeader;
