import { Box, Grid, Link, Typography } from "@mui/material";
import { useState } from "react";
import MovieCard from "../components/MovieCard";
import fetchedMovies from "../services/fetchedMovies";

const MovieBar = () => {
  const [movies, setMovies] = useState(fetchedMovies.results);

  return (
    <Box sx={{ m: 5 }}>
      <Box
        sx={{
          pt: 5,
          pb: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography variant="h5" sx={{ color: "#fff" }}>
            Trending
          </Typography>
        </Box>
        <Box>
          <Link href="#" underline="hover" sx={{ color: "#fff" }}>
            See more
          </Link>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: 3,
          overflow: "auto",
          overflowY: "scroll",
        }}
      >
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            size={{ width: 200, height: 110 }}
            fontVariant="h7"
          ></MovieCard>
        ))}
      </Box>
    </Box>
  );
};

export default MovieBar;
