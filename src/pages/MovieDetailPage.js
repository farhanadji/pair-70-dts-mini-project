import { Box, CardMedia, Container, Typography } from "@mui/material";
import { useState } from "react";
import movieDetail from "../services/movieDetail";
import MovieDetailHeader from "../containers/MovieDetailHeader";

const BASE_IMAGE_URL = "http://image.tmdb.org/t/p/original";

const MovieDetailPage = () => {
  const [movie, setMovie] = useState(movieDetail);

  return (
    <Box>
      <MovieDetailHeader movie={movie} />
      <Container sx={{ mt: 5 }}>
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
            {movie.overview}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default MovieDetailPage;
