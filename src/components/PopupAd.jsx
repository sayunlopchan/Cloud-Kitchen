import { useState, useEffect } from "react";
import ad from '../assets/ad/adbanner.jpg';

const PopupAd = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Check if the popup should be shown based on local storage
  useEffect(() => {
    const adDismissed = localStorage.getItem('adDismissed');
    if (!adDismissed) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000); // Delay of 2 seconds before showing popup
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('adDismissed', 'true'); // Save to local storage to indicate ad has been dismissed

    // Automatically remove the adDismissed flag after 5 minutes (300000 milliseconds)
    setTimeout(() => {
      localStorage.removeItem('adDismissed');
    }, 300000); // 5 minutes
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-[1000] px-3">
      <div className="bg-white rounded-lg shadow-lg p-1 w-[90vw] h-[70vh] md:w-[70vw] lg:w-[58vw] lg:h-[95vh] relative">
        <img src={ad} alt="offer ad" className="size-full rounded-md" />
        {/* Close button */}
        <button className="absolute top-2 right-4 rounded-full text-white text-2xl" onClick={handleClose}>
          x
        </button>
      </div>
    </div>
  );
};

export default PopupAd;