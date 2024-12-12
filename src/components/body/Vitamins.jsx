import React from 'react';
import Slider from 'react-slick';

const Vitamins = () => {
  // Define a function to determine the color of the arrows
  const getArrowColor = () => {
    return {
      backgroundColor: 'black', // Default button background color
      color: 'black',            // Default arrow color
    };
  };

  const medicines = [
    { title: 'D-Vit 1000', description: 'Common vitamin D supplement for bone health and immune system support.' },
    { title: 'Cobadex CZS', description: 'A multivitamin supplement containing Vitamin B12, Vitamin C, and Zinc for energy and immunity.' },
    { title: 'Revital H', description: 'Popular multivitamin and mineral supplement that boosts energy and overall health.' },
    { title: 'A to Z Multivitamins', description: 'Comprehensive multivitamin supplement with vitamins A, C, D, E, and B-complex.' },
    { title: 'Zincovit', description: 'Zinc and multivitamin supplement that strengthens the immune system.' },
    { title: 'Calcium Sandoz', description: 'Calcium supplement combined with Vitamin D for strong bones and teeth.' },
    { title: 'Neuromet', description: 'Common vitamin B-complex supplement for nerve health and energy.' },
    { title: 'Becosule', description: 'Vitamin B-complex supplement for improving energy and managing stress.' },
    { title: 'Vitamin C 500mg', description: 'Vitamin C supplement to boost immunity and skin health, commonly used during cold and flu season.' },
];


  const settings = {
    infinite: true, // Enables infinite scrolling
    slidesToShow: 5, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at a time
    nextArrow: <div className="slick-next-custom" />, // Custom next arrow
    prevArrow: <div className="slick-prev-custom" />, // Custom prev arrow
  };

  return (
    <div className="container my-1">
      <p className="ms-5 fw-bold fs-4 mt-4">Vitamins</p>
      <Slider className='mx-5' {...settings}>
        {medicines.map((medicine, index) => (
          <div key={index} className="d-flex justify-content-center align-items-center ">
            <div
              className="bg-success text-center text-white p-3"
              style={{
                width: '200px',
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

export default Vitamins;
