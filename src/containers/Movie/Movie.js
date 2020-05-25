import React, { useState } from "react";
import { Container, MovieInfo, Text, Button } from "./styles";
import Wrapper from "../../components/catalog/Wrapper";
import { observer, inject } from "mobx-react";

const Movie = inject("store")(
  observer(({ store, match }) => {
    const { movies, genres } = store;
    console.log(movies);

    console.log(match.params.id);
    const watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
    const [watchMovies, setWatchMovies] = useState(watchlist);

    const id = +match.params.id;
    const movie = movies.find((item) => item.id === id);
    console.log(JSON.stringify(movie));
    const movieGenres =
      movies.length > 0 && genres.length > 0
        ? movie.genre_ids
            .map((el) => genres.find((elem) => elem.id === el))
            .map((element) => element.name)
            .join(", ")
        : "";

    const addToWatchList = () => {
      const finalWatchlist = watchMovies.some((el) => el.id === movie.id)
        ? watchlist.filter((el) => el.id !== movie.id)
        : [...watchMovies, { id: movie.id, title: movie.title }];

      localStorage.setItem("watchlist", JSON.stringify(finalWatchlist));
      setWatchMovies(finalWatchlist);
    };

    return movie ? (
      <Wrapper title={movie.title}>
        <Container>
          <img
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.title}
          />
          <MovieInfo>
            <Text>
              <strong>Overview:</strong> {movie.overview}
            </Text>
            <Text>
              <strong>Genres:</strong> {movieGenres}
            </Text>
            <Button text="button" onClick={addToWatchList}>
              {watchMovies.some((el) => el.id === movie.id)
                ? "Remove from watchlist"
                : "Add to watchlist"}
            </Button>
          </MovieInfo>
        </Container>
      </Wrapper>
    ) : (
      <p>Loading...</p>
    );
  })
);

export default Movie;
