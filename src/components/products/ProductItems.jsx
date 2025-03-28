// ProductItems.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductItems = () => {
  const [products, setProducts] = useState([]);

  // Fetch products from the Spring Boot backend API
  useEffect(() => {
    axios
      .get('http://localhost:8080/api/products') // Update the URL according to your Spring Boot controller path
      .then((response) => {
        setProducts(response.data); // Store the product data in state
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div className="container my-4">
      <h2>Product List</h2>
      <div className="row">
        {products.map((product) => (
          <div key={product.productID} className="col-md-4 mb-4">
            <div className="card">
              <img src={product.urlToImage} alt={product.particulars} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{product.particulars}</h5>
                <p className="card-text">{product.summaryDescription}</p>
                <p><strong>Price: </strong>{product.price}</p>
                <Link to={`/product-details/${product.productID}`} className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductItems;
