import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../../features/cartSlice";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FiSearch } from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

// logo
import logo from '../../assets/logo/Bhansha-Express-typo-logo.svg';

const BottomHeader = () => {
  const nav = useNavigate();
  const location = useLocation(); // Get the current location
  const dispatch = useDispatch();
  const { cart, totalQuantity, totalPrice } = useSelector((state) => state.allCart);

  const [showHeader, setShowHeader] = useState(false); // State to toggle header visibility

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart, dispatch]);

  // Scroll event listener to toggle the header visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Check if the current path is one of the excluded paths
  const isExcludedPath =
    ['/login', '/signup', '/dashboard', '/takeout-location-near-me', '/fill-my-form-payment', '/fill-my-form-takeout', '/pay-my-order'].includes(location.pathname);

  // Don't render the header if the current path is excluded
  if (isExcludedPath) {
    return null; // Don't render the BottomHeader
  }

  return (
    <header
      className={`flex items-center justify-between px-5 py-2 fixed bottom-5 z-[1000] w-[90vw] rounded-xl bg-white shadow-lg transition-transform duration-1000 ease-in-out mx-auto ${showHeader ? 'translate-y-0' : 'hidden translate-y-5'
        }`}
      style={{ left: "50%", transform: "translateX(-50%)" }}
    >
      <div className="flex items-center gap-5">
        {/* logo */}
        <img
          src={logo}
          alt="Logo"
          onClick={() => nav("/")}
          className="w-20 lg:w-40 cursor-pointer"
        />
        {/* logo */}

        {/* search */}
        <div className="relative">
          <input
            type="text"
            name="search"
            id="search"
            className="outline-none border-b w-full h-10"
          />
          <FiSearch size={25} className="absolute right-1 top-2 cursor-pointer" />
        </div>
      </div>
      {/* search */}

      <div className="flex items-center gap-3">
        <div
          onClick={() => nav("/cart")}
          className="relative group cursor-pointer"
        >
          <span
            className={`absolute top-1 right-0 size-4 flex items-center justify-center rounded-full text-[10px] border border-gray-500 ${totalQuantity > 0
              ? 'animate-bounce border-none text-white bg-red-500'
              : 'bg-white'
              }`}
          >
            {totalQuantity}
          </span>
          <span>
            <HiOutlineShoppingBag size={40} />
          </span>
        </div>

        <h2 className="text-lg">Nrs.{totalPrice}</h2>

        <button
          onClick={() => totalQuantity > 0 && nav("/fill-my-form-payment")} // Only navigate if totalQuantity is greater than 0
          className={`bg-colorRed text-white px-2 py-1 lg:px-4 lg:py-2 rounded-lg ${totalQuantity === 0 ? 'opacity-50 cursor-not-allowed' : ''}`} // Disable styling
          disabled={totalQuantity === 0} // Disable button if cart is empty
        >
          Payment
        </button>
      </div>
    </header>
  );
};

export default BottomHeader;
