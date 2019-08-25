import React from 'react';
import { Link } from 'react-router-dom';

import './navbar.css';

export const Navbar = () => (
  <div>
      <div className="navBarTopDivider" />
      <div className="linksWrapper">
        <Link to="/" >Главная</Link>
        <div className="verticalDividerNavbar" />
        <Link to="/" >О нас</Link>
        <div className="verticalDividerNavbar" />
        <Link to="/" >Услуги</Link>
        <div className="verticalDividerNavbar" />
        <Link to="/" >Проекты</Link>
        <div className="verticalDividerNavbar" />
        <Link to="/" >Онлайн запись</Link>
        <div className="verticalDividerNavbar" />
        <Link to="/" >Блог</Link>
        <div className="verticalDividerNavbar" />
        <Link to="/" >Контакты</Link>
      </div>
      <div className="navBarBottomDivider" />
  </div>
);
