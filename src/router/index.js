import Catalog from "../containers/Catalog";
import WatchList from "../containers/WatchList";
import Movie from "../containers/Movie";

export default [
  {
    url: "/",
    component: Catalog,
  },
  {
    url: "/watchlist",
    component: WatchList,
  },
  {
    url: "/m:id",
    component: Movie,
  },
];
