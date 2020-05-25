import { observable } from "mobx"
  
export const store = observable({
  movies: [], 
  genres: [],
  total_pages: 500,
  page: 1,
  isLoaded: true
});