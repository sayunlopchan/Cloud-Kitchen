import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../../store/cartSlice";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

// LOGO
import logo from '../../assets/logo/Bhansha-Express-typo-logo.svg';
import COD from '../../assets/icon/delevery.gif';
import TAKEOUT from '../../assets/icon/food-bag.png';


// ICON
import icon from '../../assets/icon/hamburger.png'
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";


// ROUTES
import * as paths from '../../Routes/Path';




// Array of navigation items
const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Menu', path: paths.MENU_PAGE },
  { label: 'About Us', path: paths.ABOUT_US_PAGE },
  { label: 'FAQ', path: paths.FAQ_PAGE },
  { label: 'Contact Us', path: paths.CONTACT_US_PAGE },
  { label: 'Terms & Conditions', path: paths.TERMS_AND_CONDITIONS_PAGE },
  { label: 'Privacy and Policy', path: paths.PRIVACY_POLICY_PAGE },
];



const socialLinks = [
  { href: paths.FACEBOOK, icon: <FaFacebook size={30} />, name: "Facebook" },
  { href: paths.INSTAGRAM, icon: <FaInstagram size={30} />, name: "Instagram" },
  { href: paths.WHATSAPP, icon: <FaWhatsapp size={30} />, name: "Whatsapp" }
];





const BottomHeader = () => {
  const nav = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { cart, totalQuantity, totalPrice } = useSelector((state) => state.allCart);

  const [showHeader, setShowHeader] = useState(false);
  const [animateBag, setAnimateBag] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [open, setOpen] = useState(false);





  // Handler function to toggle menu
  const handleToggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  // Function to navigate and close menu
  const handleNavigation = (path) => {
    handleToggleMenu();
    nav(path);
  };





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

  // Exclude Bottom nav from certain pages 
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
    setSelectedPaymentMethod(null); // Reset selected payment method
  };

  const handlePaymentMethodChange = (method) => {
    setSelectedPaymentMethod(method); // Update selected payment method
  };

  const handleConfirmPaymentMethod = () => {
    if (selectedPaymentMethod === 'online') {
      nav(paths.PAYMENT_FORM_PAGE); // Navigate to online payment
    } else if (selectedPaymentMethod === 'takeout') {
      nav(paths.TAKEOUT_FORM_PAGE); // Navigate to takeout
    }
    handleCloseModal(); // Close the modal after confirmation
  };

  return (
    <>
      <header
        className={`flex items-center justify-between px-5 py-2 fixed bottom-5 z-40  w-[360px] sm:w-[90vw] rounded-xl bg-white shadow-lg transition-transform duration-1000 ease-in-out mx-auto ${showHeader ? 'translate-y-0' : 'hidden translate-y-5'
          }`}
        style={{ left: "50%", transform: "translateX(-50%)" }}
      >
        <div className="flex items-center gap-5">
          {/* logo */}
          <img
            src={logo}
            alt="Logo"
            onClick={() => nav("/")}
            className="w-20 lg:w-40 cursor-pointer hidden lg:block"
          />

          <div>
            <img
              src={icon}
              alt="hamburger menu icon"
              className='size-10 cursor-pointer p-1'
              onClick={handleToggleMenu}
            />
          </div>


        </div>

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

      {/* Drawer Menu - moved outside header */}
      <div className={`fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-[1000] ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className={`absolute top-0 right-0 h-screen w-4/5 sm:w-[60%] lg:w-[400px] bg-white z-[1000] transition-transform duration-500 ${open ? 'translate-x-0' : 'translate-x-full'}`}>

          <div className="flex w-full justify-between p-5">
            <MdOutlineRestaurantMenu size={40} color="red" onClick={handleToggleMenu} className="cursor-pointer" />
            <img src={logo} alt="Bhansha Express Logo" className=" w-48 " />
          </div>

          <div className="w-full ">
            <ul className="text-base md:text-lg ">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="group transition-all duration-500 hover:bg-gradient-to-r from-colorRed to-colorOrange hover:pl-10 border-b-2 cursor-pointer pt-5 px-5"
                  onClick={() => handleNavigation(item.path)}
                >
                  <span className="group-hover:text-white">
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Social links */}
          <div className="text-center mt-5 space-y-5">
            <h1 className="text-lg">Follow us</h1>
            <div className="flex justify-center gap-x-4">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.href} target="_blank" aria-label={link.name} >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>


      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 px-1 flex items-center justify-center bg-black bg-opacity-50 z-[1000] ">

          <div className="bg-white w-full lg:w-[500px]  rounded-lg overflow-hidden">
            <div className="flex justify-between p-2">
              <h1 className="text-lg ml-2 mt-2">Choose Your Payment Method</h1>
              <button
                onClick={handleCloseModal}
                className="px-4 rounded-full transition-all duration-300 hover:scale-125 hover:bg-gray-100">

                x
              </button>
            </div>

            <div className="h-full flex flex-col gap-2 p-4">
              <label
                className={`flex items-center p-2 border-2 ${selectedPaymentMethod === 'online' ? 'border-colorRed' : 'border-transparent'} rounded-lg cursor-pointer`}
                onClick={() => handlePaymentMethodChange('online')}
              >
                <img src={COD} alt="cash on delivery image" className="size-28 mr-2" />

                <span>Cash on Delivery</span>
              </label>

              <label
                className={`flex items-center p-2 border-2 ${selectedPaymentMethod === 'takeout' ? 'border-colorRed' : 'border-transparent'} rounded-lg cursor-pointer`}
                onClick={() => handlePaymentMethodChange('takeout')}
              >
                <img src={TAKEOUT} alt="takeout image" className="size-28 mr-2" />
                <span>Takeout</span>
              </label>

              <button
                onClick={handleConfirmPaymentMethod}
                className={`mt-4 bg-colorRed text-white px-4 py-2 rounded-lg ${!selectedPaymentMethod ? 'opacity-50 cursor-not-allowed' : ''}`}

                disabled={!selectedPaymentMethod}
              >
                Confirm
              </button>
            </div>
          </div>

        </div>
      )}
    </>
  );
};

export default BottomHeader;
