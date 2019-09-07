import React from 'react';
import Calendar from 'antd/lib/calendar';
import Alert from 'antd/lib/alert';
import List from 'antd/lib/list';
import 'antd/dist/antd.css';
import moment from 'moment';
import 'moment/locale/ru';

import './calendar.css';
import { times } from './mockedTimes'


moment.locale('ru');

export class CalendarComponent extends React.PureComponent {
  state = {
    value: moment(new Date()),
    selectedValue: moment(new Date()),
  };

  onSelect = value => {
    this.setState({
      value,
      selectedValue: value,
    });
  };

  onPanelChange = value => {
    this.setState({ value });
  };

  handleSelectTime = event => {
    this.setState({ selectedTime: event.currentTarget.id });
  }

  render() {
    const { value, selectedValue, selectedTime } = this.state;
    return (
      <div>
        <div className="selectDateTimeWrapper">
          <div className="calendarWrapper">
            <Calendar value={value} onSelect={this.onSelect} onPanelChange={this.onPanelChange} />
          </div>
          <div className="nextToCalendarWrapper">
            <Alert
              message={`Вы выбрали дату: ${selectedValue && selectedValue.format('YYYY-MM-DD')}`}
            />
            <List
              header={<div>Выберите для вас подходящее время</div>}
              footer={
                <button 
                  className={`onlineSignUpButton ${!selectedTime ? 'continueButtonSelectTimeDisabled' : ''}`} 
                  disabled={!selectedTime}
                  onClick={() => window.location.href = '/interiors-design/contacts'}
                >
                  Продолжить
                </button>}
              bordered
              dataSource={times}
              renderItem={item => (
                <List.Item
                  id={item.id} 
                  className={`selectTime${item.free ? 'Free' : 'Occupied'} ${selectedTime === item.id ? 'selectTimeSelected' : ''}`} 
                  onClick={this.handleSelectTime}
                >
                  <div>
                    <div>{item.time}</div> 
                    <div>{item.placeholder}</div>
                  </div>
                </List.Item>
              )}
            />
          </div>
        </div>
      </div>
    );
  }
}