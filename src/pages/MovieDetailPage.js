import { Box, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import MovieDetailHeader from "../containers/MovieDetailHeader";
import { useParams } from "react-router-dom";
import tmdb from "../services/tmdb";

const MovieDetailPage = () => {
  // eslint-disable-next-line
  const [movie, setMovie] = useState({});

  let params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedMovies = await tmdb.get(`movie/${params?.id}`);
        setMovie(fetchedMovies.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <Box>
      <MovieDetailHeader movie={movie} />
      <Container sx={{ mt: 5, minHeight: "800px" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Typography variant="h5" sx={{ color: "#fff", fontWeight: "bold" }}>
            Overview
          </Typography>

          <Typography variant="h6" sx={{ color: "#fff", textAlign: "left" }}>
            {movie.overview ? movie.overview : "-"}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default MovieDetailPage;
