import React from 'react';
import { Link } from 'react-router-dom';

const ProductItemCard = ({ product }) => {
    const { id, productname, description, urlToImage, source, manufacturedate } = product;

    return (
        <div>
            <div className="card my-4" style={{ width: '100%', height: '450px' }}>
                <span className="position-absolute top-10 start-0 translate-middle badge rounded-pill bg-info">
                    x% OFF
                </span>

                <img
                    src={urlToImage || 'https://via.placeholder.com/500'}
                    className="card-img-top"
                    alt={productname}
                    style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title text-truncate">{productname}</h5>
                    <p className="card-text text-truncate" style={{ maxHeight: '60px', overflow: 'hidden' }}>
                        {description}
                    </p>
                    <p className="card-text mt-auto">
                        <small className="text-muted">
                            By {!source ? 'Unknown' : source.name} on {new Date(manufacturedate).toGMTString()}
                        </small>
                    </p>
                    <div className="d-flex justify-content-between mt-3">
                        {/* Pass the full product details via Link state */}
                        <Link
                            to={{
                                pathname: `/productDetails/${id}`,
                                state: { selectedProduct: product }, // Passing product data as state
                            }}
                            className="btn btn-dark"
                        >
                            See details
                        </Link>
                        <a href="#" className="btn btn-outline-dark">Add to Wishlist</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductItemCard;
