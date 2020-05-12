import {
  GET_MOVIES,
  GET_GENRES,
} from "../constants";

export const getMovies = (movies) => {
  return {
    type: GET_MOVIES,
    payload: movies,
  };
};

export const getAllGenres = (genres) => {
  return {
    type: GET_GENRES,
    payload: genres,
  };
};
