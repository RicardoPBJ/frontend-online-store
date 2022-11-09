import React, { Component } from 'react';

export default class Home extends Component {
  render() {
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
        <h3 data-testid="home-initial-message">Digite algum termo de pesquisa ou escolha uma categoria.</h3>
      </>
    );
  }
}
