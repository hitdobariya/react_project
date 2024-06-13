// App.js
import React, { useState } from 'react';
import R3 from './r3';
import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState(' ');
  const [products, setProducts] = useState([
    { id: 1, name: 'Laptop', category: 'Electronics' },
    { id: 2, name: 'Headphones', category: 'Electronics' },
    { id: 3, name: 'Shirt', category: 'Fashion' },
    { id: 4, name: 'Jeans', category: 'Fashion' },

  ]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="App">
        <h1>Product Search</h1>
        <input
          className='m-8 border border-black'
          type="text"
          placeholder="Search products Category..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        {filteredProducts.length > 0 ? (
          <ul> {filteredProducts.map((product) => (<li key={product.category}>  {product.name} - {product.category} </li>))}</ul>) : (<p>No products found</p>)}
      </div>
      <R3 />
    </>
  );

}

export default App;