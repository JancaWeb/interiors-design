import React from 'react';
import { Link } from 'react-router-dom';

import './navbar.css';

export const Navbar = () => (
  <div>
      <div className="navBarTopDivider" />
      <div className="linksWrapper">
        <Link to="/" >Главная</Link>
        <div className="verticalDividerNavbar" />
        <Link to="/about" >О нас</Link>
        <div className="verticalDividerNavbar" />
        <Link to="/projects" >Проекты</Link>
        <div className="verticalDividerNavbar" />
        <Link to="/" >Онлайн запись</Link>
        <div className="verticalDividerNavbar" />
        <Link to="/" >Контакты</Link>
      </div>
      <div className="navBarBottomDivider" />
  </div>
);
