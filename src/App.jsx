import React, { useState, useMemo } from 'react';
import { products } from './data/products';
import SearchBar from './components/SearchBar';
import Filter from './components/Filter';
import Sort from './components/Sort';
import ProductList from './components/ProductList';
import './styles.css'; // Import decoration styles

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOption, setSortOption] = useState('none');

  // Extract unique categories
  const categories = useMemo(
    () => Array.from(new Set(products.map((p) => p.category))),
    []
  );

  // Filter, search and sort products
  const filteredProducts = useMemo(() => {
    let filtered = products.filter(
      (p) =>
        (selectedCategory === 'All' || p.category === selectedCategory) &&
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    switch (sortOption) {
      case 'price-asc':
        filtered = [...filtered].sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered = [...filtered].sort((a, b) => b.price - a.price);
        break;
      case 'rating-desc':
        filtered = [...filtered].sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return filtered;
  }, [searchTerm, selectedCategory, sortOption]);

  return (
    <div
      className="app-container"
      style={{ minHeight: '100vh', background: '#111', color: '#f0f0f0', paddingTop: 40 }}
    >
      <div className="container-fluid">
       <h1 className="electronics-double-color">Electronics</h1>

        <div className="controls mb-4">
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
          <Filter categories={categories} selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
          <Sort sortOption={sortOption} onSortChange={setSortOption} />
        </div>

        <ProductList products={filteredProducts} />
      </div>
    </div>
  );
}

export default App;
