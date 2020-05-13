import {
  GET_MOVIES,
  GET_GENRES,
  IS_LOADED,
} from "./constants";

const initialState = {
  movies: [],
  genres: {},
  isLoaded: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    case GET_GENRES:
      return {
        ...state,
        genres: action.payload,
      };
    case IS_LOADED:
      return {
        ...state,
        isLoaded: action.payload,
      };
    default:
      return state;
  }
};
