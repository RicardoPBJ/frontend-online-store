import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';

export default class Home extends Component {
  state = {
    productsList: [],
    categories: [],
  };

  componentDidMount() {
    this.fetchCategories();
  }

  fetchCategories = async () => {
    const categories = await api.getCategories();
    this.setState({ categories });
  };

  render() {
    const { productsList, categories } = this.state;
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
        <section>
          {categories.map(({ id, name }) => (
            <label key={ id } htmlFor={ id } data-testid="category">
              { name }
              <input type="radio" value={ name } name="categories" id={ id } />
            </label>
          ))}
        </section>
        <Link to="/cart" data-testid="shopping-cart-button" />
      </>
    );
  }
}
