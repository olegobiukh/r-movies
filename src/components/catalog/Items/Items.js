import React from "react";
import { observer, inject } from "mobx-react";
import Item from "../Item";
import { Movies } from "./styles";
import uid from "uid";

const Items = inject("store")(
  observer(({ store }) => {
    const { movies, genres } = store;
  return (
    <Movies>
      {movies && movies.map((item) => (
        <Item key={uid()} item={item} allGenres={genres} />
      ))}
    </Movies>
  );
}));

export default Items;
