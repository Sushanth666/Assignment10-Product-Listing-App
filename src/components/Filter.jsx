import React from 'react';

const Filter = ({ categories, selectedCategory, onCategoryChange }) => (
  <select
    className="form-control"
    value={selectedCategory}
    onChange={e => onCategoryChange(e.target.value)}
  >
    <option value="All">All</option>
    {categories.map(cat => (
      <option key={cat} value={cat}>{cat}</option>
    ))}
  </select>
);

export default Filter;
