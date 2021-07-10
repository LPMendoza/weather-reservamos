import axios from "axios";

export const getCity = async (cityText) => {
  try {
    const response = await axios(`https://search.reservamos.mx/api/v2/places?q=${cityText}`);
    return response.data[0];
  } catch (error) {
    return error;
  }
}