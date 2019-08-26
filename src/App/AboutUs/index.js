import React from 'react';

import aboutImage from '../../images/aboutImage.jpg';
import firstPageHumanImage from '../../images/firstPageHuman.jpg';
import TheoJames from '../../images/TheoJames.jpg';
import ourTeamThird from '../../images/ourTeamThird.jpg';
import ourTeamFourth from '../../images/ourTeamFourth.jpg';

import './aboutUs.css';
import { HumanTile } from './HumanTile';
import { BigHumanTile } from './BigHumanTile';

export const AboutUs = () => (
  <div>
    <div className="aboutTitleWrapper">
      <h3 className="aboutTitle">О нас</h3>
    </div>
    <div className="aboutPageContentWrapper">
      <div className="aboutPageContent">
        <p className="aboutPageFirstParagraph">
          {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Vivamus eu eleifend lacus, ultrices scelerisque nisi. 
          Curabitur hendrerit, augue nec egestas vehicula, nulla libero ornare ante, eget efficitur massa odio sed tellus. 
          Donec facilisis a tellus quis dapibus.`}
        </p>
        <p className="aboutPageSecondParagraph">
          {`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}
        </p>
      </div>
      <div className="aboutPageImageWrapper">
        <img src={aboutImage} alt="aboutPageImage" className="aboutPageImage" />
      </div>
    </div>
    <div className="aboutTitleWrapper">
      <h3 className="aboutTitle">Наша команда</h3>
    </div>
    <div className="ourTeamWrapper">
      <HumanTile 
        image={firstPageHumanImage}
        name="Анна Каренина"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Vivamus eu eleifend lacus, ultrices scelerisque nisi. 
        Curabitur hendrerit, augue nec egestas vehicula, nulla libero ornare ante, eget efficitur massa odio sed tellus."
      />
      <HumanTile 
        image={TheoJames}
        name="Theo James"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Vivamus eu eleifend lacus, ultrices scelerisque nisi. 
        Curabitur hendrerit, augue nec egestas vehicula, nulla libero ornare ante, eget efficitur massa odio sed tellus."
      />
      <BigHumanTile />
      <HumanTile 
        image={ourTeamThird}
        name="Мария Лудовская"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Vivamus eu eleifend lacus, ultrices scelerisque nisi. 
        Curabitur hendrerit, augue nec egestas vehicula, nulla libero ornare ante, eget efficitur massa odio sed tellus."
      />
      <HumanTile 
        image={ourTeamFourth}
        name="Василиса Примудрая"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Vivamus eu eleifend lacus, ultrices scelerisque nisi. 
        Curabitur hendrerit, augue nec egestas vehicula, nulla libero ornare ante, eget efficitur massa odio sed tellus."
      />
    </div>
  </div>
);
