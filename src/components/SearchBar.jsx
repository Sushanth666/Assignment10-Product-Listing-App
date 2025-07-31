import React from 'react';

const SearchBar = ({ searchTerm, onSearchChange }) => (
  <input
    type="text"
    className="form-control"
    placeholder="Search products..."
    value={searchTerm}
    onChange={e => onSearchChange(e.target.value)}
  />
);

export default SearchBar;
