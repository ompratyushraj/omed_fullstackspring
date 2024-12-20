import React from 'react';
import Carousel from './body/Carousel';
import AdBanners01 from './body/AdBanners01';
import HealthConcerns from './body/HealthConcerns';
import OrderComponent from './body/OrderComponent';
import GeneralMedicines from './body/GeneralMedicines';
import Vitamins from './body/Vitamins';
import MedicatedCreams from './body/MedicatedCreams';
import Electrolytes from './body/Electrolytes';
import PainReliefs from './body/PainReliefs';
import AdBanners02 from './body/AdBanners02';
import Nutritionals from './body/Nutritionals';
import Orthopaedics from './body/Orthopaedics';
import Devices from './body/Devices';
import AdBanners03 from './body/AdBanners03';
import Brands from '../others/Brands';
import PharmaDescription from '../footer/PharmaDescription';
import PopularCategories from './body/PopularCategories';

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
