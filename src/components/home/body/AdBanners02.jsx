import React from "react";
import Image from "../../../assets/images/Banners/Banners10.png"; // Import the image

const AdBanners02 = () => {
  const bannerStyle = {
    backgroundImage: `url(${Image})`, // Correctly setting the image as a background
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
    marginTop: "20px",
    height: "300px", // Adjust the height as needed
  };

  return (
    <div className="container mt-4 p-2 strict">
      <div className="row justify-content-end align-items-center" style={bannerStyle}>
        {/* Banner text content */}
        {/* <div className="col-md-4 text-center text-md-left text-white ">
          <button className="btn btn-light btn-lg fw-bold" style={{ height: "4rem", width: "20rem", borderRadius: "50px"}}>Click for ORDERING</button>
        </div> */}
      </div>
    </div>
  );
};

export default AdBanners02;
