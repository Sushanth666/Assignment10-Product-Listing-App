import React from 'react';

const Sort = ({ sortOption, onSortChange }) => (
  <select
    className="form-control"
    value={sortOption}
    onChange={e => onSortChange(e.target.value)}
  >
    <option value="none">Sort: None</option>
    <option value="price-asc">Price: Low to High</option>
    <option value="price-desc">Price: High to Low</option>
    <option value="rating-desc">Rating: High to Low</option>
  </select>
);

export default Sort;
