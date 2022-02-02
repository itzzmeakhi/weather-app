import { WeatherActionTypes } from './types';

const INITIAL_STATE = {
   cities: []
};

const reducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch(type) {
    case WeatherActionTypes.ADD_CITY_START:
      return {
        ...state,
        cities: ['Hello']
      }
    default:
      return state;
  }
}

export default reducer;