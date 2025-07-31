import React from 'react';

const ProductItem = ({ product }) => (
  <div className="card h-100">
    <img
      src={product.image}
      className="card-img-top"
      alt={product.name}
    />
    <div className="card-body d-flex flex-column">
      <h5 className="card-title">{product.name}</h5>
      <p className="card-text"><strong>Category:</strong> {product.category}</p>
      <p className="card-text"><strong>Price:</strong> ₹{product.price}</p>
      <p className="card-text">
        <strong>Rating:</strong> {product.rating} <span>★</span>
      </p>
    </div>
  </div>
);

export default ProductItem;
