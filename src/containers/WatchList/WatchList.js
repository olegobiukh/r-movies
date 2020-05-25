import React, { useState } from "react";
import Wrapper from "../../components/catalog/Wrapper";
import { WatchItem } from "./styles";
import uid from "uid";

const WatchList = () => {
  const watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
  console.log(watchlist);

  const [watchMovies, setWatchMovies] = useState(watchlist);

  const toggleItemWatched = (id) => {
    const finalWatchList = watchMovies.filter((item) => item.id !== id);

    localStorage.setItem("watchlist", JSON.stringify(finalWatchList));
    setWatchMovies(finalWatchList);
  };

  const items =
    watchMovies.length > 0
      ? watchMovies.map((item) => (
          <WatchItem key={uid()}>
            {item.title}
            <button type="text" onClick={() => toggleItemWatched(item.id)}>
              Delete
            </button>
          </WatchItem>
        ))
      : "No movies added";

  return <Wrapper title="Watch list">{items}</Wrapper>;
};

export default WatchList;
