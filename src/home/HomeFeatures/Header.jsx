import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../../store/cartSlice";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";



// logo
import logo from '../../assets/logo/Bhansha-Express-typo-logo.svg'

import * as paths from '../../Routes/Path'


const Header = () => {
  const nav = useNavigate();
  const location = useLocation(); // Get the current location

  const { cart, totalQuantity } = useSelector((state) => state.allCart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart, dispatch]);

  // Check if the current pathname matches the specified routes
  const isBgClay =
    location.pathname.startsWith('/product-detail/') ||
    location.pathname === paths.MENU_PAGE ||
    location.pathname === paths.CART_PAGE ||
    location.pathname === paths.MOST_SOLD_PAGE ||
    location.pathname === paths.MOST_POPULAR_PAGE ||
    location.pathname === paths.TAKEOUT_FORM_PAGE ||
    location.pathname === paths.PAYMENT_FORM_PAGE ||
    location.pathname === paths.TAKEOUT_PAGE ||
    location.pathname === paths.PAYMENT_PAGE;


  return (
    <header className={`flex justify-between px-5 py-2 h-20 ${isBgClay ? 'bg-clay' : ''}`}>
      <img
        src={logo}
        alt="Logo"
        onClick={() => nav("/")}
        className="w-40 cursor-pointer "
      />
      <div className="flex items-center gap-3">

        <div
          onClick={() => nav(paths.CART_PAGE)}
          className="relative group cursor-pointer">
          <span
            className={`absolute top-1 right-0 size-4 flex items-center justify-center rounded-full text-[10px] border border-gray-500 ${totalQuantity > 0 ? 'animate-bounce border-none text-white bg-red-500' : 'bg-white'}`}
          >
            {totalQuantity}
          </span>
          <HiOutlineShoppingBag size={40} />

        </div>
        <button
          onClick={() => nav(paths.MENU_PAGE)}
          className="bg-colorRed text-white px-2 py-1 lg:px-10 lg:py-3 rounded-lg">
          Menu
        </button>
      </div>
    </header>
  );
};

export default Header;
