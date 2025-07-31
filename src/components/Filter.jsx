import React from 'react';
function Filter({ categories, selectedCategory, onCategoryChange }) {
  return (
    <select
      className="form-control d-inline-block w-auto mb-3"
      value={selectedCategory}
      onChange={e => onCategoryChange(e.target.value)}
    >
      <option value="All">All</option>
      {categories.map(cat => (
        <option key={cat} value={cat}>{cat}</option>
      ))}
    </select>
  );
}
export default Filter;
