import FC1 from "../../assets/images/fc1.jpeg";
import FC2 from "../../assets/images/fc2.jpeg";
import FC3 from "../../assets/images/fc3.jpeg";
import FC4 from "../../assets/images/fc4.jpeg";
import FC5 from "../../assets/images/fc5.jpeg";
import FC6 from "../../assets/images/fc6.jpeg";

import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const FeatureCategory = () => {
  const settings = {
    infinite: true, // Enables infinite scrolling
    speed: 600, // Speed of slide transition
    slidesToShow: 3, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at a time
    autoplay: true, // Auto-play the slides
    autoplaySpeed: 2000, // Speed of autoplay
  };

  // Array of images to be used for background
  const images = [FC1, FC2, FC3, FC4, FC5, FC6];

  return (
    <div className="container my-3">
      <p className='ms-3 fw-bold fs-4'>Health Concerns</p>
      <Slider {...settings}>
        {[...Array(9)].map((_, index) => {
          const imageIndex = index % images.length; // To loop through the images
          return (
            <div key={index} className="d-flex justify-content-center align-items-center">
              <div 
                className="bg-primary mx-3" 
                style={{
                  width: '430px', 
                  height: '200px', 
                  borderRadius: '15px',
                  backgroundImage: `url(${images[imageIndex]})`,
                  backgroundSize: 'cover', 
                  backgroundPosition: 'center',
                }} 
              ></div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default FeatureCategory;
