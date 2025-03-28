import React from 'react';
import ProductGridSidebar from './ProductGridSidebar';
import ProductItems from './ProductItems';

const ProductGrid = () => {
    return (
        <>
            <div className="row m-3">
                <div className="col-12 col-md-3">
                    <div className="card m-2 bg-base-300 rounded-badge grid h-100 place-items-center">
                        <ProductGridSidebar />
                    </div>
                </div>
                <div className="col-12 col-md-9">
                    <div className="card m-2 bg-base-300 rounded-badge grid h-100 place-items-center">
                        <ProductItems />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductGrid;
