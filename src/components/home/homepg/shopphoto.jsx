import React from 'react';
import Image01 from "../../../assets/images/iloveimg-resized/c1.jpg";
import Image02 from "../../../assets/images/iloveimg-resized/c5.jpg";
import Image03 from "../../../assets/images/iloveimg-resized/c3.jpg";
import Image04 from "../../../assets/images/iloveimg-resized/c4.jpg";

const ShopPhoto = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    margin: '0px',
    width: '100%',
    position: 'relative', // This makes the label "Our Shop" positionable over the whole container
    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8))', // Gradient dark overlay
  };

  const photoContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0px', // Space between the photos
  };

  const photoItemStyle = {
    position: 'relative',
    width: '379px',  // Adjust the size of the squares
    height: '379px',
    overflow: 'hidden',
    borderRadius: '0px',
  };

  const labelStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    fontSize: '50px',  // Adjust font size for better visibility
    fontWeight: 'bold',
    textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)',
    zIndex: 1,  // Ensure the label appears above the images
    pointerEvents: 'none', // Allow interaction with images even when label is over them
  };

  const photoStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '0px',
  };

  return (
    <div style={containerStyle}>
      <div style={photoContainerStyle}>
        <div style={photoItemStyle}>
          <img src={Image01} alt="Shop 1" style={photoStyle} />
        </div>
        <div style={photoItemStyle}>
          <img src={Image02} alt="Shop 2" style={photoStyle} />
        </div>
        <div style={photoItemStyle}>
          <img src={Image03} alt="Shop 3" style={photoStyle} />
        </div>
        <div style={photoItemStyle}>
          <img src={Image04} alt="Shop 4" style={photoStyle} />
        </div>
      </div>
      <div style={labelStyle}>Our Shop</div> {/* Positioned here to appear over the whole set */}
    </div>
  );
};

export default ShopPhoto;
