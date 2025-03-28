import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './ProductDataEntry.css';

const ProductDataEntry = () => {
  const [productData, setProductData] = useState({
    productID: '',
    particulars: '',
    hsnCode: '',
    batchNumber: '',
    pack: '',
    packType: '',
    manufacturer: '',
    expiryDate: '',
    quantityInStock: '',
    unitPrice: '',
    mrp: '',
    gstRate: '',
    netPrice: '',
    totalValue: '',
    invoiceNo: '',
    invoiceDate: '',
    supplierName: '',
    supplierContact: '',
    supplierAddress: '',
    storageLocation: '',
    reorderLevel: '',
    category: '',
    price: '',
    composition: '',
    brand: '',
    summaryDescription: '',
    fullDescription: '',
    manufacturingDate: '',
    notes: '',
  });

  const [products, setProducts] = useState([]); // New state for holding fetched products
  const [loading, setLoading] = useState(true); // To track loading state
  const [error, setError] = useState(null); // To track error state

  // Fetch products from the backend
  useEffect(() => {
    axios
      .get('http://localhost:8080/api/products') // Fetch all products from backend
      .then((response) => {
        setProducts(response.data); // Set fetched products to state
        setLoading(false); // Set loading to false
      })
      .catch((error) => {
        setError('There was an error fetching the product data'); // Set error message
        setLoading(false); // Set loading to false
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8080/api/products', productData)
      .then((response) => {
        console.log('Product Data Submitted:', response.data);
        alert('Product successfully added!');
      })
      .catch((error) => {
        console.error('There was an error adding the product!', error);
        alert('Error adding product');
      });
  };

  const handleKeyPress = (e, nextFieldId) => {
    if (e.key === 'Enter') {
      const nextField = document.getElementById(nextFieldId);
      if (nextField) {
        nextField.focus();
      }
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Product Data Entry</h1>
      
      {/* Display products fetched from backend */}
      <h3>Products List</h3>
      {loading ? (
        <p>Loading products...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div>
          <ul>
            {products.map((product) => (
              <li key={product.productID}>
                <strong>{product.productID} - {product.particulars}</strong> 
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Product data entry form */}
      <form onSubmit={handleSubmit}>
        {/* Form rows for entering new product data */}
        <div className="row mb-3">
          <div className="col-md-6">
            <label>Particulars:</label>
            <input
              type="text"
              name="particulars"
              className="form-control"
              value={productData.particulars}
              onChange={handleChange}
              onKeyDown={(e) => handleKeyPress(e, 'hsnCode')}
              required
            />
          </div>
        </div>
        
        {/* Row 2 */}
        <div className="row mb-3">
          <div className="col-md-6">
            <label>HSN Code:</label>
            <input
              type="text"
              name="hsnCode"
              className="form-control"
              value={productData.hsnCode}
              onChange={handleChange}
              onKeyDown={(e) => handleKeyPress(e, 'batchNumber')}
            />
          </div>
          <div className="col-md-6">
            <label>Batch Number:</label>
            <input
              type="text"
              name="batchNumber"
              className="form-control"
              value={productData.batchNumber}
              onChange={handleChange}
              onKeyDown={(e) => handleKeyPress(e, 'pack')}
            />
          </div>
        </div>

        {/* Row 3 */}
        <div className="row mb-3">
          <div className="col-md-6">
            <label>Pack:</label>
            <input
              type="text"
              name="pack"
              className="form-control"
              value={productData.pack}
              onChange={handleChange}
              onKeyDown={(e) => handleKeyPress(e, 'packType')}
            />
          </div>
          <div className="col-md-6">
            <label>Pack Type:</label>
            <input
              type="text"
              name="packType"
              className="form-control"
              value={productData.packType}
              onChange={handleChange}
              onKeyDown={(e) => handleKeyPress(e, 'manufacturer')}
            />
          </div>
        </div>

        {/* Row 4 */}
        <div className="row mb-3">
          <div className="col-md-6">
            <label>Manufacturer:</label>
            <input
              type="text"
              name="manufacturer"
              className="form-control"
              value={productData.manufacturer}
              onChange={handleChange}
              onKeyDown={(e) => handleKeyPress(e, 'expiryDate')}
            />
          </div>
          <div className="col-md-6">
            <label>Expiry Date:</label>
            <input
              type="month"
              name="expiryDate"
              className="form-control"
              value={productData.expiryDate}
              onChange={handleChange}
              onKeyDown={(e) => handleKeyPress(e, 'quantityInStock')}
            />
          </div>
        </div>

        {/* Row 5 */}
        <div className="row mb-3">
          <div className="col-md-6">
            <label>Quantity in Stock:</label>
            <input
              type="number"
              name="quantityInStock"
              className="form-control"
              value={productData.quantityInStock}
              onChange={handleChange}
              onKeyDown={(e) => handleKeyPress(e, 'unitPrice')}
            />
          </div>
          <div className="col-md-6">
            <label>Unit Price:</label>
            <input
              type="number"
              step="0.01"
              name="unitPrice"
              className="form-control"
              value={productData.unitPrice}
              onChange={handleChange}
              onKeyDown={(e) => handleKeyPress(e, 'mrp')}
            />
          </div>
        </div>

        {/* Row 6 */}
        <div className="row mb-3">
          <div className="col-md-6">
            <label>MRP:</label>
            <input
              type="number"
              step="0.01"
              name="mrp"
              className="form-control"
              value={productData.mrp}
              onChange={handleChange}
              onKeyDown={(e) => handleKeyPress(e, 'gstRate')}
            />
          </div>
          <div className="col-md-6">
            <label>GST Rate (%):</label>
            <input
              type="number"
              name="gstRate"
              className="form-control"
              value={productData.gstRate}
              onChange={handleChange}
              onKeyDown={(e) => handleKeyPress(e, 'netPrice')}
            />
          </div>
        </div>

        {/* Row 7 */}
        <div className="row mb-3">
          <div className="col-md-6">
            <label>Net Price:</label>
            <input
              type="number"
              step="0.01"
              name="netPrice"
              className="form-control"
              value={productData.netPrice}
              onChange={handleChange}
              onKeyDown={(e) => handleKeyPress(e, 'totalValue')}
            />
          </div>
          <div className="col-md-6">
            <label>Total Value:</label>
            <input
              type="number"
              step="0.01"
              name="totalValue"
              className="form-control"
              value={productData.totalValue}
              onChange={handleChange}
              onKeyDown={(e) => handleKeyPress(e, 'invoiceNo')}
            />
          </div>
        </div>

        {/* Row 8 */}
        <div className="row mb-3">
          <div className="col-md-6">
            <label>Invoice No:</label>
            <input
              type="text"
              name="invoiceNo"
              className="form-control"
              value={productData.invoiceNo}
              onChange={handleChange}
              onKeyDown={(e) => handleKeyPress(e, 'invoiceDate')}
            />
          </div>
          <div className="col-md-6">
            <label>Invoice Date:</label>
            <input
              type="date"
              name="invoiceDate"
              className="form-control"
              value={productData.invoiceDate}
              onChange={handleChange}
              onKeyDown={(e) => handleKeyPress(e, 'supplierName')}
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="d-flex justify-content-center align-items-center flex-column">
          <button type="submit" className="btn btn-primary btn-block mt-5 w-50">
            Submit
          </button>

          <Link to={`/products`} className="btn btn-primary m-5 w-50">
            All Products
          </Link>
        </div>

      </form>
    </div>
  );
};

export default ProductDataEntry;
