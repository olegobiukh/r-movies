import React, { useEffect } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import uid from "uid";
import routes from "./router";
import axios from "axios";
import { observer, inject } from "mobx-react";

const baseUrl = "https://api.themoviedb.org/3/";

const App = inject("store")(
  observer(({ store }) => {
    const setResponses = async () => {
      store.isLoaded = false;
      const movies = await getMoviesItems(
        `discover/movie?sort_by=popularity.desc&api_key=98135c4d3cc392347281f8d007876760&language=en-US&page=${store.page}`
      );
      const genres = await getMoviesItems(
        "genre/movie/list?api_key=98135c4d3cc392347281f8d007876760&language=en-US"
      );

      store.movies = movies.results;
      store.genres = genres.genres;
      store.page = movies.page;
      store.total_pages = movies.total_pages;
      store.isLoaded = true;
    };

    useEffect(() => {
      setResponses();
    }, [store.page]);

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
  })
);

export default App;
