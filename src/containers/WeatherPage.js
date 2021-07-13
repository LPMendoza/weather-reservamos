import React, {useState} from 'react';
import Loader from '../components/Loader.js';
import CityCard from '../components/CityCard.js';

const WeatherPage = ({handleSearchCity, city, loading}) => {
  const [cityText, setCityText] = useState("");
  const [cityId, setCityId] = useState("");
  
  const handleOnChange = (e) => {
    setCityText(e.target.value);
  }
  const handleOnChangeId = (e) => {
    setCityId(e.target.value);
  }

  const handleOnClick = (e) => {
    e.preventDefault();
    handleSearchCity(cityText, cityId);
  }
  
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 my-5">
          <div className="d-flex flex-wrap w-100">
            <h3 className="h3 me-5">Weather searcher</h3>
            <form onSubmit={handleOnClick} className="d-flex align-items-center form-search">
              <input
                required
                autoFocus
                onChange={handleOnChange}
                value={cityText}
                type="text" placeholder="Type the city name here..." className="form-control input-search" />
                <span className="search-location-icon fas fa-map-marker-alt"></span>
              <input
                required
                autoFocus
                onChange={handleOnChangeId}
                value={cityId}
                type="text" placeholder="" className="ms-2 form-control input-search" />
                <span className="search-location-icon fas fa-map-marker-alt"></span>
              <button className="btn btn-primary ms-2">Search</button>
            </form>
          </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 city-container">
            {(city && (loading == false)) && <CityCard key={city.id} city={city} />}
            {loading && <Loader/>}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default WeatherPage;