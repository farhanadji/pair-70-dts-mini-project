import { Box } from "@mui/material";
import MovieBar from "../containers/MovieBar";
import MovieBigBar from "../containers/MovieBigBar";

const HomePage = () => {
  return (
    <Box>
      <MovieBar />
      <MovieBigBar />
      <MovieBar />
      <MovieBar />
      <MovieBigBar />
      <MovieBar />
    </Box>
  );
};

export default HomePage;
