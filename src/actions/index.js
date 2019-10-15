import axios from 'axios';

const API_KEY = '338d29dbb4b04612fc9b2777ed652653';

const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  // axios.get(url) returns a promise
  const request = axios.get(url);
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
