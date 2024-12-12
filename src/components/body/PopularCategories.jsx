import React from 'react';
import Slider from 'react-slick';

const SlickSlider1 = () => {
  const settings = {
    dots: true, // Enables dots navigation
    infinite: true, // Enables infinite scrolling
    speed: 500, // Speed of slide transition
    slidesToShow: 4, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at a time
    autoplay: true, // Auto-play the slides
    autoplaySpeed: 2000, // Speed of autoplay
  };

  return (
    <div className="container my-3">
        <p className='ms-3 fw-bold fs-4'>Popular Categories</p>
      <Slider {...settings}>
        {[...Array(9)].map((_, index) => (
          <div key={index} className="d-flex justify-content-center align-items-center">
            <div 
              className="bg-dark" 
              style={{ 
                width: '300px', 
                height: '200px',
                borderRadius: '100px' // Add curved corners here
              }} 
            ></div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlickSlider1;
