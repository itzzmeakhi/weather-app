import { WeatherActionTypes } from './types';

export const addTask = (city) => {
  return {
    type: WeatherActionTypes.ADD_CITY_START,
    payload: city
  }
};