import React from 'react';

const DayWeather = ({name, min, max, rainMax}) => {
  return(
    <div className={`col-6 col-md-3 col-lg-2 px-0 `}>
      <div className={`day-container ${rainMax && "rainMax"}`}>
        <span className="day-container__name">{name}</span>
        <span>{min}°/ {max}°</span>
      </div>
    </div>
  )
}

export default DayWeather;