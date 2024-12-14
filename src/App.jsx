import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom"; // Moved Router import
import "./App.css";
import AdBanners01 from "./components/body/AdBanners01";
import AdBanners02 from "./components/body/AdBanners02";
import AdBanners03 from "./components/body/AdBanners03";
import Brands from "./components/brands/Brands";
import Carousel from "./components/body/Carousel";
import Devices from "./components/body/Devices";
import Electrolytes from "./components/body/Electrolytes";
import Footer from "./components/footer/footer";
import GeneralMedicines from "./components/body/GeneralMedicines";
import HealthConcerns from "./components/body/HealthConcerns";
import MedicatedCreams from "./components/body/MedicatedCreams";
import Nutritionals from "./components/body/Nutritionals";
import Orthopaedics from "./components/body/Orthopaedics";
import OrderComponent from "./components/body/OrderComponent";
import PainReliefs from "./components/body/PainReliefs";
import PharmaDescription from "./components/footer/PharmaDescription";
import PopularCategories from "./components/body/PopularCategories";
import SubNavbar from "./components/header/SubNavbar";
import Navbar from "./components/header/Navbar";
import Vitamins from "./components/body/Vitamins";

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
        <AdBanners01 mode={mode} toggleMode={toggleMode} />
        <HealthConcerns mode={mode} />
        <PopularCategories mode={mode} />
        <OrderComponent />
        <GeneralMedicines mode={mode} />
        <Vitamins mode={mode} />
        <MedicatedCreams />
        <Electrolytes />
        <PainReliefs mode={mode} />
        <AdBanners02 />
        <Nutritionals />
        <Orthopaedics mode={mode} />
        <Devices />
        <AdBanners03 mode={mode} />
        <Brands />
        <PharmaDescription />
        <Footer mode={mode} />
      </Router>
    </>
  );
}

export default App;
