import React from "react";
import { Link } from "react-router-dom";
import { WrapperBlock, WrapperTop, Title } from "./styles";

const Wrapper = ({ title, children }) => {
  return (
    <WrapperBlock>
      <WrapperTop>
        <Title>{title}</Title>
        <Link to="/">to Main page</Link>
      </WrapperTop>
      {children}
    </WrapperBlock>
  );
};

export default Wrapper;
