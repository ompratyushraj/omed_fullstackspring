import { useState } from "react";
import "./App.css";
import Navbar from "./components/header/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SubNavbar from "./components/header/SubNavbar";
import Carousel from "./components/body/Carousel";
import FeatureCategory from "./components/body/FeatureCategory";
import SlickSlider1 from "./components/body/PopularCategories";
import OrderComponent from "./components/body/OrderComponent";
import GeneralMedicines from "./components/body/GeneralMedicines";
import Vitamins from "./components/body/Vitamins";
import MedicatedCreams from "./components/body/MedicatedCreams";
import Electrolytes from "./components/body/Electrolytes";
import PainReliefs from "./components/body/PainReliefs";
import Nutritionals from "./components/body/Nutritionals";
import Orthopaedics from "./components/body/Orthopaedics";
import Devices from "./components/body/Devices";
import Brands from "./components/brands/Brands";
import PharmaDescription from "./components/footer/PharmaDescription"
import Footer from "./components/footer/footer";
import AdBanners01 from "./components/body/AdBanners01"

function App() {
  const [count, setCount] = useState(0);
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#000000";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#FFFFFF";
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="OMED"
          mode={mode}
          toggleMode={toggleMode}
          key={new Date()}
        />
        <SubNavbar />
        <Carousel />
        <AdBanners01 />
        <FeatureCategory />
        <SlickSlider1 />
        <OrderComponent />
        <GeneralMedicines />
        <Vitamins />
        <MedicatedCreams />
        <Electrolytes />
        <PainReliefs />
        {/* <AdBanners /> */}
        <Nutritionals />
        <Orthopaedics />
        <Devices />
        {/* <AdBanners /> */}
        <Brands />
        <PharmaDescription />

        {/* <h3 className='ms-5'>Food Suppliments</h3> */}
        {/* <h3 className='ms-5'>Baby Care </h3> */}
        {/* <h3 className='ms-5'>Hygiene Maintenance</h3> */}

        <Footer mode={mode} />

      </Router>
    </>
  );
}

export default App;
