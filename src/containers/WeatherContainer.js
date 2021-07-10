import React, {useState, useEffect} from 'react';
import WeatherPage from './WeatherPage.js';
import axios from 'axios';
import { getCity } from '../adapters/citiesAdapter.js';
import { getCityWeather } from '../adapters/weatherAdapter.js';

const WeatherContainer = () => {
  const [city, setCity] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const formatText = (cityText) => {
    return cityText.toLowerCase().split(" ").join("-");
  }

  const handleSearchCity = async (cityText) => {
    setLoading(true);
    try {
      let city = await getCity(formatText(cityText));
      city["weather"] = await searchWeather(city.lat, city.long);
      setCity(city);
      setError(null);
      setLoading(false);
    } catch(error) {
      setError(error);
      setLoading(false);
    }
  }

  const searchWeather = async (lat, long) => {
    try {
      const response = await getCityWeather(lat, long);
      return response.daily;
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }

  useEffect(() => {

  }, [])

  return (
    <WeatherPage
      handleSearchCity={handleSearchCity}
      city={city}
      loading={loading}
    />
  )
}

export default WeatherContainer;
