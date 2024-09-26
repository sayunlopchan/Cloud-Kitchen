import { useState, useEffect, useRef } from 'react';
import OfferSlideData from '../../assets/Data/OfferSlideData';
import './OfferSlider.css';


import { CgArrowLongLeft } from "react-icons/cg";

const OfferSlider = () => {
  const offers = OfferSlideData; // Use the imported offer data
  const [currentIndex, setCurrentIndex] = useState(1); // Start at 1 (for the cloned slide)
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false); // State to disable buttons
  const slideRef = useRef(null);

  const totalSlides = offers.length;

  const nextSlide = () => {
    if (!isButtonDisabled) {
      setIsButtonDisabled(true); // Disable buttons

      if (currentIndex === totalSlides) {
        setCurrentIndex(currentIndex + 1); // Go to cloned first slide
        setTimeout(() => {
          setIsTransitioning(false); // Remove transition
          setCurrentIndex(1); // Jump to real first slide
        }, 500); // Match the transition duration
      } else {
        setIsTransitioning(true);
        setCurrentIndex(currentIndex + 1);
      }

      // Re-enable buttons after 1.5 seconds
      setTimeout(() => {
        setIsButtonDisabled(false);
      }, 1000);
    }
  };

  const prevSlide = () => {
    if (!isButtonDisabled) {
      setIsButtonDisabled(true); // Disable buttons

      if (currentIndex === 1) {
        setCurrentIndex(0); // Go to cloned last slide
        setTimeout(() => {
          setIsTransitioning(false); // Remove transition
          setCurrentIndex(totalSlides); // Jump to real last slide
        }, 500); // Match the transition duration
      } else {
        setIsTransitioning(true);
        setCurrentIndex(currentIndex - 1);
      }

      // Re-enable buttons after 1.5 seconds
      setTimeout(() => {
        setIsButtonDisabled(false);
      }, 1000);
    }
  };

  useEffect(() => {
    if (!isTransitioning) {
      setTimeout(() => {
        setIsTransitioning(true); // Restore transition
      }, 50); // Restore transition after a short delay
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
            transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none',
          }}
        >
          {/* Cloned Last Slide */}
          <div className="slide">
            <img src={offers[totalSlides - 1].img} alt={`Offer ${totalSlides}`} className="slide-image" />
          </div>

          {/* Actual Slides */}
          {offers.map((offer, index) => (
            <div key={index} className="slide">
              <img src={offer.img} alt={`Offer ${index + 1}`} className="slide-image" />
            </div>
          ))}

          {/* Cloned First Slide */}
          <div className="slide">
            <img src={offers[0].img} alt={`Offer 1`} className="slide-image" />
          </div>
        </div>
      </div>

      {/* btn */}
      <div className='btn-div'>
        <button
          className="arrow-button"
          disabled={isButtonDisabled}
          onClick={prevSlide}
        >
          <CgArrowLongLeft size={60} />
        </button>
        <button
          className="arrow-button"
          onClick={nextSlide}
          disabled={isButtonDisabled}
        >
          <CgArrowLongLeft size={60} />
        </button>
      </div>
      {/* btn */}
    </div>
  );
};

export default OfferSlider;
