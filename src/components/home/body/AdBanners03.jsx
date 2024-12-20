import React from "react";
import { useMode } from "../../../contexts/ModeContext"; // Import the custom hook to access mode context
import Image01 from "../../../assets/images/Banners/Banners071.gif"; // Light mode image
import Image02 from "../../../assets/images/Banners/Banners072.gif"; // Dark mode image

const AdBanners03 = () => {
  const { mode } = useMode(); // Access the current mode from context

  // Select the appropriate image based on the mode
  const selectedImage = mode === "dark" ? Image02 : Image01;

  const bannerStyle = {
    backgroundImage: `url(${selectedImage})`, // Set background image based on mode
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: mode === "dark" ? "white" : "black", // Change text color based on mode
    marginTop: "20px",
    height: "350px", // Adjust the height as needed
  };

  return (
    <div className="container mt-4 p-2 strict">
      <div className="row justify-content-end align-items-center" style={bannerStyle}>
        {/* Banner text content */}
        {/* <div className="col-md-4 text-center text-md-left text-white ">
          <button className="btn btn-light btn-lg fw-bold" style={{ height: "4rem", width: "20rem", borderRadius: "50px" }}>Click for ORDERING</button>
        </div> */}
      </div>
    </div>
  );
};

export default AdBanners03;
