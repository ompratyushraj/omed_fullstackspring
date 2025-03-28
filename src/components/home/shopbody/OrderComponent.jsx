import React from "react";
import { useMode } from "../../../contexts/ModeContext"; // Import the custom hook for mode context

const OrderComponent = () => {
  const { mode } = useMode(); // Get the current mode from the context

  // Set styles dynamically based on the mode
  const cardStyle = {
    width: "35rem",
    height: "10rem",
    backgroundColor: mode === "light" ? "#fff" : "#333", // Light background for light mode, dark for dark mode
    color: mode === "light" ? "#000" : "#fff", // Black text in light mode, white text in dark mode
    borderColor: mode === "light" ? "#ccc" : "#555", // Lighter borders in light mode, darker borders in dark mode
  };

  const buttonStyle = {
    backgroundColor: mode === "light" ? "#007bff" : "#555", // Blue button in light mode, dark gray in dark mode
    color: "#fff", // Button text remains white
  };

  return (
    <>
      <div className="container mt-5 pt-2">
        <div className="row justify-content-center pt-2">
          <div className="card text-center mb-3 mx-3" style={cardStyle}>
            <div className="card-body">
              <h5 className="card-title">Order By Prescription</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional content.
              </p>
              <a href="#" className="btn" style={buttonStyle}>
                Click Here
              </a>
            </div>
          </div>
          <div className="card text-center mb-3 mx-3" style={cardStyle}>
            <div className="card-body">
              <h5 className="card-title">Re-Order Medicines</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional content.
              </p>
              <a href="#" className="btn" style={buttonStyle}>
                Click Here
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderComponent;
