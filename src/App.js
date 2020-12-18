import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Route, Link, Switch } from 'react-router-dom';
import * as yup from 'yup';

import Home from './components/Home';
import Pizza from './components/Pizza';


const App = () => {
  const initialFormValues = {
    name:'',
    special:'',
    size:'',
    sauce:'',
    pepperoni: false,
    sausage: false,
    pineapple: false,
    bacon: false,
  }
  const initialFormErrors = {
    name:'',
    special:'',
    size:'',
    sauce:'',
  }
  const initialPizza = [];

  return (
    <div className='app'>
      <div className='header'>
      <h1>Lambda Eats</h1>
      <p>Create your own Pizza!</p>

      <Link to='/'>Home</Link>
      <Link to='/Pizza'>Pizza</Link>
      </div>

      <Switch>

      <Route exact path='/'>
        <Home />
      </Route>

      <Route path='/Pizza'>
        <Pizza />
      </Route>
      </Switch>
    </div>
  );
};
export default App;
