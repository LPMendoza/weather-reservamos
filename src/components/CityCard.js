import React from 'react';
import DayWeather from './DayWeather';

const CityCard = ({city}) => {
  
  const {display, country, weather} = city;
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Frid", "Sat"];

  const printDays = () => {
    let currentDay = (new Date()).getDay();
    let dayCards = [];
    const maxRainIndex = getMaxRain(weather);
    console.log(maxRainIndex);
    dayCards.push(
      <DayWeather
        key={currentDay}
        name={"Today"}
        min={weather[0].temp.min}
        max={weather[0].temp.max}
        rainMax={0 === maxRainIndex}
      />
    );
    currentDay++;

    for(var i = 1; i <= 7; i++) {
      if(currentDay > 6) 
      currentDay = 0;
      dayCards.push(
        <DayWeather
          key={currentDay}
          name={days[currentDay]}
          min={weather[i].temp.min}
          max={weather[i].temp.max}
          rainMax={i === maxRainIndex}
        />
      );
      currentDay++;
    }

    return dayCards;
  }

  const getMaxRain = (weather) => {
    let indexMax = 0;
    let aux = 0; 
    weather.forEach((day, index) => {
      if(day.humidity > aux) {
        indexMax = index;
        aux = day.humidity;
      }
    });
    return indexMax;
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
