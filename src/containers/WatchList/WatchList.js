import React, { useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";
import Wrapper from "../../components/catalog/Wrapper";
import { WatchItem, Button } from "./styles";
import uid from "uid";

const WatchList = ({ movies }) => {
  const watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
  const [watchMovies, setWatchMovies] = useState(watchlist);

  const toggleItemWatched = (id) => {
    const finalWatchList = watchMovies.filter((item) => item !== id);

    localStorage.setItem("watchlist", JSON.stringify(finalWatchList));
    setWatchMovies(finalWatchList);
  };

  const items =
    watchMovies.length > 0
      ? movies
          .filter((item) => watchMovies.includes(item.id))
          .map((item) => (
            <WatchItem key={uid()}>
              {item.title}
              <button type="text" onClick={() => toggleItemWatched(item.id)}>Delete</button>
            </WatchItem>
          ))
      : "No movies added";

  return <Wrapper title="Watch list">{items}</Wrapper>;
};

export default connect((state) => state, actions)(WatchList);
