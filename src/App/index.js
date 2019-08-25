import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import './App.css';
import { HomePage } from './HomePage';


const App = () => (
  <BrowserRouter>
    <Route exact path='/' component={HomePage} />
  </BrowserRouter>
)

export default App;
