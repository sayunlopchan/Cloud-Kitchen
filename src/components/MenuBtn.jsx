import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { IoRestaurantSharp } from "react-icons/io5";
import * as paths from '../Routes/Path';

const MenuBtn = () => {
  const nav = useNavigate();
  const location = useLocation();

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) { // Using window.scrollY instead of pageYOffset
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // List of paths where the button should not be shown
  const hideButtonOnPages = [
    paths.MENU_PAGE,
    paths.PAYMENT_FORM_PAGE,
    paths.TAKEOUT_FORM_PAGE,
    paths.PAYMENT_PAGE,
    paths.TAKEOUT_PAGE,
    paths.FAQ_PAGE,
    paths.TERMS_AND_CONDITIONS_PAGE,
    paths.CONTACT_US_PAGE,
    paths.PRIVACY_POLICY_PAGE,
  ];

  // Check if the current path matches any of the hide pages
  if (hideButtonOnPages.includes(location.pathname)) {
    return null;
  }

  return (
    <div className="fixed bottom-44  right-5 z-[100]">
      {isVisible && (
        <button
          onClick={() => nav(paths.MENU_PAGE)}
          className="p-2 bg-colorRed text-white rounded-full shadow-2xl flex items-center gap-x-1 border animate-pop"
        >
          <IoRestaurantSharp size={30} />
          <span>Menu</span>
        </button>
      )}
    </div>
  );
};

export default MenuBtn;
