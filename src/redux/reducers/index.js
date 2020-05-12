import { GET_MOVIES, GET_GENRES } from "../constants";

const initialState = {
  movies: [],
  genres: {},
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
    default:
      return state;
  }
};
