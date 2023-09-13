import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faShoppingCart);

const NavbarPanel: React.FC = () => {
  const cartProducts = useSelector((state: any) => state.cart.data);




  return (
    <Navbar expand="lg" className="bg-dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#">SHOPPING CART</Navbar.Brand>
        <Nav>
          <Nav.Link to="/Register" as={Link} className="text-white">
            REGISTER
          </Nav.Link>
          <Nav.Link to="/Login" as={Link} className="text-white">
            LOGIN
          </Nav.Link>
          <Nav.Link to="/product" as={Link} className="text-white">
            PRODUCTS
          </Nav.Link>
        </Nav>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Nav.Link to="/cart" as={Link} className="text-white">
              <FontAwesomeIcon icon={faShoppingCart} /> {cartProducts.length}
            </Nav.Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarPanel;
