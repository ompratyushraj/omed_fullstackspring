import React from "react";
import Image01 from "../../assets/images/Banners/Banners01.png"; // Light mode image
import Image02 from "../../assets/images/Banners/Banners02.png"; // Dark mode image

const AdBanners01 = ({ mode }) => {
  // Select the appropriate image based on the mode
  const bannerImage = mode === "light" ? Image01 : Image02;

  const bannerStyle = {
    backgroundImage: `url(${bannerImage})`, // Set the background image dynamically
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: mode === "light" ? "black" : "white", // Set text color based on mode
    marginTop: "20px",
    height: "300px", // Adjust the height as needed
    borderRadius: "15px", // Add rounded corners
    transition: "background-image 0.3s ease-in-out, color 0.3s ease-in-out", // Smooth transition for background image and text color change
  };

  return (
    <div className="container mt-4 p-2 strict">
      <div className="row justify-content-end align-items-center" style={bannerStyle}>
        {/* Banner text content */}
        <div className="col-md-4 text-center text-md-left">
          <button 
            className="btn" 
            style={{ 
              height: "4rem", 
              width: "20rem", 
              borderRadius: "50px", 
              backgroundColor: mode === "light" ? "#000000" : "#ffffff", // Button color change based on mode
              color: mode === "light" ? "#ffffff" : "#000000", // Button text color change based on mode
              border: "none", 
              fontWeight: "bold"
            }}
          >
            Click for ORDERING
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdBanners01;
