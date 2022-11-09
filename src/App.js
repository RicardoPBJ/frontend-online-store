import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './ pages/Home';
// import * as api from './services/api';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
    </Switch>
  );
}

export default App;
