import { useState, useEffect, useRef } from "react";
import { CgArrowLongLeft, CgArrowLongRight } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { setActiveImage } from "../../store/offerSlice";

const Slider = ({
  offers,
  autoSlide = false,
  autoSlideInterval = 5000,
  transitionDuration = 500,
  disableButtonDuration = 1000,
  showArrows = true,
}) => {
  const dispatch = useDispatch();
  const totalSlides = offers.length;

  // Clone first and last slides
  const slides = [offers[offers.length - 1], ...offers, offers[0]];

  const [currentIndex, setCurrentIndex] = useState(1); // Start at the real first slide (index 1)
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  // Ref for the slider container (for resetting transition)
  const sliderRef = useRef(null);

  const nextSlide = () => {
    if (!isButtonDisabled) {
      setIsButtonDisabled(true);

      setCurrentIndex((prevIndex) => prevIndex + 1);
      setIsTransitioning(true);

      setTimeout(() => {
        setIsButtonDisabled(false);
      }, disableButtonDuration);
    }
  };

  const prevSlide = () => {
    if (!isButtonDisabled) {
      setIsButtonDisabled(true);

      setCurrentIndex((prevIndex) => prevIndex - 1);
      setIsTransitioning(true);

      setTimeout(() => {
        setIsButtonDisabled(false);
      }, disableButtonDuration);
    }
  };

  // Handle transitions to achieve infinite effect
  useEffect(() => {
    if (isTransitioning) {
      if (currentIndex === slides.length - 1) {
        // If we reach the last cloned slide, jump to the real first slide
        setTimeout(() => {
          setIsTransitioning(false); // Disable transition
          setCurrentIndex(1); // Jump to the first slide
        }, transitionDuration);
      } else if (currentIndex === 0) {
        // If we reach the first cloned slide, jump to the real last slide
        setTimeout(() => {
          setIsTransitioning(false); // Disable transition
          setCurrentIndex(slides.length - 2); // Jump to the last slide
        }, transitionDuration);
      }
    }
  }, [currentIndex, slides.length, transitionDuration]);

  // Dispatch active image when the current index changes
  useEffect(() => {
    if (currentIndex > 0 && currentIndex < slides.length - 1) {
      dispatch(setActiveImage(slides[currentIndex].img)); // Only dispatch for the actual slides
    }
  }, [currentIndex, slides, dispatch]);

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
        ref={sliderRef}
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(${-currentIndex * 100}%)`,
          transition: isTransitioning
            ? `transform ${transitionDuration}ms ease-in-out`
            : "none", // Disable transition when jumping
        }}
      >
        {/* Render the slides */}
        {slides.map((offer, index) => (
          <div key={index} className="flex-shrink-0 w-full">
            <img src={offer.img} alt="Offer" className="w-full" />
          </div>
        ))}
      </div>

      {showArrows && (
        <div className="absolute bottom-0 left-[10%] md:left-[20%] z-10 flex items-center">
          <button
            className="py-0 px-4 lg:py-2 lg:px-6 text-white  rounded-l rounded-tr-[30px] rounded-bl-[30px] hover:text-orange-600 transition-all duration-300"
            disabled={isButtonDisabled}
            onClick={prevSlide}
          >
            <CgArrowLongLeft className="size-10" />
          </button>
        </div>
      )}
      {showArrows && (
        <div className="absolute bottom-0 right-[10%] md:right-[20%] z-10 flex items-center">
          <button
            className="py-0 px-4 lg:py-2 lg:px-6 text-white  rounded-r  rounded-tl-[30px] rounded-br-[30px] hover:scale-100 hover:text-orange-600 transition-all duration-300"
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

export default Slider;
