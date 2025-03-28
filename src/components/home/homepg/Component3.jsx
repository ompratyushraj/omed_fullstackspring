import React from 'react';
import Image01 from '../../../assets/images/HomePG/MedicineBGImage01.jpg';

const Component3 = () => {
    return (
        <div className="d-flex w-100 justify-content-center flex-column flex-lg-row my-5">
            {/* Card 1: Displaying a sample image or content */}
            <div
                className="card bg-light rounded d-flex justify-content-center align-items-center m-2 ms-lg-5 me-lg-5"
                style={{
                    flex: '1 1 auto',
                    maxWidth: '250px',
                    maxHeight: '10%',
                    backgroundImage: `url(${Image01})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            >
            </div>
            <div className="bg-light rounded d-flex justify-content-center align-items-center m-2 ms-lg-4 me-lg-4" style={{ flex: '1 1 auto', maxWidth: '400px', maxHeight: '100%' }}>
                <div className="p-3 text-left">
                    <h1 className='fw-bold'>PRODUCT CATEGORY</h1>
                    <p className='fw-bold fs-5'>Distinct pharmaceutical products are available at affordable pricing with genuine discounts.</p>
                    <p className='fst-italic fs-5'>The customers can purchase the products at the shop (offline) or, can order with proper product specification and quantity specified.</p>
                    <p className='fw-bold fst-italic'>For online orders, click on below:</p>
                    <button className="btn btn-primary mt-3 fst-italic">Visit Our Online Store</button>
                </div>
            </div>
            {/* Card 2: List of product categories */}
            <div className="bg-light rounded d-flex justify-content-center align-items-start m-2 ms-lg-4 me-lg-4" style={{ flex: '1 1 auto', maxWidth: '300px' }}>
                <div className="p-3">
                    <ul className="list-unstyled">
                        <li><strong>Ethical Medication:</strong><br /><span className="ms-3">All major pharma products of reputed brands.</span></li>
                        <li><strong>Surgical Items & Instruments:</strong><br /><span className="ms-3">A variety of surgical scissors and accessories.</span></li>
                        <li><strong>Baby Care:</strong><br /><span className="ms-3">Hygienic baby care products for all ages.</span></li>
                        <li><strong>Generic Medication:</strong><br /><span className="ms-3">A wide selection of generic medicines in various categories.</span></li>
                        <li><strong>Hygiene Products:</strong><br /><span className="ms-3">Antibacterial sprays, gels, disinfectants, and more.</span></li>
                        <li><strong>Energy Boosters:</strong><br /><span className="ms-3">Proteins, vitamins, and nutritional supplements.</span></li>
                        <li><strong>Psychosexual Medicine:</strong><br /><span className="ms-3">Contraceptives, sex enhancers, and related medication.</span></li>
                        <li><strong>Pharma-Related Food Products:</strong><br /><span className="ms-3">Products like Horlicks, Chawanprash, and more.</span></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Component3;
