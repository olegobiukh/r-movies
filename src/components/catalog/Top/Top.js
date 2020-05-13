import React from "react";
import { Link } from "react-router-dom";
import { Header, Title } from "./styles";

const Top = () => {
  return (
    <Header>
      <Link to="/watchlist">Watch list</Link>
      <Title>popular movies</Title>
    </Header>
  );
};

export default Top;
