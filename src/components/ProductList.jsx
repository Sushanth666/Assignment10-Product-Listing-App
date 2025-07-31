import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ products }) => (
  products.length === 0
    ? <div className="no-products">No products found.</div>
    : (
      <div className="row g-3">
        {products.map(product => (
          <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex">
            <ProductItem product={product} />
          </div>
        ))}
      </div>
    )
);

export default ProductList;
