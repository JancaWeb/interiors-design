import React from 'react';
import Input from 'antd/lib/input';

import './contacts.css';

export const Contacts = () => (
  <>
    <div className="mapWrapper">
      <iframe
        title="google-map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d33787.89875921508!2d37.65999688933987!3d55.733590866825615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2scz!4v1567542826046!5m2!1sen!2scz" 
        frameBorder="0" 
        style={{border:0}} 
        allowFullScreen={false} 
      />
    </div>
    <div className="formWrapper">
      <div className="smallInputsWrapper">
        <Input placeholder="Ваше имя"/>
        <Input placeholder="Ваш имайл"/>
        <Input placeholder="Ваш адрес" />
      </div>
      <Input.TextArea rows={7} placeholder="Далщее вопросы"/>
      <button className="onlineSignUpButton contactsSendButton">Отослать</button>
    </div>
  </>
);
