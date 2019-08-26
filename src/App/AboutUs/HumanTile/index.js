import React from 'react';

import './humanTile.css';

export const HumanTile = ({image, name, description, bigHumanTile}) => (
  <div className="humanTileWrapper grow">
    <div>
      <img src={image} alt="tilePhoto" className="tilePhoto"/>
    </div>
    <div className="humanTileContent">
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  </div>
);
