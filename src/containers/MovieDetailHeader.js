import Card from "@mui/joy/Card";
import Chip from "@mui/joy/Chip";
import { Box, CardMedia, Container, Typography } from "@mui/material";
import { StyledEngineProvider, CssVarsProvider } from "@mui/joy/styles";
import CardCover from "@mui/joy/CardCover";

const BASE_IMAGE_URL = "http://image.tmdb.org/t/p";

const MovieDetailHeader = ({ movie }) => {
  return (
    <StyledEngineProvider injectFirst>
      <CssVarsProvider>
        <Container sx={{ pt: 10 }}>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              height: 400,
              background: `${
                movie.backdrop_path
                  ? `linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 400px), url(${BASE_IMAGE_URL}/w780${movie.backdrop_path})`
                  : `linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 400px), url("/not_found.png")`
              }`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                alignItems: "center",
                mx: 10,
                my: "auto",
              }}
            >
              <Card
                sx={{
                  minWidth: 160,
                  height: 250,
                }}
              >
                <CardCover>
                  <CardMedia
                    component="img"
                    image={
                      movie.poster_path
                        ? `${BASE_IMAGE_URL}/w185${movie.poster_path}`
                        : "/not_found.png"
                    }
                  />
                </CardCover>
              </Card>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Typography
                variant="h1"
                sx={{ color: "#fff", fontWeight: "bold" }}
              >
                {movie.original_title ? movie.original_title : "-"}
              </Typography>
              <Typography variant="h4" sx={{ color: "#fff" }}>
                {movie.tagline ? movie.tagline : "-"}
              </Typography>

              <Box
                sx={{
                  mt: 2,
                  display: "flex",
                  gap: 1,
                }}
              >
                {movie.genres
                  ? movie.genres.map((item) => (
                      <Chip color="neutral" key={item.id}>
                        {item.name}
                      </Chip>
                    ))
                  : ""}
              </Box>
            </Box>
          </Box>
        </Container>
      </CssVarsProvider>
    </StyledEngineProvider>
  );
};

export default MovieDetailHeader;
