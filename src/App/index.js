import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import './App.css';
import { HomePage } from './HomePage';
import { AboutUs } from './AboutUs';
import { Header } from './Header';
import { Projects } from './Projects';
import { OnlineSignUp } from './OnlineSignUp';
import { Contacts } from './Contacts';
import { Footer } from './Footer';

const App = () => (
  <BrowserRouter>
    <Header />
    <Route exact path='/interiors-design/' component={HomePage} />
    <Route path='/interiors-design/about' component={AboutUs} />
    <Route path='/interiors-design/projects' component={Projects} />
    <Route path='/interiors-design/online-sign-up' component={OnlineSignUp} />
    <Route path='/interiors-design/contacts' component={Contacts} />
    <Footer />
  </BrowserRouter>
)

export default App;
