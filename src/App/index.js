import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import './App.css';
import { HomePage } from './HomePage';
import { AboutUs } from './AboutUs';
import { Header } from './Header';
import { Projects } from './Projects';

const App = () => (
  <BrowserRouter>
    <Header />
    <Route exact path='/' component={HomePage} />
    <Route path='/about' component={AboutUs} />
    <Route path='/projects' component={Projects} />
  </BrowserRouter>
)

export default App;
