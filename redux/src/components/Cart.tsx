import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { add, removeall, remove, removeallcart } from '../slice/cartSlice';
import Product from './Product';

export default function Cart() {
  const cartItems = useSelector((state: any) => state.cart.data);
  const dispatch = useDispatch();

  const handleRemove = (id: number) => {
    dispatch(remove(id));
  };

  const handleIncrement = (product: CartItem) => {
    dispatch(add(product));
  };

  const handleDecrement = (id: number) => {
    dispatch(remove(id));
  };

  let isCartEmpty = cartItems.length === 0;
  const totalCost = cartItems.reduce((total:number, product: CartItem) => total + product.price * product.quantity, 0);

  const cards = cartItems.map((product: CartItem) => (
    <center key={product.id}>
      <div className="col-md-3">
        <Card bg="dark" text="white" style={{ width: '15rem' }}>
          <div className="text-center">
            <Card.Img variant="top" src={product.image} style={{ width: '100px', height: '130px' }} />
          </div>
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>INR.{product.price}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="outline-light" onClick={() => handleDecrement(product.id)}>
              -1
            </Button>
            <Button variant="outline-danger" onClick={() => handleRemove(product.id)}>
              Remove
            </Button>
            <Button variant="outline-light" onClick={() => handleIncrement(product)}>
              +1
            </Button>
            <span style={{
              display: 'inline-block',
              textAlign: 'center',
              fontSize: '16px',
              color: 'white',
              backgroundColor: '#007bff',
              border: '1px solid #ccc',
              padding: '4px 8px',
              borderRadius: '4px'
            }}>
            <div style={{
              display: 'inline-block',
              textAlign: 'center',
              fontSize: '16px',
              color: 'white',
              backgroundColor: '#000',
              border: '1px solid #ccc',
              padding: '4px 8px',
              borderRadius: '4px'
            }}>
  Total products: {product.quantity}
            </div>
            </span>
          </Card.Footer>
        </Card>
      </div>
    </center>
  ));

  return (
    <div className="container mt-4">
      {isCartEmpty ? (
        <div className="alert alert-danger" >
          Your cart is empty. Please add products to your cart.
        </div>
      ) : (
        <>
          <div className="row">{cards}</div>
          <div className="mt-3 text-white">Total Cost: INR.{totalCost}</div>
          <Link to="/payment">
            <Button variant="success">Checkout</Button>
          </Link>
        </>
      )}
    </div>
  );
}

interface CartItem {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  quantity: number;
  name: string;
}


