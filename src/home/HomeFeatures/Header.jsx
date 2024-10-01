import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../../features/cartSlice";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";



// logo
import logo from '../../assets/logo/Bhansha-Express-typo-logo.svg'



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
    location.pathname.includes("/product-detail/") ||
    location.pathname === "/menu" ||
    location.pathname === "/cart" ||
    location.pathname === "/most-sold" ||
    location.pathname === "/takeout-location-near-me" ||
    location.pathname === "/fill-my-form" ||
    location.pathname === "/popular-dishes";


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
          onClick={() => nav("/cart")}
          className="relative group cursor-pointer">
          <span
            className={`absolute top-1 right-0 size-4 flex items-center justify-center rounded-full text-[10px] border border-gray-500 ${totalQuantity > 0 ? 'animate-bounce border-none text-white bg-red-500' : 'bg-white'}`}
          >
            {totalQuantity}
          </span>
          <HiOutlineShoppingBag size={40} />

        </div>
        <button
          onClick={() => nav("/the-best-bhansha-express-menu")}
          className="bg-colorRed text-white px-2 py-1 lg:px-10 lg:py-3 rounded-lg">
          Menu
        </button>
      </div>
    </header>
  );
};

export default Header;
