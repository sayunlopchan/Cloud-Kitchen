import { useState, useEffect } from "react";
import ad from '../assets/ad/adbanner.jpg';

const PopupAd = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Helper function to remove expired ad data from local storage
  const removeExpiredAd = () => {
    const expirationTime = localStorage.getItem('adExpiration');
    if (expirationTime && Date.now() > parseInt(expirationTime, 10)) {
      localStorage.removeItem('adDismissed');
      localStorage.removeItem('adExpiration');
    }
  };

  // Check if the ad should be shown when the component mounts
  useEffect(() => {
    removeExpiredAd(); // Remove ad if expiration has passed

    const adDismissed = localStorage.getItem('adDismissed');
    if (!adDismissed) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000); // Delay of 2 seconds before showing the popup

      return () => clearTimeout(timer); // Cleanup timer on unmount
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false); // Hide the popup
    localStorage.setItem('adDismissed', 'true'); // Mark the ad as dismissed

    // Set an expiration timestamp 5 minutes from now
    const expirationTime = Date.now() + 300000; // 300000ms = 5 minutes
    localStorage.setItem('adExpiration', expirationTime.toString());
  };

  if (!isVisible) return null; // Do not render if the popup is not visible

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-[1000] px-3">
      <div className="bg-white rounded-lg shadow-lg py-10 px-5 relative
      size-full w-[300px] h-[300px] md:w-[400px] lg:w-[500px]">
        <img src={ad} alt="offer ad" className="size-full rounded-md" />
        {/* Close button */}
        <button
          className="absolute top-2 right-4 rounded-full text-black text-2xl"
          onClick={handleClose}
        >
          x
        </button>
      </div>
    </div>
  );
};

export default PopupAd;
