import React from 'react';

import projectsImage6 from '../../../images/projectsImage6.jpg';
import projectsImage11 from '../../../images/projectsImage11.jpg';
import projectsImage14 from '../../../images/projectsImage14.jpg';

import '../onlineSignUp.css';

const OnlineSignUpDescription = () => (
  <div className="onlineSignUpDescription">
    <p>1 ч.</p>
    <p>встреча конзултация</p>
  </div>
);

export const ChoosePackage = ({choosePackage}) => (
  <div>
      <div className="blackTitleWrapper">
        <h3 className="blackTitle">Онлайн запись</h3>
      </div>
      <div className="onlineSignUpWrapper">
        <div className="onlineSignUpItemWrapper">
          <img src={projectsImage6} alt="projectsImage6" className="onlineSignUpImage grow" />
          <h4 className="onlineSignUpSubTitle">дизайн квартиры</h4>
          <OnlineSignUpDescription />
          <button className="onlineSignUpButton" onClick={choosePackage('дизайн квартиры')}>Заказать</button>
        </div>
        <div className="onlineSignUpItemWrapper">
          <img src={projectsImage11} alt="projectsImage11" className="onlineSignUpImage grow" />
          <h4 className="onlineSignUpSubTitle">дизайн офиса</h4>
          <OnlineSignUpDescription />
          <button className="onlineSignUpButton" onClick={choosePackage('дизайн офиса')}>Заказать</button>
        </div>
        <div className="onlineSignUpItemWrapper">
          <img src={projectsImage14} alt="projectsImage14" className="onlineSignUpImage grow" />
          <h4 className="onlineSignUpSubTitle">дизайн дома</h4>
          <OnlineSignUpDescription />
          <button className="onlineSignUpButton" onClick={choosePackage('дизайн дома')}>Заказать</button>
        </div>
      </div>
    </div>
);
