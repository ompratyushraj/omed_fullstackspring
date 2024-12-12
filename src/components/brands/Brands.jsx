import React from 'react';

// CategorySection Component to handle dynamic sections
const CategorySection = ({ categoryName, brands }) => {
  return (
    <div className="col-12 col-md-3 px-3">
      <h5 className="h5 mb-3">{categoryName}</h5>
      <ul className="list-unstyled">
        {brands.map((brand, index) => (
          <li key={index} className="mb-2">
            <a href="/" className="text-light text-decoration-none">{brand}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

// React Functional Component
const Brands = () => {
  // Define the data for each category and its brands
  const medicineBrands = [
    "Cipla", "Sun Pharma", "Dr. Reddy's Laboratories", "Lupin", "Aurobindo Pharma",
    "Glenmark Pharmaceuticals", "Mylan Laboratories", "Alkem Laboratories", "Cadila Healthcare", 
    "Abbott Laboratories", "Biocon", "Wockhardt", "Torrent Pharmaceuticals", "Janssen Pharmaceuticals", "Zydus Cadila"
  ];

  const foodSupplementsBrands = [
    "MuscleBlaze", "Healthkart", "GNC", "Dabur", "Amway Nutrilite", 
    "Organic India", "Herbalife", "B Natural", "Naturyz", "TrueBasics"
  ];

  const orthopedicBrands = [
    "Tynor", "Portea", "Bauerfeind", "Healthgenie", "Vissco",
    "Nobel Orthopedics", "Dyna Medical", "GMS Ortho", "Ezycare", "Nivamed"
  ];

  // const newCategoryBrands = [
  //   "Brand A", "Brand B", "Brand C"  // Example for a new category
  // ];

  // Return the main Brands section
  return (
    <div className="bg-black text-light py-5 position-relative mt-5">
      <div className="container">
        <div className="row">
          {/* Static section for "Brands We Sell" */}
          <div className="col-12 col-md-3 px-3">
            <h5 className="h3 mb-3 fs-1">Brands</h5>
            <h5 className="h3 mb-3 fs-1">We</h5>
            <h5 className="h3 mb-3 fs-1">Sell</h5>
          </div>

          {/* Use CategorySection to add sections dynamically */}
          <CategorySection categoryName="Medicine Brands" brands={medicineBrands} />
          <CategorySection categoryName="Food Supplements" brands={foodSupplementsBrands} />
          <CategorySection categoryName="Orthopedic Brands" brands={orthopedicBrands} />
        </div>

        {/* Row for the new category section beneath Medicine Brands */}
        {/* <div className="row mt-4">
          <CategorySection categoryName="New Category" brands={newCategoryBrands} />
        </div> */}
      </div>
    </div>
  );
};

export default Brands;
