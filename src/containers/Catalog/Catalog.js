import React from "react";
import Items from "../../components/catalog/Items";
import Top from "../../components/catalog/Top";
import { CatalogWrapper } from "./styles";
import Pagination from "../../components/catalog/Pagination";

const Catalog = () => {
  return (
    <CatalogWrapper>
      <Top />
      <Pagination />
      <Items />
    </CatalogWrapper>
  );
};

export default Catalog;
