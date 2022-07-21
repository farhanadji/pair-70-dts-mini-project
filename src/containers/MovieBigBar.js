import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import BigMovieCard from "../components/BigMovieCard";
import fetchedMovies from "../services/fetchedMovies";

const MovieBigBar = () => {
  const [movies, setMovies] = useState(fetchedMovies.results);
  return (
    <Box sx={{ m: 5 }}>
      <Box
        sx={{
          pt: 5,
          pb: 3,
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
          <Link
            to="/category"
            style={{ color: "#fff", textDecoration: "none" }}
          >
            See more >
          </Link>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: 3,
          overflow: "auto",
        }}
      >
        {movies.map((movie) => (
          <BigMovieCard key={movie.id} movie={movie}></BigMovieCard>
        ))}
      </Box>
    </Box>
  );
};

export default MovieBigBar;
