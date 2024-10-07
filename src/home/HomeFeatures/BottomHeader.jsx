import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../../store/cartSlice";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FiSearch } from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

// logo
import logo from '../../assets/logo/Bhansha-Express-typo-logo.svg';
import mainlogo from '../../assets/logo/Bhansha-Express-logo.svg';
import meme from '../../assets/icon/Two-Buttons.jpg';

import * as paths from '../../Routes/Path'

const BottomHeader = () => {
  const nav = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { cart, totalQuantity, totalPrice } = useSelector((state) => state.allCart);

  const [showHeader, setShowHeader] = useState(false);
  const [animateBag, setAnimateBag] = useState(false);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart, dispatch]);

  // Trigger bounce animation on cart update
  useEffect(() => {
    if (totalQuantity > 0) {
      setAnimateBag(true);
      setTimeout(() => {
        setAnimateBag(false);
      }, 500);
    }
  }, [totalQuantity]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  // Exclude Bottom nav form page 
  const isExcludedPath = [
    paths.LOGIN_PAGE,
    paths.SIGNUP_PAGE,
    paths.DASHBOARD_PAGE,

    paths.PAYMENT_PAGE,
    paths.TAKEOUT_PAGE,

    paths.PAYMENT_FORM_PAGE,
    paths.TAKEOUT_FORM_PAGE,
  ].includes(location.pathname);

  if (isExcludedPath) {
    return null;
  }

  const handleCheckoutClick = () => {
    setShowModal(true); // Show modal when checkout button is clicked
  };

  const handleCloseModal = () => {
    setShowModal(false); // Close modal
  };

  const handleOnlinePayment = () => {
    nav(paths.PAYMENT_FORM_PAGE);
    handleCloseModal();
  };

  const handleTakeout = () => {
    nav(paths.TAKEOUT_FORM_PAGE);
    handleCloseModal();
  };

  return (
    <>
      <header
        className={`flex items-center justify-between px-5 py-2 fixed bottom-5 z-40 w-[90vw] rounded-xl bg-white shadow-lg transition-transform duration-1000 ease-in-out mx-auto ${showHeader ? 'translate-y-0' : 'hidden translate-y-5'
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
            onClick={() => nav(paths.CART_PAGE)}
            className={`relative group cursor-pointer ${animateBag ? 'animate-pop' : ''}`}
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
            onClick={handleCheckoutClick} // Show modal on click
            className={`bg-colorRed text-white px-2 py-1 lg:px-4 lg:py-2 rounded-lg ${totalQuantity === 0 ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={totalQuantity === 0}
          >
            Checkout
          </button>
        </div>
      </header>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[1000] ">



          <div className="grid grid-cols-12 bg-white p-5 rounded-lg shadow-lg w-[90vw] sm:w-[460px] lg:w-[50vw]  relative">
            <h2 className="col-span-full text-lg mb-4">Please Choose Your Payment Method</h2>

            <div className="h-full flex col-span-full py-2">
              <img src={meme} alt="meme" className="h-[300px]" />

              <div className="w-full">
                <div className="bg-slate-400 h-1/2  border-2 border-black flex items-center justify-center gap-x-1 px-1">

                  <div className="w-1/2 h-[100px] border-2 border-black rounded-sm flex justify-center items-center relative">
                    <button onClick={handleOnlinePayment} className="transition-all duration-500  bg-colorRed hover:bg-red-900 text-white rounded-full size-16 z-10 border text-sm">
                      Delivery
                    </button>
                    <div className="size-16 bg-colorRed border-2 border-black rounded-full absolute top-6"></div>
                  </div>

                  <div className="w-1/2 h-[100px] border-2 border-black rounded-sm flex justify-center items-center relative">
                    <button onClick={handleTakeout} className="transition-all duration-500 bg-colorRed hover:bg-red-900 text-white  rounded-full size-16 z-10 border text-sm">
                      Takeout
                    </button>
                    <div className="size-16 bg-colorRed border-2 border-black rounded-full absolute top-6"></div>
                  </div>

                </div>
                <img src={mainlogo} alt="" className="mx-auto w-[200px]" />
              </div>
            </div>



            <button onClick={handleCloseModal} className="col-span-full text-start text-gray-500 text-lg absolute top-0 right-0 hover:underline">
              x
            </button>

          </div>



        </div>
      )}
    </>
  );
};

export default BottomHeader;
