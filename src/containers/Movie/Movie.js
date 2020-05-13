import React, { useState } from "react";
import { Container, MovieInfo, Text, Button } from "./styles";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";
import Wrapper from "../../components/catalog/Wrapper";

const Movie = ({ match, movies, genres, isGenresLoaded, isMoviesLoaded }) => {
  const watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
  const [watchMovies, setWatchMovies] = useState(watchlist);

  const id = +match.params.id;
  const movie = movies.find((item) => item.id === id);

  const movieGenres =
    isMoviesLoaded > 0 && isGenresLoaded
      ? movie.genre_ids
          .map((el) => genres.find((elem) => elem.id === el))
          .map((element) => element.name)
          .join(", ")
      : "";

  const addToWatchList = () => {
    const finalWatchlist = watchMovies.includes(movie.id)
      ? watchlist.filter((item) => item !== movie.id)
      : [...watchMovies, movie.id];
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
            {watchMovies.includes(id)
              ? "Remove from watchlist"
              : "Add to watchlist"}
          </Button>
        </MovieInfo>
      </Container>
    </Wrapper>
  ) : (
    <p>Loading...</p>
  );
};

export default connect((state) => state, actions)(Movie);
