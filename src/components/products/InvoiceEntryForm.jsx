import React, { useState } from 'react';
import axios from 'axios';

const InvoiceForm = () => {
  const [invoiceData, setInvoiceData] = useState({
    invoiceno: '',
    wname: '',
    waddress: '',
    wpno: '',
    createdat: '',
    product: {  // Now, this is a single product instead of an array
      hsn: '',
      particulars: '',
      batch: '',
      mfdmkt: '',
      qty: '',
      packqty: '',
      packtype: '',
      expiry: '',
      rate: '',
      amount: '',
    },
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInvoiceData({
      ...invoiceData,
      product: {
        ...invoiceData.product,
        [name]: value,
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/invoices', invoiceData);
      console.log('Invoice saved:', response.data);
      // Reset form or show success message
      setInvoiceData({
        invoiceno: '',
        wname: '',
        waddress: '',
        wpno: '',
        createdat: '',
        product: {
          hsn: '',
          particulars: '',
          batch: '',
          mfdmkt: '',
          qty: '',
          packqty: '',
          packtype: '',
          expiry: '',
          rate: '',
          amount: '',
        },
      });
      alert('Invoice saved successfully');
    } catch (error) {
      console.error('There was an error saving the invoice:', error);
      setError('Failed to save invoice. Please try again.');
    }
  };

  return (
    <div className="invoice-form-container">
      <h2>Create Invoice</h2>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="invoiceno">Invoice No</label>
          <input
            type="number"
            id="invoiceno"
            name="invoiceno"
            value={invoiceData.invoiceno}
            onChange={(e) => setInvoiceData({ ...invoiceData, invoiceno: e.target.value })}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="wname">Wholesaler Name</label>
          <input
            type="text"
            id="wname"
            name="wname"
            value={invoiceData.wname}
            onChange={(e) => setInvoiceData({ ...invoiceData, wname: e.target.value })}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="waddress">Wholesaler Address</label>
          <input
            type="text"
            id="waddress"
            name="waddress"
            value={invoiceData.waddress}
            onChange={(e) => setInvoiceData({ ...invoiceData, waddress: e.target.value })}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="wpno">Wholesaler Phone</label>
          <input
            type="text"
            id="wpno"
            name="wpno"
            value={invoiceData.wpno}
            onChange={(e) => setInvoiceData({ ...invoiceData, wpno: e.target.value })}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="createdat">Created At</label>
          <input
            type="datetime-local"
            id="createdat"
            name="createdat"
            value={invoiceData.createdat}
            onChange={(e) => setInvoiceData({ ...invoiceData, createdat: e.target.value })}
            required
          />
        </div>

        <h3>Product</h3>
        <div className="product-group">
          <div className="form-group">
            <label htmlFor="hsn">HSN</label>
            <input
              type="text"
              id="hsn"
              name="hsn"
              value={invoiceData.product.hsn}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="particulars">Particulars</label>
            <input
              type="text"
              id="particulars"
              name="particulars"
              value={invoiceData.product.particulars}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="batch">Batch</label>
            <input
              type="text"
              id="batch"
              name="batch"
              value={invoiceData.product.batch}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="mfdmkt">MFD/MKT</label>
            <input
              type="text"
              id="mfdmkt"
              name="mfdmkt"
              value={invoiceData.product.mfdmkt}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="qty">Quantity</label>
            <input
              type="number"
              id="qty"
              name="qty"
              value={invoiceData.product.qty}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="packqty">Pack Quantity</label>
            <input
              type="number"
              id="packqty"
              name="packqty"
              value={invoiceData.product.packqty}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="packtype">Pack Type</label>
            <input
              type="text"
              id="packtype"
              name="packtype"
              value={invoiceData.product.packtype}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="expiry">Expiry Date</label>
            <input
              type="datetime-local"
              id="expiry"
              name="expiry"
              value={invoiceData.product.expiry}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="rate">Rate</label>
            <input
              type="number"
              step="0.01"
              id="rate"
              name="rate"
              value={invoiceData.product.rate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              step="0.01"
              id="amount"
              name="amount"
              value={invoiceData.product.amount}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <button type="submit" className="submit-btn">Submit Invoice</button>
      </form>

      <style>
        {`
          .invoice-form-container {
            font-family: Arial, sans-serif;
            padding: 20px;
            max-width: 800px;
            margin: 0 auto;
          }

          .form-group {
            margin-bottom: 15px;
          }

          .form-group label {
            display: block;
            font-size: 14px;
            margin-bottom: 5px;
          }

          .form-group input {
            width: 100%;
            padding: 8px;
            font-size: 14px;
            border: 1px solid #ccc;
            border-radius: 4px;
            background-color: white;
          }

          .product-group {
            margin-bottom: 20px;
            padding: 15px;
            border: 1px solid #ccc;
            border-radius: 4px;
          }

          .submit-btn {
            background-color: #4CAF50;
            color: white;
            padding: 10px 20px;
            font-size: 16px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          }

          .submit-btn:hover {
            background-color: #45a049;
          }

          .error-message {
            color: red;
            margin-bottom: 15px;
          }
        `}
      </style>
    </div>
  );
};

export default InvoiceForm;
