import React from 'react';
import Slider from 'react-slick'; // Importing Slick Slider component
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import C1 from "../../assets/images/Banners/CarouselBanner01.png";
import C2 from "../../assets/images/Banners/CarouselBanner02.png";
import C3 from "../../assets/images/Banners/CarouselBanner03.png";

// Slick Slider settings
const settings = {
  infinite: true,          // Loop through slides infinitely
  speed: 1000,             // Transition speed
  slidesToShow: 1,         // Show one slide at a time
  slidesToScroll: 1,       // Scroll one slide at a time
  autoplay: true,          // Enable autoplay
  autoplaySpeed: 3000,     // Duration between slides
  arrows: true,            // Enable arrows for navigation
  dots: true,              // Show navigation dots
};

// Button styles and functions as objects
const buttonStyles = {
  common: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 2,
    background: 'rgba(0, 0, 0, 0)',
    color: 'white',
    border: 'none',
    padding: '10px',
    borderRadius: '50%',
    cursor: 'pointer',
  },
  prev: {
    left: '10px',
  },
  next: {
    right: '10px',
  },
};

const Carousel = ({ height = "500px" }) => {
  const handlePrevClick = () => {
    document.querySelector('.slick-prev').click(); // Trigger the slick-prev button programmatically
  };

  const handleNextClick = () => {
    document.querySelector('.slick-next').click(); // Trigger the slick-next button programmatically
  };

  return (
    <div style={{ height, overflow: 'hidden' }}>
      {/* Slick Slider with settings */}
      <Slider {...settings}>
        {/* Slide 1 */}
        <div>
          <img src={C1} alt="Image 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        {/* Slide 2 */}
        <div>
          <img src={C2} alt="Image 2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        {/* Slide 3 */}
        <div>
          <img src={C3} alt="Image 3" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </Slider>

      {/* Custom Navigation Buttons */}
      <button
        className="carousel-control-prev"
        type="button"
        onClick={handlePrevClick}
        style={{ ...buttonStyles.common, ...buttonStyles.prev }}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        onClick={handleNextClick}
        style={{ ...buttonStyles.common, ...buttonStyles.next }}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
      </button>
    </div>
  );
};

export default Carousel;
