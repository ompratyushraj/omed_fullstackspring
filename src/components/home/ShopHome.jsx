import React from 'react';
import Carousel from './shopbody/Carousel';
import AdBanners01 from './shopbody/AdBanners01';
import HealthConcerns from './shopbody/HealthConcerns';
import OrderComponent from './shopbody/OrderComponent';
import GeneralMedicines from './shopbody/GeneralMedicines';
import Vitamins from './shopbody/Vitamins';
import MedicatedCreams from './shopbody/MedicatedCreams';
import Electrolytes from './shopbody/Electrolytes';
import PainReliefs from './shopbody/PainReliefs';
import AdBanners02 from './shopbody/AdBanners02';
import Nutritionals from './shopbody/Nutritionals';
import Orthopaedics from './shopbody/Orthopaedics';
import Devices from './shopbody/Devices';
import AdBanners03 from './shopbody/AdBanners03';
import Brands from '../others/Brands';
import PharmaDescription from '../footer/PharmaDescription';
import PopularCategories from './shopbody/PopularCategories';

const ShopHome = () => {
  return (
    <div>
        <Carousel />
        <AdBanners01 />
        <HealthConcerns />
        <PopularCategories />
        <OrderComponent />
        <GeneralMedicines />
        <Vitamins />
        <MedicatedCreams />
        <Electrolytes />
        <PainReliefs />
        <AdBanners02 />
        <Nutritionals />
        <Orthopaedics />
        <Devices />
        <AdBanners03 />
        <Brands />
        <PharmaDescription />
    </div>
  );
};

export default ShopHome;
