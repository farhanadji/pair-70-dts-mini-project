import { Box } from "@mui/material";
import { useState } from "react";
import MovieList from "../containers/MovieList";
import fetchedMovies from "../services/fetchedMovies";

const CategoryDetailPage = () => {
  // eslint-disable-next-line
  const [movies, setMovies] = useState(fetchedMovies.results);
  return (
    <Box>
      <MovieList movies={movies} />
    </Box>
  );
};

export default CategoryDetailPage;
