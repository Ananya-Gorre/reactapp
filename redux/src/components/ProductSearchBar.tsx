import React, { useState } from 'react';

interface ProductSearchBarProps {
  onSearch: (searchTerm: string) => void;
}

const ProductSearchBar: React.FC<ProductSearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    onSearch(newSearchTerm);
  };

  return (
    <div className="product-search-bar">
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default ProductSearchBar;
