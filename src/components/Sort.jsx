import React from 'react';
function Sort({ sortOption, onSortChange }) {
  return (
    <select
      className="form-control d-inline-block w-auto mb-3"
      value={sortOption}
      onChange={e => onSortChange(e.target.value)}
    >
      <option value="none">Sort: None</option>
      <option value="price-asc">Price: Low to High</option>
      <option value="price-desc">Price: High to Low</option>
      <option value="rating-desc">Rating: High to Low</option>
    </select>
  );
}
export default Sort;
