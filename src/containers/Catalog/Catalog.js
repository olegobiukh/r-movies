import React from "react";
import Items from "../../components/catalog/Items";
import Top from "../../components/catalog/Top";
import { CatalogWrapper } from "./styles";

const Catalog = () => {
  return (
    <CatalogWrapper>
      <Top />
      <Items />
    </CatalogWrapper>
  );
};

export default Catalog;
