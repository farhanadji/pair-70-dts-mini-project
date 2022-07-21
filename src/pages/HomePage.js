import { Box } from "@mui/material";
import MovieBar from "../containers/MovieBar";
import MovieBigBar from "../containers/MovieBigBar";

const HomePage = () => {
  return (
    <Box>
      <MovieBar key="trending" title="Trending" query="/movie/popular" />
      <MovieBigBar title="Top Rated" query="/movie/top_rated" />
      <MovieBar key="for-you" title="For You" query="/movie/now_playing" />
      <MovieBigBar title="Upcoming" query="/movie/upcoming" />
      {/* <MovieBar title="For You" query="/movie/latest" /> */}
      {/* <MovieBar /> */}
      {/* <MovieBigBar /> */}
      {/* <MovieBar /> */}
    </Box>
  );
};

export default HomePage;
