import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ModeProvider } from './contexts/ModeContext'; // Import the ModeProvider
import Footer from "./components/footer/footer";
import SubNavbar from "./components/header/SubNavbar";
import Navbar from "./components/header/Navbar";
import ShopHome from './components/home/ShopHome';
import ProductGridSidebar from './components/productGrid/ProductGridSidebar';


function SubApp() {
  return (
    <ModeProvider>
      <Router>
        <Navbar />
        <SubNavbar />
        <Routes>
          <Route path="/shophome" element={<ShopHome />} />
          <Route path="/productGrid" element={<ProductGridSidebar />} />
        </Routes>
        <Footer />
      </Router>
    </ModeProvider>
  );
}

export default SubApp;
