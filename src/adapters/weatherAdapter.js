import axios from "axios";

export const getCityWeather = async (lat, long) => {
  try {
    const response = await axios(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=metric&exclude=current,minutely,hourly,alerts&appid=a5a47c18197737e8eeca634cd6acb581`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    return error;
  }
}