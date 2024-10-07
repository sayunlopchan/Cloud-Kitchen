import React, { useState, useEffect } from "react";
import { TbArrowBigUpLines } from "react-icons/tb";

const BackToTopBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
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

  return (
    <div className="fixed bottom-8 right-5">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="p-2 bg-colorRed text-white rounded-full shadow-2xl focus:outline-none animate-bounce"
        >
          <TbArrowBigUpLines size={30} />
        </button>
      )}
    </div>
  );
};

export default BackToTopBtn;