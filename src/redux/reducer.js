import {
  GET_MOVIES,
  GET_GENRES,
  IS_MOVIES_LOADED,
  IS_GENRES_LOADED,
} from "./constants";

const initialState = {
  movies: [],
  genres: {},
  isMoviesLoaded: false,
  isGenresLoaded: false,
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
    case IS_MOVIES_LOADED:
      return {
        ...state,
        isMoviesLoaded: action.payload,
      };
    case IS_GENRES_LOADED:
      return {
        ...state,
        isGenresLoaded: action.payload,
      };
    default:
      return state;
  }
};
