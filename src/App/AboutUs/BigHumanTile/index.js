import React from 'react';

import bigTileImage from '../../../images/bigTilePerson.jpg';

import './bigHumanTile.css';

export const BigHumanTile = () => (
  <div className="bigHumanTileWrapper grow">
    <div className="bigTilePhotoWrapper">
      <img src={bigTileImage} alt="bigTilePhoto" className="bigTilePhoto"/>
    </div>
    <div>
      <h3>{`София Янча`}</h3>
      <p>{`Арт Директор`}</p>
    </div>
  </div>
);