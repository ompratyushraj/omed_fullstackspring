import React from 'react';
import Component1 from './homepg/Component1';
import Component2 from './homepg/Component2';
import Component4 from './homepg/Component4';
import Component3 from './homepg/Component3';
import PharmaDescription from '../footer/PharmaDescription';
import Reviews from './homepg/Reviews';
import ShopPhoto from './homepg/shopphoto';

const HomePage = () => {
  return (
    <>
    <div>
        <Component1 />
        <Component2 />
        <Component3 />
        <ShopPhoto />
        <Component4 />
        <Reviews />
        <PharmaDescription />
    </div>
    </>
  );
};

export default HomePage;
