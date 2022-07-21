import Typography from "@mui/material/Typography";
import { Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import fetchedMovies from "../services/fetchedMovies";

const MovieList = () => {
  const [movies, setMovies] = useState(fetchedMovies.results);

  return (
    <Box sx={{ m: 5 }}>
      <Box sx={{ m: 5, pt: 5, display: "flex" }}>
        <Typography variant="h4" sx={{ color: "#fff" }}>
          Trending
        </Typography>
      </Box>
      <Grid container spacing={5}>
        {movies.map((movie) => (
          <Grid item xs>
            <MovieCard
              key={movie.id}
              movie={movie}
              size={{ width: 285, height: 160 }}
            ></MovieCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MovieList;
