import React from 'react';
import Slider from 'react-slick';

const GeneralMedicines = () => {
  // Define a function to determine the color of the arrows
  const getArrowColor = () => {
    return {
      backgroundColor: 'black', // Default button background color
      color: 'black',            // Default arrow color
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
    nextArrow: <div className="slick-next-custom" />, // Custom next arrow
    prevArrow: <div className="slick-prev-custom" />, // Custom prev arrow
  };

  return (
    <div className="container my-1">
      <p className="ms-3 fw-bold fs-4">General Medicines</p>
      <Slider {...settings}>
        {medicines.map((medicine, index) => (
          <div key={index} className="d-flex justify-content-center align-items-center">
            <div
              className="bg-success text-center text-white p-3"
              style={{
                width: '300px',
                height: '200px',
                borderRadius: '15px', // Add curved corners here
              }}
            >
              <h5 className="card-title">{medicine.title}</h5>
              <p className="card-text">{medicine.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default GeneralMedicines;
