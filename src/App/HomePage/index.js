import React from 'react';

import firstPicture from '../../images/firstPicture.jpg';
import firstFlatPicture from '../../images/firstPictureMiddle.jpg';
import humanPicture from '../../images/firstPageHuman.jpg';
import sofaInFlat from '../../images/firstPageLastPic.jpg';

import './homePage.css';

export const HomePage = () => (
  <div>
    <div className="firstRowImagesWrapper">
      <div className="planImageWrapper grow">
        <img src={firstPicture} alt='planImage' className="planImage"/>
      </div>
      <div className="firstFlatPictureWrapper grow">
        <img src={firstFlatPicture} alt='firstFlatPicture' className="firstFlatPicture" />
      </div>
      <div className="humanPictureWrapper grow">
        <img src={humanPicture} alt="humanPicture" className="humanPicture" />
        <div className="contactWrapper">
          <p className="contactEmail">info@site.ru</p>
          <p className="contactPhone">+45(495) 000-00-00</p>
        </div>
      </div>
    </div>
    <div className="firstFlatTitleWrapper">
      <h1 className="firstFlatTitle">Отличный дизайн незаменим</h1>
    </div>
    <div className="sofaInFlatWrapper">
      <img src={sofaInFlat} alt="sofaInFlatPicture" className="sofaInFlatPicture" />
      <div className="designForYouHomeWrapper">
        <p className="designForYourHomeTitle">Дизайн для вашего дома</p>
        <p className="designForYourHomeDescription">
          {`Это текст. Нажмите один раз и выберите «Редактировать текст» или просто дважды кликните, 
          чтобы добавить свой текст и настроить шрифт. 
          Это текст. Нажмите один раз и выберите «Редактировать текст» или просто дважды кликните, 
          чтобы добавить свой текст и настроить шрифт.`}
        </p>
      </div>
    </div>
  </div>
)