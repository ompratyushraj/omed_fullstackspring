// src/components/Products.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Products = () => {
  const [products, setProducts] = useState([]);

  // Fetch products from the Spring Boot backend API
  useEffect(() => {
    axios
      .get('http://localhost:8080/api/products') // Adjust the URL according to your Spring Boot backend configuration
      .then((response) => {
        setProducts(response.data); // Store the product data in state
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div className="container mt-5 mb-5 ">
      <h1 className="text-center mb-4">Product List</h1>

      <div style={{ overflowX: 'auto' }}>
        <table className="table table-bordered table-striped" style={{ minWidth: '100%' }}>
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Particulars</th>
              <th>HSN Code</th>
              <th>Batch Number</th>
              <th>Pack</th>
              <th>Pack Type</th>
              <th>Manufacturer</th>
              <th>Expiry Date</th>
              <th>Quantity in Stock</th>
              <th>Unit Price</th>
              <th>MRP</th>
              <th>GST Rate</th>
              <th>Net Price</th>
              <th>Total Value</th>
              <th>Invoice No</th>
              <th>Invoice Date</th>
              <th>Supplier Name</th>
              <th>Supplier Contact</th>
              <th>Supplier Address</th>
              <th>Storage Location</th>
              <th>Reorder Level</th>
              <th>Category</th>
              <th>Price</th>
              <th>Composition</th>
              <th>Brand</th>
              <th>Summary Description</th>
              <th>Full Description</th>
              <th>Manufacturing Date</th>
              <th>Usage Type</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.productID}>
                <td>{product.productID}</td>
                <td>{product.particulars}</td>
                <td>{product.hsnCode}</td>
                <td>{product.batchNumber}</td>
                <td>{product.pack}</td>
                <td>{product.packType}</td>
                <td>{product.manufacturer}</td>
                <td>{product.expiryDate}</td>
                <td>{product.quantityInStock}</td>
                <td>{product.unitPrice}</td>
                <td>{product.mrp}</td>
                <td>{product.gstRate}</td>
                <td>{product.netPrice}</td>
                <td>{product.totalValue}</td>
                <td>{product.invoiceNo}</td>
                <td>{product.invoiceDate}</td>
                <td>{product.supplierName}</td>
                <td>{product.supplierContact}</td>
                <td>{product.supplierAddress}</td>
                <td>{product.storageLocation}</td>
                <td>{product.reorderLevel}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td>{product.composition}</td>
                <td>{product.brand}</td>
                <td>{product.summaryDescription}</td>
                <td>{product.fullDescription}</td>
                <td>{product.manufacturingDate}</td>
                <td>{product.usage_type}</td>
                <td>{product.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
