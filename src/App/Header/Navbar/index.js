import React from 'react';
import { Link } from 'react-router-dom';

import './navbar.css';

export const Navbar = () => (
  <div>
      <div className="navBarTopDivider" />
      <div className="linksWrapper">
        <Link to="/interiors-design" >Главная</Link>
        <div className="verticalDividerNavbar" />
        <Link to="/interiors-design/about" >О нас</Link>
        <div className="verticalDividerNavbar" />
        <Link to="/interiors-design/projects" >Проекты</Link>
        <div className="verticalDividerNavbar" />
        <Link to="/interiors-design/online-sign-up" >Онлайн запись</Link>
        <div className="verticalDividerNavbar" />
        <Link to="/interiors-design/contacts" >Контакты</Link>
      </div>
      <div className="navBarBottomDivider" />
  </div>
);
