import React from 'react';
import DayWeather from './DayWeather';

const CityCard = ({city}) => {
  
  const {display, country, weather} = city;
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Frid", "Sat"];

  const printDays = () => {
    let currentDay = (new Date()).getDay();
    let dayCards = [];

    dayCards.push(
      <DayWeather
        key={currentDay}
        name={"Today"}
        min={weather[currentDay].temp.min}
        max={weather[currentDay].temp.max}
      />
    );
    currentDay++;

    for(var i = 0; i < 6; i++) {
      if(currentDay > 6) 
      currentDay = 0;
      dayCards.push(
        <DayWeather
          key={currentDay}
          name={days[currentDay]}
          min={weather[currentDay].temp.min}
          max={weather[currentDay].temp.max}
        />
      );
      currentDay++;
    }

    return dayCards;
  }
  
  return (
    <div className="city-card">
      <span className="city-card__name">
        {display}, {country}
      </span>
      <div className="city-card__days-container container-fluid">
        <div className="row">
          {printDays()}
        </div>
      </div>
    </div>

  );

}

export default CityCard;
