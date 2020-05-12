import React from "react";
import { connect } from "react-redux";
import * as actions from "../../../redux/actions";
import Item from "../Item";
import { Movies } from "./styles";
import uid from "uid";

const Items = ({ movies, genres }) => {
  return (
    <Movies>
      {movies && movies.map((item) => (
        <Item key={uid()} item={item} allGenres={genres} />
      ))}
    </Movies>
  );
};

export default connect((state) => state, actions)(Items);
