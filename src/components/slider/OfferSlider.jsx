// components/OfferSlider.js
import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { CgArrowLongLeft } from "react-icons/cg";
import { setActiveImage } from '../../store/offerSlice';
import './OfferSlider.css';

const OfferSlider = ({
  offers, // Pass offers data as a prop
  autoSlide = false, // Optional auto-sliding feature
  autoSlideInterval = 5000, // Auto-slide interval, default is 5 seconds
  transitionDuration = 500, // Slide transition duration in milliseconds
  disableButtonDuration = 1000, // Button disable duration
  showArrows = true, // Show or hide arrows
}) => {
  const dispatch = useDispatch(); // Initialize useDispatch
  const [currentIndex, setCurrentIndex] = useState(1); // Start at the first real slide (after the clone)
  const [isTransitioning, setIsTransitioning] = useState(true); // Manage smooth transitions
  const [isButtonDisabled, setIsButtonDisabled] = useState(false); // Disable buttons during slide transition
  const slideRef = useRef(null); // Reference to the slider container

  const totalSlides = offers.length;

  const nextSlide = () => {
    if (!isButtonDisabled) {
      setIsButtonDisabled(true); // Disable buttons during transition

      if (currentIndex === totalSlides) {
        setCurrentIndex(currentIndex + 1); // Move to the cloned first slide
        setTimeout(() => {
          setIsTransitioning(false); // Disable transition for instant jump
          setCurrentIndex(1); // Jump back to the real first slide
          dispatch(setActiveImage(offers[0].img)); // Dispatch active image when resetting to first slide
        }, transitionDuration); // After transition ends
      } else {
        setIsTransitioning(true); // Enable transition
        setCurrentIndex(currentIndex + 1); // Move to the next slide
        dispatch(setActiveImage(offers[currentIndex].img)); // Dispatch current slide's image
      }

      setTimeout(() => {
        setIsButtonDisabled(false); // Re-enable buttons after a delay
      }, disableButtonDuration); // Delay based on the transition time
    }
  };

  const prevSlide = () => {
    if (!isButtonDisabled) {
      setIsButtonDisabled(true); // Disable buttons during transition

      if (currentIndex === 1) {
        setCurrentIndex(0); // Move to the cloned last slide
        setTimeout(() => {
          setIsTransitioning(false); // Disable transition for instant jump
          setCurrentIndex(totalSlides); // Jump back to the real last slide
          dispatch(setActiveImage(offers[totalSlides - 1].img)); // Dispatch active image when resetting to last slide
        }, transitionDuration); // After transition ends
      } else {
        setIsTransitioning(true); // Enable transition
        setCurrentIndex(currentIndex - 1); // Move to the previous slide
        dispatch(setActiveImage(offers[currentIndex - 2].img)); // Dispatch previous slide's image
      }

      setTimeout(() => {
        setIsButtonDisabled(false); // Re-enable buttons after a delay
      }, disableButtonDuration); // Delay based on the transition time
    }
  };

  // Auto-slide effect if enabled
  useEffect(() => {
    if (autoSlide) {
      const slideInterval = setInterval(() => {
        nextSlide();
      }, autoSlideInterval);
      return () => clearInterval(slideInterval); // Cleanup interval on unmount
    }
  }, [currentIndex, autoSlide, autoSlideInterval]);

  // Reset transitioning to true after instant jump
  useEffect(() => {
    if (!isTransitioning) {
      setTimeout(() => {
        setIsTransitioning(true); // Restore transition for future slides
      }, 50); // Slight delay to avoid flickering
    }
  }, [isTransitioning]);

  return (
    <div className="slider-container">
      <div className="slider-content-wrapper">
        <div
          ref={slideRef}
          className="slider-content"
          style={{
            transform: `translateX(${-currentIndex * 100}%)`,
            transition: isTransitioning ? `transform ${transitionDuration}ms ease-in-out` : 'none',
          }}
        >
          {/* Cloned Last Slide (for infinite loop effect) */}
          <div className="slide">
            <img src={offers[totalSlides - 1].img} alt={`Offer ${totalSlides}`} className="slide-image" />
          </div>

          {/* Actual Slides */}
          {offers.map((offer, index) => (
            <div key={index} className="slide">
              <img src={offer.img} alt={`Offer ${index + 1}`} className="slide-image" />
            </div>
          ))}

          {/* Cloned First Slide (for infinite loop effect) */}
          <div className="slide">
            <img src={offers[0].img} alt={`Offer 1`} className="slide-image" />
          </div>
        </div>
      </div>

      {/* Arrow buttons (optional based on props) */}
      {showArrows && (
        <div className="btn-div">
          <button
            className="arrow-button"
            disabled={isButtonDisabled}
            onClick={prevSlide}
          >
            <CgArrowLongLeft className="arrow" />
          </button>
          <button
            className="arrow-button"
            onClick={nextSlide}
            disabled={isButtonDisabled}
          >
            <CgArrowLongLeft className="arrow" />
          </button>
        </div>
      )}
    </div>
  );
};

export default OfferSlider;
