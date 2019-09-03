import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import './App.css';
import { HomePage } from './HomePage';
import { AboutUs } from './AboutUs';
import { Header } from './Header';
import { Projects } from './Projects';
import { OnlineSignUp } from './OnlineSignUp';
import { Contacts } from './Contacts';

const App = () => (
  <BrowserRouter>
    <Header />
    <Route exact path='/' component={HomePage} />
    <Route path='/about' component={AboutUs} />
    <Route path='/projects' component={Projects} />
    <Route path='/online-sign-up' component={OnlineSignUp} />
    <Route path='/contacts' component={Contacts} />
  </BrowserRouter>
)

export default App;
