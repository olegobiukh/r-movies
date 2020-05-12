import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "./redux/actions";
import { HashRouter, Route, Switch } from "react-router-dom";
import uid from "uid";
import routes from "./router";
import axios from "axios";

const baseUrl = "https://api.themoviedb.org/3/";

function App({ getMovies, getAllGenres }) {
  const setResponses = async () => {
    const movies = await getMoviesItems(
      "discover/movie?sort_by=popularity.desc&api_key=98135c4d3cc392347281f8d007876760&language=en-US&page=1"
    );
    const genres = await getMoviesItems(
      "genre/movie/list?api_key=98135c4d3cc392347281f8d007876760&language=en-US"
    );
    getMovies(movies.results);
    getAllGenres(genres.genres);
    
  };

  useEffect(() => {
    setResponses();
  }, []);

  const getMoviesItems = async (url) => {
    try {
      const result = await axios.get(baseUrl + url);
      return result.data;
    } catch (error) {
      console.log(error);
    }
  };

  const newRoutes = routes.map((item) => (
    <Route key={uid()} exact path={item.url} component={item.component} />
  ));
  return (
    <HashRouter>
      <Switch>{newRoutes}</Switch>
    </HashRouter>
  );
}

export default connect((state) => state, actions)(App);
