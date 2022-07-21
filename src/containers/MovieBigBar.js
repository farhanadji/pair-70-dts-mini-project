import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BigMovieCard from "../components/BigMovieCard";
import tmdb from "../services/tmdb";

const MovieBigBar = ({ title, query }) => {
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
    // eslint-disable-next-line
  }, []);

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
        }}
      >
        {movies.map((movie) => (
          <Link
            to={`/detail/${movie.id}`}
            style={{ color: "#fff", textDecoration: "none" }}
          >
            <BigMovieCard key={movie.id} movie={movie}></BigMovieCard>
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default MovieBigBar;
