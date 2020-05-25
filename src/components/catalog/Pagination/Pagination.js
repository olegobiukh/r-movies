import React from "react";
import { observer, inject } from "mobx-react";
import { Button, Buttons } from "./styles";
import uid from "uid";

const Pagination = inject("store")(
  observer(({ store }) => {
    const { page, total_pages, isLoaded } = store;
    const startPage = 1;

    const pages =
      page > startPage && total_pages > page
        ? [page - 1, page, page + 1]
        : page === startPage
        ? [1, 2, 3]
        : page === total_pages
        ? [total_pages - 2, total_pages - 1, total_pages]
        : null;

    const changePage = (chosenPage) => {
      store.page = chosenPage;
    };

    const buttons = pages.map((item) => (
      <Button
        isLoaded={isLoaded}
        current={item === page}
        key={uid()}
        onClick={() => changePage(item)}
      >
        {item}
      </Button>
    ));

    const firstButton =
      page > 2 ? (
        <Button
          isLoaded={isLoaded}
          current={page === startPage}
          page={4}
          onClick={() => changePage(startPage)}
        >
          {startPage}
        </Button>
      ) : null;

    const lastButton =
      page < total_pages - 1 ? (
        <Button
          isLoaded={isLoaded}
          current={page === total_pages}
          isLast={page < total_pages}
          onClick={() => changePage(total_pages)}
        >
          {total_pages}
        </Button>
      ) : null;

    return (
      <Buttons>
        {firstButton}
        {buttons}
        {lastButton}
      </Buttons>
    );
  })
);

export default Pagination;
