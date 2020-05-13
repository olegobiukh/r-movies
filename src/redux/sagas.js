import { call, put, takeLatest } from "redux-saga/effects";

import { getMovies, setIsLoaded, getGenres } from "./actions";
import { REQUEST_DATA } from "./constants";
import { fetchData } from "./api";

const urlMovies =
  "discover/movie?sort_by=popularity.desc&api_key=98135c4d3cc392347281f8d007876760&language=en-US&page=1";
const urlGenres =
  "genre/movie/list?api_key=98135c4d3cc392347281f8d007876760&language=en-US";

function* getApiMovies(action) {
  try {
    const movies = yield call(() => fetchData(urlMovies));
    const genres = yield call(() => fetchData(urlGenres));

    yield put(getMovies(movies));
    yield put(getGenres(genres));
    yield put(setIsLoaded(true));
  } catch (e) {
    console.log(e);
  }
}

export default function* mySaga() {
  yield takeLatest(REQUEST_DATA, getApiMovies);
}
