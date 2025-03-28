// ProductDetails.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'; // Import axios for HTTP requests

const ProductDetails = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track error state

  useEffect(() => {
    // Fetch product details from the backend
    axios
      .get(`/api/products/${productId}`)
      .then((response) => {
        setProduct(response.data); // Set the product data
        setLoading(false); // Stop loading
      })
      .catch((err) => {
        setError("Failed to fetch product details"); // Handle error
        setLoading(false); // Stop loading
      });
  }, [productId]);

  const handleGoBack = () => {
    navigate(-1);
  };

  if (loading) {
    return <p>Loading...</p>; // Show loading text while fetching data
  }

  if (error) {
    return <p>{error}</p>; // Show error message if request fails
  }

  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-md-6">
          <img
            src={product?.urlToImage} 
            alt={product?.productname}
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h2>{product?.productname}</h2>
          <p><strong>Description: </strong>{product?.description}</p>
          <p><strong>Price: </strong>{product?.price}</p>
          <p><strong>Composition: </strong>{product?.composition}</p>
          <p><strong>Brand: </strong>{product?.brand}</p>
          <p><strong>Summary Description: </strong>{product?.summaryDescription}</p>
          <p><strong>Full Description: </strong>{product?.fullDescription}</p>
          <p><strong>Manufacturing Date: </strong>{product?.manufacturingDate}</p>
          <p><strong>Expiry Date: </strong>{product?.expiryDate}</p>
          <p><strong>Usage: </strong>{product?.usage}</p>
          <button className="btn btn-outline-danger" onClick={handleGoBack}>
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
