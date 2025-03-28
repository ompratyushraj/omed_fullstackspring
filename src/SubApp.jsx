import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ModeProvider } from './contexts/ModeContext'; // Import the ModeProvider
import SubNavbar from "./components/header/SubNavbar";
import Navbar from "./components/header/Navbar";
import ShopHome from './components/home/ShopHome';
import ProductGrid from './components/products/ProductGrid';
import Footer from './components/footer/Footer';
import ProductDetails from './components/products/ProductDetails';
import About from './components/about/About';
import HomePage from './components/home/HomePage';
import ProductDataEntry from './components/products/ProductDataEntry';
import Products from './components/products/Products';  // Make sure to import Products
import InvoiceEntryForm from './components/products/InvoiceEntryForm';

function SubApp() {
  return (
    <ModeProvider>
      <Router>
        <Navbar />
        <SubNavbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shophome" element={<ShopHome />} />
          <Route path="/productGrid" element={<ProductGrid />} />
          <Route path="/productDetails" element={<ProductDetails />} />
          <Route path="/product-details/:productId" element={<ProductDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/dataentry" element={<ProductDataEntry />} />
          <Route path="/invoiceentryform" element={<InvoiceEntryForm />} />
          <Route path="/products" element={<Products />} /> {/* Ensure this route is defined */}
        </Routes>
        <Footer />
      </Router>
    </ModeProvider>
  );
}

export default SubApp;
