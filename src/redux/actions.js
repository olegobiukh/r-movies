import { GET_MOVIES, REQUEST_DATA, GET_GENRES, IS_LOADED } from "./constants";

export const requestData = () => ({ type: REQUEST_DATA });

export const setIsLoaded = (isLoaded) => ({
  type: IS_LOADED,
  payload: isLoaded,
});

export const getMovies = (res) => ({
  type: GET_MOVIES,
  payload: res.data.results,
});

export const getGenres = (res) => ({
  type: GET_GENRES,
  payload: res.data.genres,
});
