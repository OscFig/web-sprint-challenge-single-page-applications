import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Route, Link, Switch } from 'react-router-dom';
import * as yup from 'yup';

import schema from './validation/formSchema'
import Home from './components/Home';
import Pizza from './components/Pizza';

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
  const initialDisabled = true;

const App = () => {
  
  const [ pizza, setPizza ] = useState(initialPizza); 
  const [formValues, setFormValues] = useState(initialFormValues); 
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const postNewPizza = (newPizza) => {
    axios
    .post('https://reqres.in/api/pizza', newPizza)
    .then(response => {
      setPizza([response.data, ...pizza]);
      setFormValues(initialFormValues)
    })
    .catch(error => {
      alert('POST error')
    })
  }

  const inputChange = (name, value) => {
    yup
    .reach(schema,name)
    .validate(value)
    .then(() => {
      setFormErrors({
        ...formErrors,
        [name]: '',
      })
    })
    .catch((err) => {
      setFormErrors({
        ...formErrors,
        [name]: err.errors[0],
      })
    })
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const formSubmit = () => {
    const newPizza = {
      name: formValues.name.trim(),
      special: formValues.special.trim(),
      size: formValues.size.trim(),
      sauce: formValues.sauce.trim(),
      toppings: ['pepperoni','sausage','pineapple','bacon'].filter(
        (topping) => formValues[topping]
      ),
    };
    postNewPizza(newPizza);
  }

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <div className='app'>
      <div className='header'>
        <div className='logo'>
          <h1>Lambda Eats</h1>
          <p>Create your own Pizza!</p>
        </div>
      
        <div className='links'>
          <Link to='/'>Home</Link>
          <Link to='/Pizza'>Pizza</Link>
        </div>
      </div>

      <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/Pizza'>
        <Pizza 
          values={formValues}
          change={inputChange}
          submit={formSubmit}
          errors={formErrors}
          disabled={disabled}
        />
      </Route>
      </Switch>
    </div>
  );
};
export default App;
