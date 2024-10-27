import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../../store/cartSlice";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

// logo
import logo from '../../assets/logo/Bhansha-Express-typo-logo.svg'

// ICON
import icon from '../../assets/icon/hamburger.png'
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";




// ROUTES
import * as paths from '../../Routes/Path'


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



const Header = () => {
  const [open, setOpen] = useState(false);


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
    location.pathname === paths.CONTACT_US_PAGE ||
    location.pathname === paths.PAYMENT_PAGE ||
    location.pathname === paths.FAQ_PAGE;

  // Handler function to toggle menu
  const handleToggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  // Function to navigate and close menu
  const handleNavigation = (path) => {
    handleToggleMenu();
    nav(path);
  };

  return (
    <header className={`flex justify-between px-5 py-2 h-20 relative z-[1000] ${isBgClay ? 'bg-clay' : ''}`}>
      <img
        src={logo}
        alt="Logo"
        onClick={() => nav("/")}
        className="w-40 cursor-pointer "
      />
      <div className="flex items-center gap-3">
        <div className="hidden md:block bg-colorRed px-3 py-1 rounded-md text-white cursor-pointer transition-all duration-300 hover:scale-90" onClick={() => nav(paths.MENU_PAGE)}>
          MENU
        </div>
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

        <div>
          <img
            src={icon}
            alt="hamburger menu icon"
            className='size-10 cursor-pointer p-1'
            onClick={handleToggleMenu}
          />
        </div>

        {/* Drawer Menu */}
        <div className={`fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>

          <div className={`absolute top-0 right-0 h-full w-4/5 sm:w-[60%] lg:w-[400px] bg-white z-[1000] transition-transform duration-500 ${open ? 'translate-x-0' : 'translate-x-full'}`}>

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

      </div>
    </header>
  );
};

export default Header;
