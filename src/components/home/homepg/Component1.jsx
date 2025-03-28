import React from 'react';
import { useMode } from '../../../contexts/ModeContext';
import bgimage1L from "../../../assets/images/HomePG/OMED_Home01L.png";
import bgimage1D from "../../../assets/images/HomePG/OMED_Home01D.png";
import graphics01 from "../../../assets/images/HomePG/DOCGraphics02BGR.png";

const Component1 = () => {
  const { mode } = useMode();
  const bgImage = mode === 'light' ? bgimage1L : bgimage1D;
  const textColor = mode === 'light' ? 'black' : 'white';
  const cardBgColor = mode === 'light' ? '#ffffff' : '#000000';

  return (
    <div
      className="card d-flex justify-content-center align-items-center"
      style={{
        height: '100vh',
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="d-flex justify-content-between" style={{ width: '80%' }}>
        <div
          className="col-5 p-5"
          style={{ backgroundColor: cardBgColor }}
        >
          <h4 className="fs-3" style={{ color: textColor }}>YOUR OWN PHARMACY</h4>
          <p className="fw-bolder display-2" style={{ color: textColor }}>HEALTH IS THE REAL WEALTH</p>
          <p className="fw-bolder fs-4" style={{ color: textColor }}>Ensure your health with quality pharmaceutical products</p>
          <p className="lead" style={{ color: textColor,  letterSpacing: '4px' }}>Offering you every possible health product servicing</p>
        </div>
        <div className="col-5 d-flex justify-content-center align-items-center">
          <img
            src={graphics01}
            alt="Pharmacy"
            className="img-fluid rounded"
            style={{
              width: '100%',
              height: 'auto',
              transform: 'scale(1.2)',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Component1;
