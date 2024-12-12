import React from "react";

const OrderComponent = () => {
  return (
    <>
      <div className="container mt-5 pt-2">
        <div className="row justify-content-center pt-2">
        <div className="card text-center mb-3 mx-3" style={{ width: "35rem", height: "10rem" }}>
          <div className="card-body">
            <h5 className="card-title">Order By Prescription</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional content.
            </p>
            <a href="#" className="btn btn-primary">
              Click Here
            </a>
          </div>
        </div>
        <div className="card text-center mb-3 mx-3" style={{ width: "35rem", height: "10rem" }}>
          <div className="card-body">
            <h5 className="card-title">Re-Order Medicines</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional content.
            </p>
            <a href="#" className="btn btn-primary">
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
