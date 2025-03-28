import React from 'react';
import Slider from 'react-slick';
import { useMode } from '../../../contexts/ModeContext'; // Import the custom hook for mode context

// Import the images for light and dark modes
import FC1 from "../../../assets/images/Banners/GeneralMedicines01.png"; // Light Mode image
import FC2 from "../../../assets/images/Banners/GeneralMedicines02.png"; // Dark Mode image

const GeneralMedicines = () => {
  const { mode } = useMode(); // Get the current mode from the context

  // Define a function to determine the color of the arrows
  const getArrowColor = () => {
    return {
      backgroundColor: mode === "dark" ? "#FFFFFF" : "#000000", // Arrow background color based on mode
      color: mode === "dark" ? "#000000" : "#FFFFFF",           // Arrow color based on mode
    };
  };

  // Array of objects containing title and description for each medicine
  const medicines = [
    { title: 'Aspirin', description: 'Pain reliever and anti-inflammatory medication.' },
    { title: 'Ibuprofen', description: 'Reduces fever and treats pain and inflammation.' },
    { title: 'Paracetamol', description: 'Common painkiller used for headaches and fever.' },
    { title: 'Amoxicillin', description: 'Antibiotic used to treat infections caused by bacteria.' },
    { title: 'Vitamin C', description: 'Vitamin supplement that boosts immune system.' },
    { title: 'Antacid', description: 'Relieves heartburn and indigestion.' },
    { title: 'Loratadine', description: 'Antihistamine used to treat allergies.' },
    { title: 'Cough Syrup', description: 'Helps soothe the throat and reduce coughing.' },
    { title: 'Insulin', description: 'Hormone used to treat diabetes by regulating blood sugar.' },
  ];

  const settings = {
    infinite: true, // Enables infinite scrolling
    slidesToShow: 4, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at a time
    nextArrow: <div className="slick-next-custom" style={getArrowColor()} />, // Custom next arrow
    prevArrow: <div className="slick-prev-custom" style={getArrowColor()} />, // Custom prev arrow
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
    <div className="container my-1">
      <p className="ms-3" style={textStyle}>General Medicines</p>
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
                  border: '1px solid', // Add border to the slick items
                  borderColor: mode === "light" ? '#E5E4E2' : '#333', // Border color based on mode
                }} 
              ></div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default GeneralMedicines;
