import axios from "axios";
import { GET_MOVIES, GET_GENRES, IS_MOVIES_LOADED, IS_GENRES_LOADED } from "../constants";

const baseUrl = "https://api.themoviedb.org/3/";

const setIsMoviesLoaded = (isLoaded) => {
  return {
    type: IS_MOVIES_LOADED,
    payload: isLoaded,
  };
};
const setIsGenresLoaded = (isLoaded) => {
  return {
    type: IS_GENRES_LOADED,
    payload: isLoaded,
  };
};

const getMovies = (res) => {
  return {
    type: GET_MOVIES,
    payload: res.data.results,
  };
};

export const getGenres = (res) => {
  return {
    type: GET_GENRES,
    payload: res.data.genres,
  };
};

export const getMoviesHandler = () => {
  return function (dispatch) {
    const url =
      "discover/movie?sort_by=popularity.desc&api_key=98135c4d3cc392347281f8d007876760&language=en-US&page=1";
    axios
      .get(baseUrl + url)
      .then((res) => {
        dispatch(getMovies(res));
        dispatch(setIsMoviesLoaded(true));
      })
      .catch((e) => {
        console.log(e);
      });
  };
};

export const getGenresHandler = () => {
  return function (dispatch) {
    const url =
      "genre/movie/list?api_key=98135c4d3cc392347281f8d007876760&language=en-US";
    axios
      .get(baseUrl + url)
      .then((res) => {
        dispatch(getGenres(res));
        dispatch(setIsGenresLoaded(true));
      })
      .catch((e) => {
        console.log(e);
      });
  };
};
