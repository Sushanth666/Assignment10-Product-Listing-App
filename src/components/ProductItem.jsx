import React from 'react';
function ProductItem({ product }) {
  const { name, price, category, rating, image } = product;
  return (
    <div className="card h-100">
      <img src={image} className="card-img-top" alt={name} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{name}</h5>
        <p className="card-text mb-1"><strong>Category:</strong> {category}</p>
        <p className="card-text mb-1"><strong>Price:</strong> ₹{price}</p>
        <p className="card-text mb-2"><strong>Rating:</strong> {rating} ⭐</p>
      </div>
    </div>
  );
}
export default ProductItem;
