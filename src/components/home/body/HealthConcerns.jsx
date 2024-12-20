import React from "react";
import Slider from 'react-slick';
import { useMode } from "../../../contexts/ModeContext"; // Import the custom hook for mode context
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// Import the images for light and dark modes
import HC1 from "../../../assets/images/Banners/FeaturesCategories01.png"; // Light Mode image
import HC2 from "../../../assets/images/Banners/FeaturesCategories02.jpg"; // Dark Mode image

const HealthConcerns = () => {
  const { mode } = useMode(); // Get the current mode from the context

  const settings = {
    infinite: true, // Enables infinite scrolling
    speed: 600, // Speed of slide transition
    slidesToShow: 3, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at a time
    autoplay: true, // Auto-play the slides
    autoplaySpeed: 2000, // Speed of autoplay
  };

  // Based on the mode, choose the image
  const images = mode === "light" ? [HC1] : [HC2];

  // Conditionally set styles for the p tag based on the mode
  const textStyle = {
    color: mode === "light" ? "#000000" : "#FFFFFF", // Light mode text is black, dark mode text is white
    fontWeight: "bold",
    fontSize: "1.25rem",
  };

  return (
    <div className="container my-3">
      <p className='ms-3' style={textStyle}>Health Concerns</p>
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

export default HealthConcerns;
