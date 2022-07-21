import { Box, CardMedia } from "@mui/material";
import CardCover from "@mui/joy/CardCover";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/material/Typography";
import { StyledEngineProvider, CssVarsProvider } from "@mui/joy/styles";

const BASE_IMAGE_URL = "http://image.tmdb.org/t/p/original";

const MovieCard = ({
  movie,
  size = { width: 285, height: 160 },
  fontVariant = "h5",
}) => {
  return (
    <StyledEngineProvider injectFirst>
      <CssVarsProvider>
        <Card
          sx={{
            minWidth: size.width,
            maxWidth: size.width,
            height: size.height,
            boxShadow: "none",
            "&:hover": {
              transition: "all 0.2s",
              cursor: "pointer",
              transform: "scale(1.1)",
              boxShadow: "none",
            },
          }}
        >
          <CardCover>
            <CardMedia
              component="img"
              image={`${BASE_IMAGE_URL}${movie.poster_path}`}
            />
          </CardCover>
          <CardCover
            sx={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 100px)",
            }}
          />
          <CardContent sx={{ justifyContent: "flex-end" }}>
            <Typography variant={fontVariant} fontSize="lg" color="#fff" mb={1}>
              {movie.original_title}
            </Typography>
          </CardContent>
        </Card>
      </CssVarsProvider>
    </StyledEngineProvider>
  );
};

export default MovieCard;
