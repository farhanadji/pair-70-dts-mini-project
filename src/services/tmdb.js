import axios from "axios";

const baseUrl = "https://api.themoviedb.org/3/";
const API_KEY = process.env.REACT_APP_TMDB_KEY;
const tmdb = axios.create({
  baseURL: baseUrl,
  params: {
    api_key: API_KEY,
  },
});

export default tmdb;
