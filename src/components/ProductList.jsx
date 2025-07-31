import React from 'react';
import ProductItem from './ProductItem';
function ProductList({ products }) {
  if (products.length === 0) {
    return <p className="text-center">No products found.</p>;
  }
  return (
    <div className="row">
      {products.map(product => (
        <div key={product.id} className="col-md-3 mb-4">
          <ProductItem product={product} />
        </div>
      ))}
    </div>
  );
}
export default ProductList;
