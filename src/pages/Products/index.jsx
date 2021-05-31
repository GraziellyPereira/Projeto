import React, { Component } from 'react';

import NavBar from './navbar';
import Paginator from './paginator';
import ProductsList from './productsList';
import UtilityBar from './utilityBar';

import './styles.css'

class Product extends Component {
  state = {}
  render() {
    return (
      <>
        <NavBar />
        <div id="main" className="container-fluid">
          <UtilityBar />
          <ProductsList />
          <Paginator />
        </div>
      </>
    );
  }
}

export default Product;