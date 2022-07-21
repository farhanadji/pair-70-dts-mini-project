import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";

import tmdb from "../services/tmdb";

const MovieBar = ({ title, query }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedMovies = await tmdb.get(`${query}`);
        setMovies(fetchedMovies.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

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
            {title}
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
          overflowY: "scroll",
        }}
      >
        {movies.map((movie) => (
          <Link to="/detail">
            <MovieCard
              key={movie.id}
              movie={movie}
              size={{ width: 200, height: 110 }}
              fontVariant="h7"
            ></MovieCard>
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default MovieBar;
