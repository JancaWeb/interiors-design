import React from 'react';

import sofa from '../../images/sofaMain.png';

import './header.css';
import { Navbar } from './Navbar';

export const Header = () => (
  <>
    <div className="sofaMainImgWrapper">
      <img className="sofaMainImg" src={sofa} alt="sofaMain" />
    </div>
    <div className="mainPageDivider"/>
    <Navbar />
  </>
);