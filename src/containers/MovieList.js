import Typography from "@mui/material/Typography";
import { Box, Grid } from "@mui/material";
import MovieCard from "../components/MovieCard";

const MovieList = ({ movies }) => {
  return (
    <Box sx={{ m: 5 }}>
      <Box sx={{ m: 5, pt: 5, display: "flex" }}>
        <Typography variant="h4" sx={{ color: "#fff" }}>
          Trending
        </Typography>
      </Box>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={5}
      >
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
