import Card from "@mui/joy/Card";
import { CardMedia } from "@mui/material";
import { StyledEngineProvider, CssVarsProvider } from "@mui/joy/styles";
import CardCover from "@mui/joy/CardCover";

const BASE_IMAGE_URL = "http://image.tmdb.org/t/p/w185";

const BigMovieCard = ({ movie }) => {
  return (
    <StyledEngineProvider injectFirst>
      <CssVarsProvider>
        <Card
          sx={{
            maxWidth: 140,
            minWidth: 160,
            height: 320,
            boxShadow: "none",
            "&:hover": {
              transition: "all 0.2s",
              cursor: "pointer",
              transform: "scale(1.1)",
            },
          }}
        >
          <CardCover>
            <CardMedia
              component="img"
              image={
                movie.poster_path
                  ? `${BASE_IMAGE_URL}${movie.poster_path}`
                  : "/not_found.png"
              }
            />
          </CardCover>
        </Card>
      </CssVarsProvider>
    </StyledEngineProvider>
  );
};

export default BigMovieCard;
