import React from 'react';
import Slider from 'react-slick';
import { useMode } from "../../../contexts/ModeContext"; // Import the custom hook

// Import the images for light and dark modes
import FC1 from '../../../assets/images/Banners/PopularCategories01.png'; // Light Mode image
import FC2 from '../../../assets/images/Banners/PopularCategories02.png'; // Dark Mode image

const PopularCategories = () => {
  // Access the current mode from the context
  const { mode } = useMode();

  const settings = {
    dots: true, // Enables dots navigation
    infinite: true, // Enables infinite scrolling
    speed: 500, // Speed of slide transition
    slidesToShow: 4, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at a time
    autoplay: true, // Auto-play the slides
    autoplaySpeed: 2000, // Speed of autoplay
  };

  // Based on the mode, choose the image
  const images = mode === "light" ? [FC1] : [FC2];

  // Conditionally set styles for the p tag based on the mode
  const textStyle = {
    color: mode === "light" ? "#000000" : "#FFFFFF", // Light mode text is black, dark mode text is white
    fontWeight: "bold",
    fontSize: "1.25rem",
  };

  return (
    <div className="container my-3">
      <p className='ms-3' style={textStyle}>Popular Categories</p>
      <Slider {...settings}>
        {[...Array(9)].map((_, index) => {
          const imageIndex = index % images.length; // To loop through the images
          return (
            <div key={index} className="d-flex justify-content-center align-items-center">
              <div 
                className="bg-dark" 
                style={{ 
                  width: '300px', 
                  height: '200px',
                  borderRadius: '100px', // Curved corners
                  backgroundImage: `url(${images[imageIndex]})`, 
                  backgroundSize: 'cover', 
                  backgroundPosition: 'center',
                  border: '1px solid', // Add border to the slick items
                  borderColor: '#E5E4E2',
                }} 
              ></div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default PopularCategories;
