import { useState, useEffect } from "react";
import { TbArrowBigUpLines } from "react-icons/tb";
import { useLocation } from "react-router-dom"; // Import the hook to access current location
import * as paths from '../Routes/Path';

const BackToTopBtn = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation(); // Use hook to get current path

  const toggleVisibility = () => {
    setIsVisible(window.pageYOffset > 300);
  };

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // List of paths where the button should not be shown
  const hideButtonOnPages = [
    paths.PAYMENT_FORM_PAGE,
    paths.TAKEOUT_FORM_PAGE,
    paths.PAYMENT_PAGE,
    paths.TAKEOUT_PAGE,
    paths.FAQ_PAGE,
    paths.TERMS_AND_CONDITIONS_PAGE,
    paths.CONTACT_US_PAGE,
    paths.PRIVACY_POLICY_PAGE,
    "/"
  ];

  // Check if the current path matches any of the hide pages
  if (hideButtonOnPages.includes(location.pathname)) {
    return null;
  }

  return (
    <div className="fixed bottom-28 right-5 z-[100]">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="p-2 bg-colorRed text-white rounded-full shadow-2xl focus:outline-none animate-pop border"
        >
          <TbArrowBigUpLines size={30} />
        </button>
      )}
    </div>
  );
};

export default BackToTopBtn;
