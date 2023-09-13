import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../slice/store';
import { add } from '../slice/cartSlice';
import { getProducts } from '../slice/productSlice';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../styles/Product.css';
import ProductSearchBar from './ProductSearchBar';
import { cartDatas } from '../slice/productSlice';

interface ProductType {
  id: number;
  title: string;

  description: string;
  image: string;
  price: number;
  quantity: number;
  name: string;
}

const Product: React.FC = () => {
  

  const dispatch = useAppDispatch();
  const products = useAppSelector(cartDatas);

  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>(products);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(4);
  const [isInCart, setIsInCart] = useState<{ [key: number]: boolean }>({});

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const updateFilteredProducts = () => {
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const slicedProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    return slicedProducts;
  };

  const addToCart = (product: ProductType) => {
    dispatch(add(product));
    setIsInCart((prevIsInCart) => ({
      ...prevIsInCart,
      [product.id]: true,
    }));
  };

  const handleSearch = (searchTerm: string) => {
    console.log('Search term:', searchTerm);
    if (searchTerm === "") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product: ProductType) =>
        product.title && product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      console.log('Filtered products:', filtered);
      setFilteredProducts(filtered);
      setCurrentPage(1); 
    }
  };


    
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    const goToPreviousPage = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    };
  
    const goToNextPage = () => {
      const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
      if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
      }
    };
  
  return (
    <div className="product-page">
      <ProductSearchBar onSearch={handleSearch} />

      <div className="col" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {updateFilteredProducts().map((product: ProductType) => (
          <div className="product-card" key={product.id}>
            <div className="text-center">
              <Card.Img
                variant="top"
                src={product.image}
                style={{ width: '100px', height: '130px' }}
              />
            </div>
            <Card.Body>
              <Card.Title className="product-card-title">{product.title}</Card.Title>
              <Card.Text className="product-card-text">INR.{product.price}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button
                variant="primary"
                className="product-card-button"
                onClick={() => addToCart(product)}
              >
                {isInCart[product.id] ? 'Added to Cart' : 'Add to Cart'}
              </Button>
            </Card.Footer>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button onClick={goToPreviousPage} className={`page-number ${currentPage === 1 ? 'disabled' : ''}`}>
          &lt; Previous
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => paginate(i + 1)}
            className={`page-number ${currentPage === i + 1 ? 'active' : ''}`}
          >
            {i + 1}
          </button>
        ))}
        <button onClick={goToNextPage} className={`page-number ${currentPage === totalPages ? 'disabled' : ''}`}>
          Next &gt;
        </button>
      </div>
    </div>
  );
};
export default Product;