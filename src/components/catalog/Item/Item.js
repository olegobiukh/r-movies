import React, { useState } from "react";
import { Title, Subtitle, Movie, Right } from "./styles";
import { Link } from "react-router-dom";

const Item = ({ item, allGenres }) => {
  const watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
  const [watchMovies, setWatchMovies] = useState(watchlist);

  const toggleItemWatched = () => {
    const finalWatchlist = watchMovies.some((el) => el.id === item.id)
      ? watchlist.filter((el) => el.id !== item.id)
      : [...watchMovies, { id: item.id, title: item.title }];

    localStorage.setItem("watchlist", JSON.stringify(finalWatchlist));
    setWatchMovies(finalWatchlist);
  };

  const genres =
    allGenres.length > 0 &&
    item.genre_ids
      .map((el) => allGenres.find((elem) => elem.id === el))
      .map((element) => element.name);

  return (
    <Movie>
      <img
        src={`https://image.tmdb.org/t/p/w154${item.poster_path}`}
        alt={item.title}
      />
      <Right>
        <Link to={`m${item.id}`}>
          <Title>{item.title}</Title>
        </Link>
        <p className={`title`}>
          <Subtitle>Genre</Subtitle>: {genres && genres.join(", ")}
        </p>
        <button onClick={toggleItemWatched}>
          {watchMovies.some((el) => el.id === item.id)
            ? "Remove from watch list"
            : "Add to watch list"}
        </button>
      </Right>
    </Movie>
  );
};

export default Item;
