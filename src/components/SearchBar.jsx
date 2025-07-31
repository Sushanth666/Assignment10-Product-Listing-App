import React from 'react';
function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <input
      type="text"
      className="form-control mb-3"
      placeholder="Search products..."
      value={searchTerm}
      onChange={e => onSearchChange(e.target.value)}
    />
  );
}
export default SearchBar;
