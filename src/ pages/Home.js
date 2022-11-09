import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  state = {
    productsList: [],
  };

  render() {
    const { productsList } = this.state;
    return (
      <>
        <label htmlFor="search-input">
          <input
            type="text"
            id="search-input"
            placeholder="Digite sua busca"
            name="search"
          />
        </label>
        {
          productsList.length === 0
          && (
            <h3 data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </h3>)
        }
        <Link to="/cart" data-testid="shopping-cart-button" />
      </>
    );
  }
}
