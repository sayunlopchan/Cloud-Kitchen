import React, { useState, useEffect } from "react";
import { CgArrowLongLeft, CgArrowLongRight } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { setActiveImage } from "../../store/offerSlice";

const Test = ({
  offers,
  autoSlide = false,
  autoSlideInterval = 5000,
  transitionDuration = 500,
  disableButtonDuration = 1000,
  showArrows = true,
}) => {
  const dispatch = useDispatch();
  const totalSlides = offers.length;

  // Start at the second slide to make the first slide the duplicated last slide
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  // Create an array that duplicates the offers
  const slides = [...offers, ...offers, ...offers];

  const nextSlide = () => {
    if (!isButtonDisabled) {
      setIsButtonDisabled(true);

      setCurrentIndex((prevIndex) => {
        const newIndex = prevIndex + 1;
        if (newIndex === slides.length - 1) {
          // If at the last duplicated slide, jump to the first actual slide
          setTimeout(() => {
            setCurrentIndex(1);
          }, transitionDuration); // Pause for transition duration
        } else {
          dispatch(setActiveImage(slides[newIndex].img)); // Set the active image based on the new index
        }
        return newIndex >= slides.length ? 0 : newIndex; // Wrap around
      });

      setTimeout(() => {
        setIsButtonDisabled(false);
      }, disableButtonDuration);
    }
  };

  const prevSlide = () => {
    if (!isButtonDisabled) {
      setIsButtonDisabled(true);

      setCurrentIndex((prevIndex) => {
        const newIndex = prevIndex - 1;
        if (newIndex === 0) {
          // If at the first duplicated slide, jump to the last actual slide
          setTimeout(() => {
            setCurrentIndex(slides.length - 2);
          }, transitionDuration); // Pause for transition duration
        } else {
          dispatch(setActiveImage(slides[newIndex].img)); // Set the active image based on the new index
        }
        return newIndex < 0 ? slides.length - 1 : newIndex; // Wrap around
      });

      setTimeout(() => {
        setIsButtonDisabled(false);
      }, disableButtonDuration);
    }
  };

  // Auto-slide effect
  useEffect(() => {
    let slideInterval;
    if (autoSlide) {
      slideInterval = setInterval(() => {
        nextSlide(); // Call nextSlide on interval
      }, autoSlideInterval);
    }

    return () => clearInterval(slideInterval); // Cleanup interval on unmount
  }, [autoSlide, autoSlideInterval]); // Depend on autoSlide and autoSlideInterval

  return (
    <div className="relative w-full max-w-md overflow-hidden mx-auto">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(${-currentIndex * 100}%)`,
          transition: `transform ${transitionDuration}ms ease-in-out`,
        }}
      >
        {/* Render the slides */}
        {slides.map((offer, index) => (
          <div key={index} className="flex-shrink-0 w-full">
            <img src={offer.img} alt={`Offer ${index}`} className="w-full" />
          </div>
        ))}
      </div>

      {showArrows && (
        <div className="absolute bottom-0 left-[20%] z-10 flex items-center">
          <button
            className="py-0 px-4 lg:py-2 lg:px-6 text-white bg-gray-950 rounded-l border rounded-tr-[30px] rounded-bl-[30px]"
            disabled={isButtonDisabled}
            onClick={prevSlide}
          >
            <CgArrowLongLeft className="size-10" />
          </button>
        </div>
      )}
      {showArrows && (
        <div className="absolute bottom-0 right-[20%] z-10 flex items-center">
          <button
            className="py-0 px-4 lg:py-2 lg:px-6 text-white bg-gray-950 rounded-r border rounded-tr-[30px] rounded-bl-[30px]"
            onClick={nextSlide}
            disabled={isButtonDisabled}
          >
            <CgArrowLongRight className="size-10" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Test;
