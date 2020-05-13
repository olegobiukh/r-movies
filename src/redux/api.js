import axios from "axios";

const baseUrl = "https://api.themoviedb.org/3/";

export const fetchData = async (url) => {
  try {
    const response = axios.get(baseUrl + url);

    const data = await response;

    return data;
  } catch (e) {
    console.log(e);
  }
};
