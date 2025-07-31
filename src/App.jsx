import React, { useState, useMemo } from 'react';
import { products } from './data/products';
import ProductList from './components/ProductList';
import Filter from './components/Filter';
import Sort from './components/Sort';
import SearchBar from './components/SearchBar';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOption, setSortOption] = useState('none');

  const categories = useMemo(() => {
    return Array.from(new Set(products.map(p => p.category)));
  }, []);

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.filter(p =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === 'All' || p.category === selectedCategory)
    );
    switch (sortOption) {
      case 'price-asc':
        filtered = filtered.slice().sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered = filtered.slice().sort((a, b) => b.price - a.price);
        break;
      case 'rating-desc':
        filtered = filtered.slice().sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }
    return filtered;
  }, [searchTerm, selectedCategory, sortOption]);

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Product Listing</h1>
      <div className="mb-3 d-flex flex-wrap justify-content-between align-items-center">
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <div>
          <Filter categories={categories} selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
          <Sort sortOption={sortOption} onSortChange={setSortOption} />
        </div>
      </div>
      <ProductList products={filteredAndSortedProducts} />
    </div>
  );
}
export default App;
